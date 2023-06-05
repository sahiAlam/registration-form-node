import { app } from "./app.js";
import { connectDB } from "./data/database.js";

connectDB(process.env.MONGO_URI);

// listening
app.listen(process.env.PORT, () => {
  console.log("Server is running on port " + process.env.PORT + "...");
});
