import { Inter } from "next/font/google";
import "@/app/globals.css";
import Header from "@/components/Header";
import React from "react";
import { ThemeProvider } from "@/context/ThemeContext";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

const inter = Inter({ subsets: ["latin"] });

// Can be imported from a shared config
const locales = ["en", "pt"];

export async function generateMetadata() {
  return {
    title: "Vitor Dias - Portfolio",
    description: "Full Stack Developer Portfolio",
    icons: {
      icon: "/favicon.ico",
    },
  };
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale)) notFound();

  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        className={`${inter.className} bg-white dark:bg-[#1a1625] text-gray-900 dark:text-white transition-colors duration-300`}
        suppressHydrationWarning
      >
        <NextIntlClientProvider locale={locale} messages={messages}>
          <ThemeProvider>
            <Header />
            {children}
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
