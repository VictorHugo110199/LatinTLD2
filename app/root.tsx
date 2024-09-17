import type { LinksFunction } from '@remix-run/node';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/remix';
import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from '@remix-run/react';
import { Provider } from 'react-redux';
import { store } from './hooks/store';
import tail from './styles/tailwind.css';
import sass from '~/styles/index.css';
import { ToastContainer } from 'react-toastify';
import toast from 'react-toastify/dist/ReactToastify.css';

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: tail },
  { rel: 'stylesheet', href: sass },
  { rel: 'stylesheet', href: toast },
];

export default function App() {
  return (
    <html lang="pt-br">
      <head>
        <meta property="og:title" content="Landing Templates" />
        <meta property="og:url" content="templates.com.br" />
        <meta
          property="og:description"
          content="Template description"
        />
        {/* <meta property="og:image" content="/images/banner.jpg" /> */}
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="627" />
        <meta
          property="og:author"
          content="Dev: VictorHugo110199."
        />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta
          name="keywords"
          content="Keyword1,Keyword2,Keyword3,Keyword4"
        />
        <meta
          name="description"
          content="Template of description"
        />
        <meta name="author" content="Dev: VictorHugo110199" />
        <Meta />
        <Links />
      </head>
      <body className="flex h-[100dvh] w-full justify-center overflow-hidden bg-background">
        <Provider store={store}>
          <Outlet />
          <ScrollRestoration />
          <Scripts />
          <LiveReload />
          <Analytics />
          <SpeedInsights />
          <ToastContainer />
        </Provider>
      </body>
    </html>
  );
}
