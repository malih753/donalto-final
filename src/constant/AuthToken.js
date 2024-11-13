import Cookies from "js-cookie";

// Set the token in cookies
const user = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null;
if (user && user.accessToken) {
  Cookies.set("authToken", user.accessToken, { expires: 4 }); 
}

// Retrieve the token from cookies
export const authToken = Cookies.get("authToken") || null;
