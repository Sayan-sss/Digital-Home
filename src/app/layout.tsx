// src/app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
// import Line from "@/components/Line";

export const metadata: Metadata = {
  title: "Sayan Mondal | Portfolio",
  description:
    "Personal portfolio showcasing my projects, skills, and experience.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-950 text-gray-100">
        <div className="relative flex">
          {/* Full height line on the left */}
          {/* <Line /> */}

          {/* Main content */}
          <div className="flex-1 min-h-screen">{children}</div>
        </div>
      </body>
    </html>
  );
}
