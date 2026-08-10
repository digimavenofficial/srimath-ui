import type { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

interface SiteShellProps {
  children: ReactNode;
  headerVariant?: "public" | "admin";
}

export default function SiteShell({
  children,
  headerVariant = "public",
}: SiteShellProps) {
  return (
    <main className="min-h-screen flex flex-col bg-white text-gray-900">
      <Header variant={headerVariant} />
      <div className="pt-32 flex-1">{children}</div>
      <Footer />
    </main>
  );
}
