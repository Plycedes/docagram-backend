import connectDB from "./db";
import { app } from "./app";
import dotenv from "dotenv";

dotenv.config();

const initializeServer = async () => {
    try {
        await connectDB();

        const PORT: number = parseInt(process.env.PORT || "8000", 10);
        app.listen(PORT, () => {
            console.log(`Server is running at http://localhost:${PORT}`);
        });
    } catch (error) {
        console.log("Error initializing the server:", error);
    }
};

initializeServer();
