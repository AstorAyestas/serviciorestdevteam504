import dotenv from 'dotenv';
import Server from "./server/server";

dotenv.config()
const app = new Server()
app.run()