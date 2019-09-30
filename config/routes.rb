Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'
  namespace :api do
   resources :notes
 end

 get '*other', to: 'static#index'
end
