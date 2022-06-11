class ContactFormController < ApplicationController
    skip_before_action :authorized, only: :create

    def create
        c = ContactForm.new(name: params[:name], email: params[:email], message: params[:message], phone: params[:phone_number])
        c.deliver

        render json: c
    end
end
