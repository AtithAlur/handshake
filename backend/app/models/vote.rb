class Vote < ApplicationRecord
  belongs_to :chirp

  def self.cast_vote!(vote, attributes)
    if attributes[:up_vote] == 'true'
      vote.increment!(:count)
    elsif attributes[:up_vote] == 'false'
      vote.decrement!(:count)
    end
  end

  def as_json(_options = {})
    {
      count: count,
    }
  end
end
