module API
  module V1
    class Api::V1::ImagesController < ApplicationController
      before_action :validate_admin, only: %i[create, destroy]

      def create
        image = Image.create!(image_params)

        if image
          render json: ImageSerializer.new(image).serialized_json
        else
          render json: { status: 500 }
        end
      end

      def destroy
        image = Image.find(params[:id])

        if image.destroy
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

      def image_params
        params.require(:image).permit(:image_url, :destination_id, :city, :city_description)
      end
    end
  end
end