class ImageSerializer
  include FastJsonapi::ObjectSerializer
  attributes :destination_id, :image_url, :city_description, :city
end
