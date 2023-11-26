let Url = "";

if (process.env.REACT_APP_ENVIRONMENT === "DEVELOPMENT") {
  Url = "http://localhost:3001";
}
if (process.env.REACT_APP_ENVIRONMENT === "PRODUCTION") {
  Url = "https://donuts-4c1f.onrender.com";
}

export const BaseUrl = Url;
// export const BaseUrl = "http://localhost:3001";
