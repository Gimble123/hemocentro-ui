export const environment = {
  production: true,
  apiUrl: 'http://apihemocentrova-env.eba-dgrptqxz.us-east-1.elasticbeanstalk.com',
  tokenAllowedDomains: [/apihemocentrova-env.eba-dgrptqxz.us-east-1.elasticbeanstalk.com/],
  tokenDisallowedRoutes: [/\/oauth\/token/],
  oauthCallbackUrl: 'http://apihemocentrova-env.eba-dgrptqxz.us-east-1.elasticbeanstalk.com/authorized',
  logoutRedirectToUrl: 'http://apihemocentrova-env.eba-dgrptqxz.us-east-1.elasticbeanstalk.com'
};
