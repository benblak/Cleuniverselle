exports.handler = async function(event, context) {
    return {
        statusCode: 200,
        body: JSON.stringify({ message: "L'API fonctionne bien !" }),
        headers: {
            "Content-Type": "application/json"
        }
    };
};
