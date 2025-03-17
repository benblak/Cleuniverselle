exports.handler = async (event, context) => {
  const apiKey = Math.random().toString(36).substring(2, 15);
  return {
    statusCode: 200,
    body: JSON.stringify({ apiKey }),
  };
};
