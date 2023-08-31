import '../styles/globals.css';

// FontAwesome CSS imports
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
// You change this configuration value to false so that the Font Awesome core SVG library will not try and insert <style> elements into the <head> of the page. Next.js blocks this from happening anyway so you might as well not even try.
config.autoAddCss = false;

// google tag manager
import { useEffect, ReactNode } from 'react';
import TagManager from 'react-gtm-module';

import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Provider } from 'react-redux';
import { store } from '../store';
import ThemeCustomization from '../themes';
import NavigationScroll from '../layout/NavigationScroll';
import RTLLayout from 'ui-component/RTLLayout';
import { PersistGate } from 'redux-persist/integration/react';
import { persister } from '../store';
import Locales from 'ui-component/Locales';
import { ConfigProvider } from '../contexts/ConfigContext';
import '../scss/style.scss';
// import '@fullcalendar/common/main.css';
// import '@fullcalendar/daygrid/main.css';
// import '@fullcalendar/timegrid/main.css';
import { FirebaseProvider as AuthProvider } from '../contexts/FirebaseContext';
// import { Auth0Provider as AuthProvider } from '../contexts/Auth0Context';
// import { JWTProvider as AuthProvider } from 'contexts/JWTContext';
// import { AWSCognitoProvider as AuthProvider } from 'contexts/AWSCognitoContext';
import Snackbar from 'ui-component/extended/Snackbar';
import MainLayout from 'layout/MainLayout';
import DashboardLayout from 'layout/MainLayout/forDashboard';
import GuestGuard from 'layout/GuestGuard';
import MinimalLayout from 'layout/MinimalLayout';
import InfraLayout from 'layout/InfraLayout';
import { LayoutType } from 'types';
import { SessionProvider } from 'next-auth/react';
import Script from 'next/script';
import { UserProvider } from '@auth0/nextjs-auth0/client';

interface NoopProps {
  children: ReactNode;
}
const Noop: React.FC<NoopProps> = ({ children }) => {
  return <> {children} </>;
};

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps & { Component: { Layout: LayoutType } }) {
  let Layout;
  switch (Component.Layout) {
    case 'authGuard':
      Layout = MainLayout;
      break;
    case 'guestGuard':
      Layout = GuestGuard;
      break;
    case 'minimalLayout':
      Layout = MinimalLayout;
      break;
    case 'infraLayout':
      Layout = InfraLayout;
      break;
    case 'dashboardLayout':
      Layout = DashboardLayout;
      break;
    default:
      Layout = Noop;
  }

  useEffect(() => {
    TagManager.initialize({ gtmId: 'G-RR7ES8TW6Q' });
  }, []);

  return (
    <>
      <Head>
        <title>InfraHive - Empowering Innovation with AI Infrastructure!</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="google-site-verification" content="UZCBen_9acSNbhCD18KTr1GcKS70gGTy5JyzKa8LqVs" />
        <style>@import url('https://fonts.googleapis.com/css2?family=Sansita:wght@400;700;800;900&display=swap');</style>
      </Head>
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-RR7ES8TW6Q" />
      <Script id="google-analytics">
        {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-RR7ES8TW6Q');`}
      </Script>

      <Provider store={store}>
        <PersistGate loading={null} persistor={persister}>
          <SessionProvider session={session}>
            <ConfigProvider>
              <ThemeCustomization>
                <RTLLayout>
                  <Locales>
                    <UserProvider>
                      <AuthProvider>
                        <Layout>
                          <Component {...pageProps} />
                          <Snackbar />
                        </Layout>
                      </AuthProvider>
                    </UserProvider>
                  </Locales>
                </RTLLayout>
              </ThemeCustomization>
            </ConfigProvider>
          </SessionProvider>
        </PersistGate>
      </Provider>
    </>
  );
}

export default MyApp;
