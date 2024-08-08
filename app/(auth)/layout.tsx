import type { Metadata } from "next";
import "./globals.css";
import { ClerkProvider, UserButton } from "@clerk/nextjs";

export const metadata: Metadata = {
  title: "Borcella Auth",
  description: "Auth Borcella",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <UserButton />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
