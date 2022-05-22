class User < ApplicationRecord
    validates :name, :username, :email, :birthday, presence: true

    validates :username, :email, uniqueness: true

    has_secure_password
end
