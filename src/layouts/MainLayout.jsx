import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
export default function MainLayout({ children }) {
  return (
    <>
      <div className="flex flex-col min-h-screen w-full bg-black">
        <Header />

        {/* Add padding to push down all pages uniformly */}
        <main className="flex-grow">
          {children}
        </main>

        <Footer />
      </div>
    </>
  );
}
