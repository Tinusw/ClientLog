module Api::V1
  class ClientsController < ApplicationController
    def index
      @clients = Client.all
      render json: @clients
    end

    def create
      @client = Client.new(client_params)
      @clients = Client.all
      if @client.save
        render json: {
          status: 200,
          message: "Sucess",
          data: @clients
        }
      else
        render jsos: {
          status: 500,
          message: @client.errors
        }
      end
    end


    private

    def client_params
      params.require(:data).permit(:first_name, :last_name, :email, :phone)
    end
  end
end
