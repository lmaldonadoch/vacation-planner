module API
  module V1
    class Api::V1::ImagesController < ApplicationController
      skip_before_action :verify_authenticity_token
      include CurrentUserConcern
      before_action :validate_admin, only: %i[create destroy]

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
        render json: { status: 401 } unless @current_user.admin
      end

      def image_params
        params.require(:image).permit(:image_url, :destination_id, :city, :city_description)
      end
    end
  end
end
