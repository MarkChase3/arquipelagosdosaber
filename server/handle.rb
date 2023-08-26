require "redis"

redis = Redis.new(host:  'redis-13985.c1.us-east1-2.gce.cloud.redislabs.com', port: 13985, password: 's7fSIn4Lx40fsNpFigmtlw7KiLZF6fl2')
if ARGV[0] == 'school'
    redis.set('schools', redis.get('schools')+','+ARGV[1])
elsif ARGV[0] == 'course'
    redis.set('course.'+ARGV[1]+'.'+ARGV[2], ARGV[3], '')
end