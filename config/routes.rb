Rails.application.routes.draw do
  namespace :api do
   resources :notes
 end

 get '*other', to: 'static#index'
end
