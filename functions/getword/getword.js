const randomWords = require("random-words");

const getWord = async () => {
  return Promise.resolve(randomWords().toUpperCase());
};

exports.handler = async (event, context) => {
  try {
    // const subject = event.queryStringParameters.name || "World";
    const body = await getWord();
    // return { statusCode: 200, body: `Hello ${subject}` };
    return { statusCode: 200, body };
  } catch (err) {
    return { statusCode: 500, body: err.toString() };
  }
};
