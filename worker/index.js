const keys = require('./keys.js')
const redis = require('redis')

const redisClient = redis.createClient({
    host: keys.redisHost,
    port: keys.redisPort,
    retry_strategy: () => 1000
});
const sub = redisClient.duplicate();

function calc_fib(index){
    if (index < 2) return 1;
    return calc_fib(index-1) + calc_fib(index-2)
}

sub.on('message', (channel, message) => {
   redisClient.hset('values', message, calc_fib(parseInt(message)));
});
sub.subscribe('insert');
