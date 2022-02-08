import type { MetaFunction } from "remix";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "remix";
import { tw } from "twind";
// import globalStyle from '~/styles/global.css'

// // for the links
// export const links = () => [
//   {
//     rel: 'stylesheet',
//     href: globalStyle
//   }
// ]

export const meta: MetaFunction = () => {
  return { description: "Reapit Foundations API and Elements Cheatsheet" };
};

export default function App() {
  return (
    <Document>
      <Layout>
        <Outlet />
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </Layout>
    </Document>
  );
}

function Document({
  children,
  title,
}: {
  children: React.ReactNode;
  title?: string;
}) {
  return (
    <html lang="en">
      <head>
        <title>{title || "Reapit Cheatsheet"}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className={tw`w-full h-full`}>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={tw`flex flex-col min-h-screen`}>
      <header
        className={tw`h-12 bg-blue-400 flex px-8 items-center justify-between`}
      >
        <h1 className={tw`text-xl`}>Reapit Cheatsheet</h1>
        <ul className={tw`flex gap-4`}>
          <li>
            <a href="/">API</a>
          </li>
          <li>
            <a href="/elements">Elements</a>
          </li>
        </ul>
      </header>
      <main className={tw`h-full flex-1 bg-gray-900 text-gray-50 p-8`}>
        {children}
      </main>
      <footer
        className={tw`h-10 bg-gray-800 text-gray-50 flex items-center justify-center text-xs`}
      >
        Made by Abraham A. Agung - {new Date().getFullYear()}
      </footer>
    </div>
  );
}
