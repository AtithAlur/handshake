require 'rails_helper'

RSpec.describe "Api::Chirps", type: :request do

  describe 'index' do
    let!(:chirps) { FactoryBot.create_list(:chirp, 10) }
    let(:expected_response) do
      chirps.map do|chirp|
        {'id' => chirp.id, 'text' => chirp.text}
      end
    end

    it 'returns all the chirps' do
      get '/api/chirps'

      expect(response).to have_http_status(:ok)
      response_body = JSON.parse(response.body)
      expect(response_body).to eq(expected_response)
    end 
  end

  describe 'create' do
    let(:request) do
      {
        text: Faker::Lorem.characters(number: 140)
      }
    end

    it 'creates a new chirp' do
      post '/api/chirps', params: request

      expect(response).to have_http_status(:created)
      response_body = JSON.parse(response.body)
    end
  end

  describe 'vote_chirp' do
    let(:chirp) { FactoryBot.create(:chirp) }
    let(:request) do
      {
        up_vote: 'true'
      }
    end

    it 'creates a new chirp' do
      put "/api/chirps/#{chirp.id}/vote_chirp", params: request

      expect(response).to have_http_status(:ok)
      p response_body = JSON.parse(response.body)
    end
  end
end
