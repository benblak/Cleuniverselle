exports.handler = async function(event, context) {
    return {
        statusCode: 200,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            message: "Clé API générée avec succès !",
            apiKey: "CLE-" + Math.random().toString(36).substr(2, 10).toUpperCase()
        })
    };
};
