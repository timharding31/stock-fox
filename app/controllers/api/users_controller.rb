class Api::UsersController < ApplicationController

  def create
    @user = User.new(user_params)
    if @user.save
      login!(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: 401
    end
  end

  def index
    @user = current_user
    render :show
  end

  def update
    if params[:reset]
        current_user.update(buying_power: 10000.00)
    elsif params[:light_mode]
        current_user.toggle_light_mode()
    else
        current_user.add_buying_power(params[:amt])
    end
    @user = current_user
    render :show
  end

  private
  def user_params
    params.require(:user).permit(:first_name, :last_name, :email, :username, :password, :amt, :reset, :light_mode)
  end
end
