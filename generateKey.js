exports.handler = async (event, context) => {
    return {
        statusCode: 200,
        body: JSON.stringify({ 
            message: "Clé API générée avec succès !",
            apiKey: generateApiKey()
        })
    };
};

function generateApiKey() {
    return 'CLE-' + Math.random().toString(36).substring(2, 15) + '-' + Math.random().toString(36).substring(2, 15);
}
