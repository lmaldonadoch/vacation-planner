module API
  module V1
    class Api::V1::DestinationsController < ApplicationController
      skip_before_action :verify_authenticity_token
      include CurrentUserConcern
      before_action :validate_admin, only: %i[create update destroy]
      before_action :destination, only: %i[show update destroy]
      before_action :set_options, only: %i[index show update]

      def index
        destinations = Destination.all.includes(:images)

        render json: DestinationSerializer.new(destinations, @options).serialized_json
      end

      def show
        render json: DestinationSerializer.new(@destination, @options).serialized_json
      end

      def create
        destination = Destination.create!(destination_params)

        if destination
          render json: DestinationSerializer.new(destination).serialized_json
        else
          render json: { status: 500 }
        end
      end

      def update
        if @destination.update(
          place: params['destination']['place']
        )
          render json: DestinationSerializer.new(@destination, @options).serialized_json
        else
          render json: { status: 500 }
        end
      end

      def destroy
        if @destination.destroy
          render json: { status: 'destroyed' }
        else
          render json: { status: 500 }
        end
      end

      private

      def validate_admin
        render json: { status: 401 } unless @current_user.admin
      end

      def destination_params
        params.require(:destination).permit(:place, :country_description)
      end

      def set_options
        @options = { include: [:images] }
      end

      def destination
        @destination ||= Destination.find(params[:id]).includes(:images)
      end
    end
  end
end
