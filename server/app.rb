require 'sinatra'
require 'sinatra/json'
require 'sinatra/cross_origin'
require 'active_support/time'
require 'byebug'
require 'faker'

@@sessions = {}

configure do
  enable :cross_origin
end

before do
  response.headers['Access-Control-Allow-Origin'] = '*'
end

options '*' do
  response.headers['Allow'] = 'GET, POST, OPTIONS'
  response.headers['Access-Control-Allow-Headers'] = 'Authorization, Content-Type, Accept, X-User-Email, X-Auth-Token'
  response.headers['Access-Control-Allow-Origin'] = '*'
  200
end

post '/login' do
  halt 401 if params['username'] != 'test' || params['password'] != 'pass'

  auth_token = SecureRandom.uuid
  payload = { authToken: auth_token,
              firstName: Faker::Name.first_name,
              lastName: Faker::Name.last_name,
              expiresAt: 5.minutes.from_now.utc.to_i }
  @@sessions[auth_token] = payload

  json payload
end

get '/secrets' do
  auth_token = env['HTTP_AUTHORIZATION']

  if @@sessions.keys.include?(auth_token)
    secrets = 5.times.map do
      Faker::Name.name
    end

    json secrets: secrets
  else
    halt 401
  end
end

get '/movies' do
  json movies: [
    {
      title: 'Star Wars: A New Hope',
      release_date: '1977'
    },
    {
      title: 'Star Wars: Empire Strikes Back',
      release_date: '1980'
    },
    {
      title: 'Star Wars: Return of the Jedi',
      release_date: '1983'
    },
    {
      title: 'Indiana Jones: Raiders of the Lost Ark',
      release_date: '1981'
    },
    {
      title: 'Indiana Jones and the Temple of Doom',
      release_date: '1984'
    },
    {
      title: 'Indiana Jones and the Last Crusade',
      release_date: '1989'
    }
  ]
end
