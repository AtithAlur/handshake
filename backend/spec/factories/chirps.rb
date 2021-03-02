FactoryBot.define do
  factory :chirp do
    text { Faker::String.random(length: 4) }
  end
end
