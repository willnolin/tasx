class User < ApplicationRecord
  has_secure_password
  has_many :projects
  
  validates :username, presence: true, uniqueness: true
  validates :email, presence: true, uniqueness: true
  validates :email, format: {with: URI::MailTo::EMAIL_REGEXP}
  validates :password, length: {minimum: 6}, on: create
  validates :password, confirmation: true
  validates :password_confirmation, presence: true
end
