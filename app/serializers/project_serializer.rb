class ProjectSerializer < ActiveModel::Serializer
  attributes :id, :name, :github_url, :project_url, :description
end
