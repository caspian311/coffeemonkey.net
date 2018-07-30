require 'sinatra'
require 'sinatra/json'
require 'sinatra/cross_origin'
require 'active_support/time'
require 'byebug'
require 'faker'

configure do
  enable :cross_origin
end

before do
  response.headers['Access-Control-Allow-Origin'] = '*'
end

options '*' do
  response.headers['Access-Control-Allow-Methods'] = 'GET, POST, OPTIONS, DELETE, PUT'
  response.headers['Access-Control-Allow-Headers'] = 'Authorization, Content-Type, Accept, X-User-Email, X-Auth-Token'
  response.headers['Access-Control-Allow-Origin'] = '*'
  200
end

before do
  update_current_session if valid_session?
end

def valid_session?
  current_session && Time.at(current_session[:expiresAt]) > Time.now
end

def current_session
  puts "No auth token given!" unless env['HTTP_AUTHORIZATION']
  @@sessions[env['HTTP_AUTHORIZATION']]
end

def halt_unless_valid_session
  halt 401 unless valid_session?
end

def update_current_session
  current_session[:expiresAt] = 5.minutes.from_now.utc.to_i
end

require './login'
require './movies'
require './profile'
