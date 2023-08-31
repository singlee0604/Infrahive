import { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

export default function Document() {
  return (
    <Html>
      <Head>
        <meta name="theme-color" content="#2296f3" />
        <meta name="title" content="InfraHive - Empowering Innovation with AI Infrastructure!" />
        <meta
          name="description"
          content="At InfraHive, we're committed to empowering innovation through our state-of-the-art AI infrastructure. Our platform provides businesses and individuals with everything they need to build powerful AI apps with ease. From API integration to full-stack infrastructure, we've got you covered. Experience the future of AI with InfraHive and take your capabilities to the next level."
        />
        <meta name="keywords" content="infrahive ai-infrastructure ai infrastructure full-stack-infrastructure ai-innovation innovation" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://infrahive.io" />
        <meta property="og:site_name" content="infrahive.io" />
        <meta property="og:title" content="InfraHive - Empowering Innovation with AI Infrastructure!" />
        <meta
          property="og:description"
          content="At InfraHive, we're committed to empowering innovation through our state-of-the-art AI infrastructure. Our platform provides businesses and individuals with everything they need to build powerful AI apps with ease. From API integration to full-stack infrastructure, we've got you covered. Experience the future of AI with InfraHive and take your capabilities to the next level."
        />
        <meta name="google-site-verification" content="XMyZqetUUFSvUNHuNsRv5DpfXNnOy1I7QixDO4qS3UI" />
        {/* TODO: Social Media Images */}
        <meta property="og:image" content="" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://infrahive.io" />
        <meta property="twitter:title" content="InfraHive - Empowering Innovation with AI Infrastructure!" />
        <meta
          property="twitter:description"
          content="At InfraHive, we're committed to empowering innovation through our state-of-the-art AI infrastructure. Our platform provides businesses and individuals with everything they need to build powerful AI apps with ease. From API integration to full-stack infrastructure, we've got you covered. Experience the future of AI with InfraHive and take your capabilities to the next level."
        />
        <meta property="twitter:image" content="" />
        <meta name="twitter:creator" content="" />
        <link rel="preconnect" href="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@400;500;600;700&family=Roboto:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
