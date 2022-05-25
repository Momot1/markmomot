class UsersController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :rescue_not_found
    skip_before_action :authorized, only: :create

    def create
        user = User.create(username: params[:username].downcase.gsub(/\s+/, ""), email: params[:email].downcase.gsub(/\s+/, ""), birthday: params[:birthday], name: params[:name].downcase, password: params[:password], password_confirmation: params[:password_confirmation])
        if user.valid?
            session[:user_id] = user.id
            render json: user, status: :created
        else
            render json: {errors: user.errors.full_messages}, status: :unprocessable_entity
        end
    end

    def show
        user = User.find(session[:user_id])

        render json: user, status: :created
    end

    private

    def rescue_not_found
        render json: {errors: "Not authorized. Please login"}, status: :unauthorized
    end
end
