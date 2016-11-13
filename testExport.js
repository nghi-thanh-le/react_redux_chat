const regexTemplate = /(http|https):\/\/twitter.com\/([^\/"\s]*)\/status\/(\d+)/;

module.exports = function (message) {
    let result = message.match(regexTemplate);
    return {
        url: result[0],
        twitterUser: result[2],
        tweetId: result[3]
    };
};
