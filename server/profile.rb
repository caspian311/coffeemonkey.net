
get '/profile' do
  halt_unless_valid_session
  json current_session
end

put '/profile' do
  200
end
