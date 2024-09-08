import "~/styles/globals.css";
import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import { TRPCReactProvider } from "~/trpc/react";
import ClientLayout from "./ClientLayout";
import { SessionProvider } from "next-auth/react";

export const metadata: Metadata = {
  title: "W4TCHNAON",
  description: "Bingung nonton apa ? klik sini bung/nona",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <SessionProvider>
      <html lang="en" className={`${GeistSans.variable}`}>
        <body className="flex flex-col bg-gray-900">
          <TRPCReactProvider>
            <ClientLayout>{children}</ClientLayout>
          </TRPCReactProvider>
        </body>
      </html>
    </SessionProvider>
  );
}
