const expression = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/;

export default function(message) {
    const result = message.match(expression);
    if(result) {
        return result[0];
    } else {
        return null;
    }
}
