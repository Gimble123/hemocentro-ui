export const environment = {
  production: false,
  apiUrl: 'http://localhost:8081',
  tokenAllowedDomains: [  /localhost:8081/ ],
  tokenDisallowedRoutes: [/\/oauth\/token/],
};
