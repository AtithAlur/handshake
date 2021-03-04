# frozen_string_literal: true

module Api
  class ChirpsController < ApplicationController
    include Response
    include ExceptionHandler

    def index
      chirps = Chirp.includes(:vote).all.order('chirps.created_at desc')
      json_response(chirps, :ok)
    end

    def create
      chirp = Chirp.create_chirp!(chirp_params)
      json_response(chirp, :created)
    end

    def vote_chirp
      vote = Vote.find_by!(chirp_id: params[:chirp_id])
      Vote.cast_vote!(vote, vote_chirp_params)
      json_response(vote, :ok)
    end
    private

    def chirp_params
      params.permit(:text)
    end

    def vote_chirp_params
      params.permit(:up_vote)
    end
  end
end
