class ProjectsController < ApplicationController
    skip_before_action :authorized
    def index
        render json: Project.all
    end
end
