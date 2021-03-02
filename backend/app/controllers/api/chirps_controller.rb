# frozen_string_literal: true

module Api
  class ChirpsController < ApplicationController
    include Response
    include ExceptionHandler

    def index
      chirps = Chirp.all
      json_response(chirps, :ok)
    end
  end
end
