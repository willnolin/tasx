Rails.application.routes.draw do
  post 'auth/login', to: 'auth#login'
  get 'auth/verify', to: 'auth#verify'
  get 'user_projects', to: "projects#show_user_projects"

  resources :sub_tasks
  resources :tasks
  resources :projects
  resources :users

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
