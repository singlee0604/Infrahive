import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import GitHubProvider from 'next-auth/providers/github';
import Auth0Provider from 'next-auth/providers/auth0';

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    // GoogleProvider({
    //   clientId: '626299452134-um9sllkkj86ghrff18m39qk7lrhlmk83.apps.googleusercontent.com',
    //   clientSecret: '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'
    // }),
    // GoogleProvider({
    //   clientId: '673965269117-fkfhdgsm6pjmolu4qovjtau5lbjqp6fj.apps.googleusercontent.com',
    //   clientSecret: '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'
    // }),
    // GitHubProvider({
    //   clientId: 'a364b8e6113ce8cbe484',
    //   clientSecret: '5ff0ed0a8acebc3293a8b8efa0de8d84976712e8'
    // }),
    Auth0Provider({
      clientId: 'AHPzssJvYeFWkRhPaY7GyJPS4NyoYakl',
      clientSecret: 'zAj9hLNre_UYuFgqDxaxkSJEAMls8KsK9INPzM2qBDdJg2qFSY6VVV18ZFG5losq',
      issuer: 'https://dev-jyydu1rysjv1ojkw.us.auth0.com'
    })
  ],
  secret: 'secret'
};
export default NextAuth(authOptions);
