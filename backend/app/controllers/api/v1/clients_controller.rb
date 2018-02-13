module Api::V1
  class ClientsController < ApplicationController
    def index
      @clients = Client.all
      render json: @clients
    end
  end
end
