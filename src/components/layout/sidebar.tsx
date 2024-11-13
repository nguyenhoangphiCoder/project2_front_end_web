import { AppSidebar } from "@/components/layout/app-sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { GalleryVerticalEnd } from "lucide-react";
import { ReactNode, useEffect, useState } from "react";

export const company = {
  name: "Acme Inc",
  logo: GalleryVerticalEnd,
  plan: "Enterprise",
};

export default function LayoutSidebar({
  children,
}: {
  readonly children: ReactNode;
}) {
  const [mounted, setMounted] = useState(false);
  // Only render after first client-side mount
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null; // or a loading skeleton
  }

  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="w-full">
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
  );
}
