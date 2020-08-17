class DestinationSerializer
  include FastJsonapi::ObjectSerializer
  attributes :place, :country_description

  has_many :images
end
