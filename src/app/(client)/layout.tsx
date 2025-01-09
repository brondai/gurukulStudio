import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    return (
      <>
          <NavBar />

          {children}

          <Footer />
      </>
    )
}