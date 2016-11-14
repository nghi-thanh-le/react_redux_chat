const regexTemplate = /(?:youtube\.com\/\S*(?:(?:\/e(?:mbed))?\/|watch\?(?:\S*?&?v\=))|youtu\.be\/)([a-zA-Z0-9_-]{6,11})/;

export default function (url) {
    let result = url.match(regexTemplate);
    if (result) {
        return {
            url: result[0],
            videoId: result[1]
        };
    } else {
        return null;
    }
};
