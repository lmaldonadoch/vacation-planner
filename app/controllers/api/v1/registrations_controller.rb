module API
  module V1
    class Api::V1::RegistrationsController < ApplicationController
      skip_before_action :verify_authenticity_token
      def create
        user = User.new(user_params)

        if User.find_by(email: params['user']['email'])
          render json: {
            status: 'error',
            user: {},
            vacation_dates: [],
            logged_in: false
          }
        elsif user.save
          session[:user_id] = user.id
          render json: {
            user: user,
            vacation_dates: [],
            logged_in: true
          }
        else
          render json: { status: 500 }
        end
      end

      private

      def user_params
        params.require(:user).permit(:name, :email, :password, :password_confirmation)
      end
    end
  end
end
