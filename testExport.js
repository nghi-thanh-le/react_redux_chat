const regexTemplate = /(http|https):\/\/twitter.com\/([^\/"\s]*)\/status\/(\d+)/;

module.exports = function (message) {
    let result = regexTemplate.exec(message);
    console.log(result);
    if (result) {
        return {
            url: result[0],
            twitterUser: result[2],
            tweetId: result[3]
        };
    } else {
        return null;
    }
};
