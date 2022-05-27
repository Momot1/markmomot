class ProjectsController < ApplicationController
    skip_before_action :authorized, only: [:index]
    def index
        render json: Project.all
    end

    def create
        user = User.find(session[:user_id])
        if user.is_admin
            project = user.projects.create(project_params)
            render json: project, status: :created
        else
            render json: {error: "You have to be an administrator to add a project."}, status: :unauthorized
        end
    end

    private

    def project_params
        params.permit(:name, :github_url, :project_url)
    end
end
