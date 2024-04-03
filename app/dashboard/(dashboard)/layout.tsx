import { Toaster } from "@/components/ui/sonner";
import { ConvexClientProvider } from "@/providers/convex-client-provider";
import { ModalProvider } from "@/providers/modal-provider";
import Sidebar from "./_components/Sidebar/Sidebar";
import Navbar from "./_components/navbar";
import OrganizationSidebar from "./_components/org-sidebar";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <ConvexClientProvider>
      <main className="h-full">
        <Sidebar />
        <div className="pl-[60px] h-full">
          <div className="flex gap-x-3 h-full">
            {/* organizations sidebar */}
            <OrganizationSidebar />
            <div className="h-full flex-1">
              {/* navbar */}
              <Navbar />
              <ModalProvider />
              {children}
              <Toaster />
            </div>
          </div>
        </div>
      </main>
    </ConvexClientProvider>
  );
};

export default DashboardLayout;
