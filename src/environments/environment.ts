export const environment = {
  production: false,
  apiUrl: 'http://localhost:8081',
  tokenAllowedDomains: [/localhost:8081/],
  tokenDisallowedRoutes: [/\/oauth\/token/],
  oauthCallbackUrl: 'http://localhost:8081/authorized',
  logoutRedirectToUrl: 'http://localhost:8081'
};
