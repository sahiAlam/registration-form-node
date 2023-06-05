import mongoose from "mongoose";

// DB
export const connectDB = (url) => {
  mongoose
    .connect(url)
    .then(() => {
      console.log("DB Connected...");
    })
    .catch((err) => {
      console.log(err);
    });
};
