module CurrentUserConcern
  extend ActiveSupport::Concern

  included do
    before_action :set_current_user
  end

  def set_current_user
    
    p '*' * 20
    p '*' * 20
    p '*' * 20
    p '*' * 20
    p '*' * 20
    p 'SET CURRENT USER IN CONCERN'
    p session[:user_id]
    p '*' * 20
    p '*' * 20
    p '*' * 20
    p '*' * 20
    p '*' * 20
    @current_user = User.find(session[:user_id]) if session[:user_id]
  end
end
