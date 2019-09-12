Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'

  mount_devise_token_auth_for 'Admin', at: 'api/admin_auth'
  as :admin do
    # Define routes for Admin within this block.
    resources :contact
  end
  namespace :api do
   resources :notes
 end

 get '*other', to: 'static#index'
end
