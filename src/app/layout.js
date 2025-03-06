import { Toaster } from "react-hot-toast";
import "./globals.css";

export const metadata = {
  title: "Law Associates",
  description: "Expert legal services for your needs",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        {children}
        <Toaster position="bottom-right" reverseOrder={false} />
      </body>
    </html>
  );
}
