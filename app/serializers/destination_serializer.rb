class DestinationSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name

  has_many :images
end
