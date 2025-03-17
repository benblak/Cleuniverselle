exports.handler = async function(event, context) {
    // Génère une clé aléatoire
    function generateRandomKey(length) {
        const charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        let key = "";
        for (let i = 0; i < length; i++) {
            key += charset.charAt(Math.floor(Math.random() * charset.length));
        }
        return key;
    }

    const randomKey = generateRandomKey(16); // Clé de 16 caractères

    return {
        statusCode: 200,
        body: JSON.stringify({ key: randomKey }),
        headers: {
            "Content-Type": "application/json"
        }
    };
};
