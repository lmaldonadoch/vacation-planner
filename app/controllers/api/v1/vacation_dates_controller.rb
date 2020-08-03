module API
  module V1
    class Api::V1::VacationDatesController < ApplicationController
      skip_before_action :verify_authenticity_token
      def create
        p params
        date = VacationDate.create!(date_params)

        if date
          vacation_dates = @current_user.vacation_dates
          render json: { status: 'created', user: @current_user, vacation_dates: vacation_dates }
        else
          render json: { status: 500 }
        end
      end

      def destroy
        date = VacationDate.find(params[:id])

        if date.destroy
          render json: { status: 'destroyed' }
        else
          render json: { status: 500 }
        end
      end 

      private

      def date_params
        params.require(:date).permit(:user_id, :destination_id, :image_id, :start_date, :end_date)
      end
    end
  end
end