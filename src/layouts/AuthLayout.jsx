// src/layouts/AuthLayout.tsx
import React from "react";

export default function AuthLayout({ children }) {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="w-full max-w-6xl p-6 bg-white ">
        {children}
      </div>
    </div>
  );
}
