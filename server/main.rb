require 'sinatra'
require './server/sinatra_ssl'
require "redis"
require 'json'
redis = Redis.new(host:  'redis-13985.c1.us-east1-2.gce.cloud.redislabs.com', port: 13985, password: 's7fSIn4Lx40fsNpFigmtlw7KiLZF6fl2')
set :ssl_certificate, "server/cert.crt"
set :ssl_key, "server/pkey.pem"
set :port => 8080
set :public_folder, 'client'
nIslands = redis.get('nIslands')

post '/register' do
    hash = JSON.parse(request.body.read)
    redis.set(hash['name'], hash['password'])
end

post '/login' do
    hash = JSON.parse(request.body.read)
    if redis.get(hash['name']) == hash['password']
        islands = []
        for i in redis.get(hash['id']+'.islands').split ',' do
            islands.push(redis.get('island.'+i))
        end
        if redis.get('course.'+ hash['id'] + '.' + hash['name'])
            return '{"class":"TEACHER", "islands":' + islands.to_json + '}'
        else
            return '{"class":"STUDENT", "islands":' + islands.to_json + '}'
        end
    end
    return '{class:"NOTHING"}'
end

post '/island/new' do
    hash = JSON.parse(request.body.read)
    nIslands = (nIslands.to_i)+1
    redis.set(hash['id']+'.islands', redis.get(hash['id']+'.'+'islands')+','+nIslands.to_s)
    nIslands = (nIslands.to_i)
    redis.set('island.'+nIslands.to_s, hash['x'].to_s+','+hash['y'].to_s)
    redis.set('nIslands', nIslands)
end

post '/island/content' do
    hash = JSON.parse(request.body.read)
    if redis.get(hash['name']) == hash['password']
        if redis.get('course.'+ hash['id'] + '.' + hash['name'])
            redis.set('islandContent.'+hash['number'].to_s, JSON.parse(hash['content']))
        end
    end
end

post '/island/get/content' do
    hash = JSON.parse(request.body.read)
    if redis.get(hash['name']) == hash['password']
        if redis.get('course.'+ hash['id'] + '.' + hash['name'])
            return redis.get('islandContent.'+hash['number'].to_s)
        end
    end
end