export const COGNITO_DOMAIN = process.env.NEXT_PUBLIC_COGNITO_DOMAIN || "";
export const CLIENT_ID = process.env.NEXT_PUBLIC_COGNITO_CLIENT_ID || "";
export const REDIRECT_URI = process.env.NEXT_PUBLIC_COGNITO_REDIRECT_URI || "";

if (!COGNITO_DOMAIN || !CLIENT_ID || !REDIRECT_URI) {
  throw new Error(
    "Missing required Cognito environment variables: NEXT_PUBLIC_COGNITO_DOMAIN, NEXT_PUBLIC_COGNITO_CLIENT_ID, or NEXT_PUBLIC_COGNITO_REDIRECT_URI"
  );
}

export const LOGIN_URL =
  `${COGNITO_DOMAIN}/login?client_id=${CLIENT_ID}` +
  `&response_type=code&scope=email+openid+phone+profile` +
  `&redirect_uri=${encodeURIComponent(REDIRECT_URI)}`;

export const LOGOUT_URL =
  `${COGNITO_DOMAIN}/logout?client_id=${CLIENT_ID}` +
  `&logout_uri=${encodeURIComponent("http://localhost:3000")}`;
