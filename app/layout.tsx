import "./globals.css";
import { metrophobic } from "./metrophobic";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={` ${metrophobic.className} overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}

