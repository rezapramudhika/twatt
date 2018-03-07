const oauth = require('oauth');

const myOAuth = new oauth.OAuth(
    'https://api.twitter.com/oauth/request_token',
    'https://api.twitter.com/oauth/access_token',
    'CXNzL080xg7XDaHF6kiPyBBnU',
    'a7f7JpqRBGJFoC6KOt5Nc4rVlVVqpJ8Tx0YJBA3qmMy8f4UBzX',
    '1.0A',
    null,
    'HMAC-SHA1'
);

module.exports = {
    search: (req,res) => {
        let request_token_url = `https://api.twitter.com/1.1/search/tweets.json?q=${req.query.search}`;
        myOAuth.get(
            request_token_url,
            '971273050074296323-5tFwVW7aj5FEWqdFSuzt64SKOUMbUrs', //test user token 
            'BZjyROIATYzb8bQ06JklnbvOUkwdZa8SNArvUICGypth1', //test user secret             
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
            '971273050074296323-5tFwVW7aj5FEWqdFSuzt64SKOUMbUrs', //test user token 
            'BZjyROIATYzb8bQ06JklnbvOUkwdZa8SNArvUICGypth1', //test user secret             
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
            '971273050074296323-5tFwVW7aj5FEWqdFSuzt64SKOUMbUrs', //test user token 
            'BZjyROIATYzb8bQ06JklnbvOUkwdZa8SNArvUICGypth1',
            {status: req.body.tweet}, //test user secret             
            function (e, data, r){
              if (e) res.status(500).json({
                  message: 'Internal server error'
              })
              res.status(200).send(data)    
        }); 
    }
    
}