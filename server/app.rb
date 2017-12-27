require 'sinatra'
require 'sinatra/json'
require 'byebug'
require 'faker'

@@sessions = {}

post '/login' do
  headers 'Access-Control-Allow-Origin' => '*'
  halt 401 if params['username'] != 'test' || params['password'] != 'pass'

  auth_token = SecureRandom.uuid
  payload = { authToken: auth_token,
              firstName: Faker::Name.first_name,
              lastName: Faker::Name.last_name }
  @@sessions[auth_token] = payload

  json payload
end

get '/secrets' do
  headers 'Access-Control-Allow-Origin' => '*'
  #if @@sessions.keys.include?(headers['authToken'])
  secrets = 5.times.map do
    Faker::Name.name
  end

  json secrets: secrets
  #else
    #halt 401
  #end
end

get '/movies' do
  headers 'Access-Control-Allow-Origin' => '*'
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
