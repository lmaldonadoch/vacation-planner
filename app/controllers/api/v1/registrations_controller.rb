module API
  module V1
    class Api::V1::RegistrationsController < ApplicationController
      skip_before_action :verify_authenticity_token
      def create
        user = User.create!(
          name: params['user']['name'],
          email: params['user']['email'],
          password: params['user']['password'],
          password_confirmation: params['user']['password_confirmation']
        )

        if user
          session[:user_id] = user.id
          render json: {
            status: 'created',
            user: user
          }
        else
          render json: { status: 500 }
        end
      end
    end
  end
end