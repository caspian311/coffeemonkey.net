
get '/profile' do
  halt_unless_valid_session
  json current_session
end
