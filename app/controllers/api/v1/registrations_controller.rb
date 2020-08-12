module API
  module V1
    class Api::V1::RegistrationsController < ApplicationController
      skip_before_action :verify_authenticity_token
      def create
        user = User.create!(
          user_params
        )

        if user
          session[:user_id] = user.id
          render json: {
            status: 'created',
            user: user,
            vacation_dates: []
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
