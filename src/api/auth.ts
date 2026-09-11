import type { signInForm } from "@/modules/auth/types";
import client from "./client";

export default {
  login: (body: signInForm) => client.post('/login', body);
}