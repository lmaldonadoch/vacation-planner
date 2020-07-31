class ImageSerializer
  include FastJsonapi::ObjectSerializer
  attributes :destination_id, :image_url
end
