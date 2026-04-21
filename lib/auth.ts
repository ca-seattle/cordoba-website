export const COGNITO_DOMAIN =
  "https://us-east-1vsq1gbctn.auth.us-east-1.amazoncognito.com";

export const CLIENT_ID = "571ibht8rjunu0voc2ildv8csc";

export const REDIRECT_URI = "http://localhost:3000/admin";

export const LOGIN_URL =
  `${COGNITO_DOMAIN}/login?client_id=${CLIENT_ID}` +
  `&response_type=code&scope=email+openid+phone+profile` +
  `&redirect_uri=${encodeURIComponent(REDIRECT_URI)}`;

export const LOGOUT_URL =
  `${COGNITO_DOMAIN}/logout?client_id=${CLIENT_ID}` +
  `&logout_uri=${encodeURIComponent("http://localhost:3000")}`;
