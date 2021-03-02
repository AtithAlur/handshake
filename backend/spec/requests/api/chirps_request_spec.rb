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
end
