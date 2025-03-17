exports.handler = async (event, context) => {
  return {
    statusCode: 200,
    body: JSON.stringify({ message: "L'API fonctionne correctement 🚀" }),
  };
};
