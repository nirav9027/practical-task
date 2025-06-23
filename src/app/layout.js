import "./globals.scss";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

export const metadata = {
  title: "Practical Task",
  description: "created next app",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
