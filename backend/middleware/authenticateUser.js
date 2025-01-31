// const authenticateUser = (req, res, next) => {
//     const token = req.cookies.jwt;
  
//     if (!token) {
//       console.log("No token found in cookies");
//       return res.status(401).json({ error: "Unauthorized" });
//     }
  
//     try {
//       const decoded = jwt.verify(token, process.env.JWT_SECRET);
//       console.log("Decoded JWT:", decoded);  // Check if decoding works correctly
//       req.userId = decoded.id;
//       next();
//     } catch (error) {
//       console.log("Authentication error:", error.message);
//       res.status(401).json({ error: "Invalid token" });
//     }
//   };
  

// export default authenticateUser;

import jwt from 'jsonwebtoken';

const authenticateUser = (req, res, next) => {
    console.log("Cookies:", req.cookies); // Log all cookies to verify if the token is present
    const token = req.cookies.jwt;
    console.log("Token from cookies:", token); // Log token to verify it's being received

    if (!token) {
        console.log("No token found in cookies");
        return res.status(401).json({ error: "Unauthorized" });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        console.log("Decoded JWT:", decoded); // Log decoded token to check the payload
        req.userId = decoded.userId; // Ensure this matches the payload structure
        next();
    } catch (error) {
        console.log("Authentication error:", error.message);
        res.status(401).json({ error: "Invalid token" });
    }
};

export default authenticateUser;