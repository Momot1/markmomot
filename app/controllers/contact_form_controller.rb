class ContactFormController < ApplicationController
    def create
        c = ContactForm.new(name: params[:name], email: params[:email], message: params[:message])
        c.deliver

        render json: c
    end
end
