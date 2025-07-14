import admin from "../firebaseAdmin";

export const protectedRoute = async (req, res, next) => {
  const token = req.headers.authorization?.split("Bearer ")[1];
  try {
    const decodeToken = await admin.auth().verifyIdToken(token);
    req.user = decodedToken;
    next();
  }catch (error) {
    res.status(401).json({ error: "Unauthorized" });
  }
}

