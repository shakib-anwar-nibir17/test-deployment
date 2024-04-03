import { Toaster } from "@/components/ui/sonner";
import { ConvexClientProvider } from "@/providers/convex-client-provider";
import { ModalProvider } from "@/providers/modal-provider";
import React from "react";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const BoardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <ConvexClientProvider>
      <main className="h-full">
        <ModalProvider />
        {children}
        <Toaster />
      </main>
    </ConvexClientProvider>
  );
};

export default BoardLayout;
