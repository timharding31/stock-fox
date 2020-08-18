class Api::CryptosController < ApplicationController

  # before_action :require_logged_in, only: [:show]

  def show
    @crypto = Crypto.find_by(symbol: params[:symbol])
    unless @crypto
      render json: ['Crypto symbol not found'], status: 404
    end
  end

end
