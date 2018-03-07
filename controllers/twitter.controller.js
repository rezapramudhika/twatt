const oauth = require('oauth');

const myOAuth = new oauth.OAuth(
    'https://api.twitter.com/oauth/request_token',
    'https://api.twitter.com/oauth/access_token',
    process.env.CONSUMER_KEY,
    process.env.SECRET_KEY,
    '1.0A',
    null,
    'HMAC-SHA1'
);

module.exports = {
    search: (req,res) => {
        let request_token_url = `https://api.twitter.com/1.1/search/tweets.json?q=${req.query.search}`;
        myOAuth.get(
            request_token_url,
            process.env.USER_TOKEN, //test user token 
            process.env.USER_SECRET, //test user secret             
            function (e, data, r){
              if (e) res.status(500).json({
                  message: 'Internal server error'
              })
              res.status(200).send(data)    
        }); 
    },
    recentTimeline: (req, res) => {
        let request_token_url = 'https://api.twitter.com/1.1/statuses/home_timeline.json';
        myOAuth.get(
            request_token_url,
            process.env.USER_TOKEN, //test user token 
            process.env.USER_SECRET, //test user secret             
            function (e, data, r){
              if (e) res.status(500).json({
                  message: 'Internal server error'
              })
              res.status(200).send(data)    
        }); 
    },
    createTweet: (req, res) => {
        let request_token_url = `https://api.twitter.com/1.1/statuses/update.json`;
        myOAuth.post(
            request_token_url,
            process.env.USER_TOKEN, //test user token 
            process.env.USER_SECRET,
            {status: req.body.tweet}, //test user secret             
            function (e, data, r){
              if (e) res.status(500).json({
                  message: 'Internal server error'
              })
              res.status(200).send(data)    
        }); 
    }
    
}