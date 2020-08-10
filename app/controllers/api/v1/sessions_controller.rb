require_relative '../../concerns/current_user_concern.rb'

module API
  module V1
    class Api::V1::SessionsController < ::ApplicationController
      skip_before_action :verify_authenticity_token
      include CurrentUserConcern
      def create
        user = User.find_by(email: params['user']['email'])
          .try(:authenticate, params['user']['password'])
        if user
          session["init"] = true
          session[:user_id] = user.id
          p '*' * 20
          p '*' * 20
          p '*' * 20
          p '*' * 20
          p '*' * 20
          p 'SET CURRENT USER CONTROLLER'
          p session
          p session[:user_id]
          p '*' * 20
          p '*' * 20
          p '*' * 20
          p '*' * 20
          p '*' * 20
          render json: {
            status: :created,
            logged_in: true,
            user: user,
            vacation_dates: user.vacation_dates
          }
        else
          render json: { status: 401 }
        end
      end

      def logged_in
        p '*' * 20
        p '*' * 20
        p '*' * 20
        p '*' * 20
        p '*' * 20
        p @current_user
        p '*' * 20
        p '*' * 20
        p '*' * 20
        p '*' * 20
        p '*' * 20
        if @current_user
          render json: {
            logged_in: true,
            user: @current_user,
            vacation_dates: @current_user.vacation_dates
          }
        else
          render json: { logged_in: false, user: {}, vacation_dates: [{}] }
        end
      end

      def logout
        reset_session
        render json: { status: 200, logged_out: true }
      end
    end
  end
end
