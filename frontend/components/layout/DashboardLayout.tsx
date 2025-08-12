"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/redux/store";
import { logout } from "@/redux/authSlice";
import { 
  Sidebar, 
  SidebarContent, 
  SidebarFooter, 
  SidebarHeader, 
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarProvider, 
  SidebarTrigger
} from "@/components/ui/sidebar";
import { Home, Search, BookCopy, Send, MessageSquare, LogOut, ShoppingCart } from "lucide-react";
import Button from "@/components/common/Button"; 
import CartPopover from "@/components/dashboard/CartPopover";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const { user } = useSelector((state: RootState) => state.auth);
  const router = useRouter();
  const dispatch = useDispatch(); 

  const handleLogout = () => {
    dispatch(logout());
    router.push('/'); 
  };

  const cartItems = useSelector((state: RootState) => state.cart.items);
  const totalItems = Array.isArray(cartItems) ? cartItems.reduce((total, item) => total + (item.quantity || 0), 0) : 0;
  const [isCartVisible, setIsCartVisible] = React.useState(false);

  const navItems = [
    { name: "Home", href: "/", icon: Home },
    { name: "Browse", href: "/dashboard/browse", icon: Search },
    { name: "My Submissions", href: "/dashboard/submissions", icon: BookCopy },
    { name: "My Rentals", href: "/dashboard/rentals", icon: Send },
    { name: "Messages", href: "/dashboard/messages", icon: MessageSquare },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
    <SidebarProvider>
      
        
        {/* Sidebar */}
        <Sidebar collapsible="offcanvas">
          <SidebarHeader className="p-4 border-b">
            <div className="flex items-center gap-3">
              <Image
                src={user?.avatarUrl || "/assets/avatars/default.webp"}
                alt={user?.name || "User Avatar"}
                width={60}
                height={60}
                className="rounded-full"
              />
              <span className="font-semibold">{user?.name}</span>
            </div>
          </SidebarHeader>

          <SidebarContent className="p-4">
            <SidebarGroup>
              <SidebarGroupLabel>Main Menu</SidebarGroupLabel>
              <SidebarGroupContent>
                {navItems.map((item) => {
                  const Icon = item.icon;
                  const active = router.pathname === item.href;
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`flex items-center gap-3 px-3 py-2 rounded-md transition-colors ${
                        active
                          ? "bg-[#f3eaff] text-[#6b35e8] font-semibold"
                          : "text-gray-600 hover:bg-gray-100 hover:text-[#6b35e8]"
                      }`}
                    >
                      <Icon size={20} />
                      <span>{item.name}</span>
                    </Link>
                  );
                })}
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>


          <SidebarFooter className="p-4 border-t">
          <Button
              label="Log Out"
              variant="primary"
              icon={<LogOut size={16} />}
              onClick={handleLogout}
              className="w-full justify-center"
            />
            <p className="text-sm text-gray-500 text-center">© {new Date().getFullYear()} The Circuit</p>
          </SidebarFooter>
        </Sidebar>

        

        {/* Main content */}
        <main className="w-full flex-1 p-4 md:p-8">
          <div className="flex items-center justify-between mb-6">
            <SidebarTrigger className="mb-4" />
            <div 
              className="relative flex items-center ml-auto"
              onMouseEnter={() => setIsCartVisible(true)}
              onMouseLeave={() => setIsCartVisible(false)}
            >
              <Link href="/dashboard/cart" className="relative p-2">
                <ShoppingCart className="text-gray-700 hover:text-blue-600" />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-blue-600 text-xs font-bold text-white">
                    {totalItems}
                  </span>
                )}
              </Link>
              {isCartVisible && <CartPopover items={cartItems} />}
            </div>
          </div>
          
          {children}
        </main>
      
      </SidebarProvider>
    </div>
  );
}
