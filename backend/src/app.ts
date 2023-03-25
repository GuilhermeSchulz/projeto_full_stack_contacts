import "express-async-errors";
import "reflect-metadata";
import express, { Request, Response } from "express";
import { userRoutes } from "./routes/users.routes";
import { loginRoutes } from "./routes/login.routes";
import { contactsRoutes } from "./routes/contacts.routes";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());
app.use("/users", userRoutes);
app.use("/login", loginRoutes);
app.use("/contacts", contactsRoutes);

app.use(express.static("Docs"));
app.use("/", (req: Request, res: Response) => {
  res.render("index.html");
});
export default app;
