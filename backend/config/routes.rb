# frozen_string_literal: true

Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  #

  namespace :api do
    resources :chirps, only: [:index, :create]

    put '/chirps/:chirp_id/vote_chirp', to: 'chirps#vote_chirp'
  end
end
