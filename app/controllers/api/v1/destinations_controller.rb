module API
  module V1
    class Api::V1::DestinationsController < ApplicationController
      skip_before_action :verify_authenticity_token
      include CurrentUserConcern
      before_action :validate_admin, only: %i[create, update, destroy]
      def index
        destinations = Destination.all.includes(:images)
        
        render json: DestinationSerializer.new(destinations, options).serialized_json
      end

      def show
        destination = Destination.find(params[:id]).includes(:images)

        render json: DestinationSerializer.new(destination, options).serialized_json
      end

      def create
        destination = Destination.create!(
          place: params['destination']['place'],
        )

        if destination
          render json: DestinationSerializer.new(destination).serialized_json
        else
          render json: { status: 500 }
        end
      end

      def update
        destination = Destination.find(params[:id])

        if destination.update(
          place: params['destination']['place'],
        )
          render json: DestinationSerializer.new(destination, options).serialized_json
        else
          render json: { status: 500 }
        end
      end

      def destroy
        destination = Destination.find(params[:id])

        if destination.destroy
          render json: { status: 'destroyed' }
        else
          render json: { status: 500 }
        end
      end 

      private

      def validate_admin
        unless @current_user.adim
          render json: { status: 401 }
        end
      end

      def destination_params
        params.require(:destination).permit(:place)
      end

      def options
        @options = {include: [:images]}
      end
    end
  end
end