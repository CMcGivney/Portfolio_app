Rails.application.routes.draw do
  
  # mount_devise_token_auth_for 'User', at: 'api/auth'
  namespace :api do
  mount_devise_token_auth_for 'User', at: 'auth'
  as :user do
    
  end
end

  namespace :api do
   resources :notes
 end
 
  namespace :api do
    namespace :user do
   resources :notes
 end
end

 get '*other', to: 'static#index'
end
