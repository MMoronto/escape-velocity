class ReviewSerializer
  include FastJsonapi::ObjectSerializer
  attributes :title, :description, :score, :orbiter_id
end
