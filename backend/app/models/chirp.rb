# frozen_string_literal: true

class Chirp < ApplicationRecord
  has_one :vote

  validates :text, presence: true, length: {maximum: 140, minimum: 1}

  def self.create_chirp!(attrs)
    chirp = Chirp.create!(text: attrs[:text])
    chirp.create_vote(count: 0)
    chirp
  end

  def as_json(_options = {})
    response = {
      id: id,
      text: text.upcase
    }
    if vote.present?
      response.merge!(vote: vote)
    end
    response
  end
end
