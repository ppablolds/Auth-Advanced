//Import Package
import { MailtrapClient } from "mailtrap";
import dotenv from "dotenv";

//Config dotenv
dotenv.config();

export const mailtrapClient = new MailtrapClient({
  token: process.env.MAILTRAP_TOKEN,
  endpoint: process.env.MAILTRAP_ENDPOINT,
});

export const sender = {
  email: "hello@demomailtrap.com",
  name: "Pablo Dev",
};