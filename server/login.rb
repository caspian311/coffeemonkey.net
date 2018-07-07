require 'sinatra'
require 'sinatra/json'
require 'active_support/time'
require 'byebug'
require 'faker'

@@sessions = {}

post '/login' do
  unless valid_login?
    puts '401: invalid creds'
    halt 401
  end

  auth_token = SecureRandom.uuid
  payload = { authToken: auth_token,
              firstName: Faker::Name.first_name,
              lastName: Faker::Name.last_name,
              expiresAt: 5.minutes.from_now.utc.to_i }
  @@sessions[auth_token] = payload

  json payload
end

def valid_login?
  login = JSON.parse(request.body.read) rescue nil
  return false unless login
  login['username'] == 'test' and login['password'] == 'pass'
end
