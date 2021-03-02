# frozen_string_literal: true

class Chirp < ApplicationRecord
  def as_json(_options = {})
    {
      id: id,
      text: text
    }
  end
end
