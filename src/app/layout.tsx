// app/layout.tsx
import "./globals.css";

export const metadata = {
  title: "Amitoj Singh — Portfolio",
  description: "Simple portfolio built with Next.js + Tailwind",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-neutral-950 text-neutral-100 antialiased">{children}</body>
    </html>
  );
}
