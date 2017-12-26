require 'sinatra'
require 'sinatra/json'
require 'byebug'

post '/login' do
  headers 'Access-Control-Allow-Origin' => '*'
  if params['username'] == 'test' and params['password'] == 'pass'
    json session: 'blah blah blah'
  else
    halt 401
  end
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
