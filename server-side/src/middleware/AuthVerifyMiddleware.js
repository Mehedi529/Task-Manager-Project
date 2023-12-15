const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    // Extract the token from the 'token-key' header
    let token = req.headers['token-key'];

    // Check if the token is missing
    if (!token) {
        return res.status(401).json({ status: "unauthorized", message: "Token missing" });
    }

    // Verify the token using the secret key
    jwt.verify(token, "SecretKey123456789", function (error, decoded) {
        if (error) {
            console.error("Error verifying token:", error);
            return res.status(401).json({ status: "unauthorized", message: "Invalid token" });
        } else {
            // Extract email from the decoded token
            let email = decoded['data'];

            // Log the decoded email for debugging purposes
            console.log("Decoded email:", email);

            // Set the email in the request headers for further use
            req.headers.email = email;

            // Continue to the next middleware or route handler
            next();
        }
    });
};
