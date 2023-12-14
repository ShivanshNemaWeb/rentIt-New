const jwt = require('jsonwebtoken');
require('dotenv').config();

exports.authenticate = async(req, res, next) => {
    // Get the token from the request headers or query parameters
    const token = req.headers.authorization || req.query.token;

    // Check if token exists
    if (!token) {
        return res.status(401).json({ error: 'Unauthorized: No token provided' });
    }

    try {
        // Verify the token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // Check if the decoded token contains the userId
        if (!decoded.userId) {
            return res.status(401).json({ error: 'Unauthorized: Invalid token' });
        }
        
        req.user = decoded; // Store the decoded user information in the request object
        next(); // Move to the next middleware or route handler
        // return res.status(200).json({ message: 'Authorized' });
    } catch (err) {
        console.error(err); // Log the error for debugging purposes
        return res.status(401).json({ error: 'Unauthorized: Invalid token' });
    }
};