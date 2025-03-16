exports.handler = async (event, context) => {
    return {
        statusCode: 200,
        body: JSON.stringify({
            message: "Bienvenue sur l'API Clé Universelle ! 🚀",
            status: "OK",
            version: "1.0"
        })
    };
};
