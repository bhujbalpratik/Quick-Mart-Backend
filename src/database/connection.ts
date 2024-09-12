import mongoose from "mongoose"

export const connectToDatabase = () => {
  mongoose
    .connect(process.env.MONGODB_URI as string, { dbName: "Quickmart" })
    .then(() => console.log(`Database Connected Successfully !`))
    .catch((error) => console.log(`Error while database connection : `, error))
}
