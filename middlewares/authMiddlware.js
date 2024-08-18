const jwt = require("jsonwebtoken");

const authenticateJWT = (req, res, next) => {
  // console.log(req.headers);

  const token = req.headers.authorization?.split(" ")[1];
  console.log("🚀 ~ authenticateJWT ~ token:", token);
  console.log("starting of the function", token);
  if (!token) {
    console.log("token ", token);
    return res
      .status(401)
      .json({ message: "Access token is missing or invalid" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log("decoded", decoded);
    req.user = decoded;
    next();
  } catch (error) {
    console.log("error", error);
    res.status(401).json({ message: "Access token is missing or invalid" });
  }
};

module.exports = authenticateJWT;
