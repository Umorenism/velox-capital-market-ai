// src/layouts/AuthLayout.tsx
import React from "react";

export default function AuthLayout({ children }) {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-950">
      <div className="w-full max-w-6xl p-6 bg-gray-950 ">
        {children}
      </div>
    </div>
  );
}
