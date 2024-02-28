import { Inter } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css"; // Import bootstrap CSS
import "../../styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "OPSM Network - The Future of Football",
  description: "Revolutionizing the way footballers are discovered and developed.",
  icons: {
   icon: "/assets/logos/favicon.png",
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      

      <body className={inter.className}>{children}</body>
    </html>
  );
}
