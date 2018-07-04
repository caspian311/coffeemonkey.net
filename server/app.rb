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
  unless valid_login? request
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

def valid_login?(request)
  login = JSON.parse(request.body.read) rescue nil
  return false unless login
  login['username'] == 'test' and login['password'] == 'pass'
end

get '/secrets' do
  if valid_session?
    update_current_session

    secrets = 5.times.map do
      Faker::Name.name
    end

    json secrets: secrets
  else
    if current_session
      puts "401: Sessions expired at #{current_session[:expiresAt]}"
    else 
      puts "401: Session #{env['HTTP_AUTHORIZATION']} did not exist in #{@@sessions.keys}"
    end
    halt 401
  end
end

def valid_session?
  if current_session && current_session[:expiresAt]
    return Time.at(current_session[:expiresAt]) > Time.now
  end
  false
end

def current_session
  puts "No auth token given!" unless env['HTTP_AUTHORIZATION']
  @@sessions[env['HTTP_AUTHORIZATION']]
end

def update_current_session
  current_session[:expiresAt] = 5.minutes.from_now.utc.to_i
end

@@movies = [
  {
    id: 1,
    title: 'Star Wars: A New Hope',
    release_date: '1977'
  },
  {
    id: 2,
    title: 'Star Wars: Empire Strikes Back',
    release_date: '1980'
  },
  {
    id: 3,
    title: 'Star Wars: Return of the Jedi',
    release_date: '1983'
  },
  {
    id: 4,
    title: 'Indiana Jones: Raiders of the Lost Ark',
    release_date: '1981'
  },
  {
    id: 5,
    title: 'Indiana Jones and the Temple of Doom',
    release_date: '1984'
  },
  {
    id: 6,
    title: 'Indiana Jones and the Last Crusade',
    release_date: '1989'
  }
]
@@id = 6

get '/movies' do
  json movies: @@movies
end

post '/movies' do
  unless valid_title?(request)
    puts '400: invalid title'
    halt 400
  end

  @@id += 1
  movie = {
    id: @@id,
    title: @title
  }

  @@movies << movie

  json movie
end

def valid_title?(request)
  data = JSON.parse(request.body.read) rescue nil
  return false unless data
  @title = data["title"]
  @title.to_s.empty? == false
end
