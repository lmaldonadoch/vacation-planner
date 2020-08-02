class DestinationSerializer
  include FastJsonapi::ObjectSerializer
  attributes :place

  has_many :images
end
