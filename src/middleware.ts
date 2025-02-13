import createMiddleware from "next-intl/middleware";
import { locales } from "./i18n";

export default createMiddleware({
  // A list of all locales that are supported
  locales: ["en", "pt"],

  // Used when no locale matches
  defaultLocale: "en",

  // Enable static rendering
  localePrefix: "always",

  // Domains can be used to host different languages on different domains
  // domains: [
  //   {
  //     domain: 'example.com',
  //     defaultLocale: 'en'
  //   },
  //   {
  //     domain: 'example.pt',
  //     defaultLocale: 'pt'
  //   }
  // ]
});

export const config = {
  // Match all pathnames except for
  // - /api routes
  // - /_next (Next.js internals)
  // - /static (inside /public)
  // - /_vercel (Vercel internals)
  // - all files inside /public (e.g. /favicon.ico)
  matcher: ["/((?!api|_next|_vercel|static|.*\\..*|$).*)"],
};
