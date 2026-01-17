import { apiClient } from "../api/apiServices";

export const loginUser = (data) => {
  console.log("📤 Login Request:", data);
  return apiClient.post("/api/auth/login", data);
};
