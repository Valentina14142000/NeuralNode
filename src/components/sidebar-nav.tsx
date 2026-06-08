"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { 
  LayoutDashboard, 
  Briefcase, 
  ShieldCheck, 
  User, 
  Settings, 
  MessageSquare,
  Network
} from "lucide-react";

const navItems = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "Projects", href: "/jobs", icon: Briefcase },
  { name: "Verification", href: "/verify", icon: ShieldCheck },
  { name: "Messages", href: "/messages", icon: MessageSquare },
  { name: "Profile", href: "/profile", icon: User },
  { name: "Settings", href: "/settings", icon: Settings },
];

export function SidebarNav() {
  const pathname = usePathname();

  return (
    <div className="flex flex-col h-full bg-sidebar border-r border-sidebar-border w-64 fixed left-0 top-0 z-40">
      <div className="p-6">
        <Link href="/" className="flex items-center space-x-2">
          <Network className="h-8 w-8 text-primary" />
          <span className="font-headline font-bold text-xl tracking-tighter">NeuralNode</span>
        </Link>
      </div>
      <nav className="flex-1 px-4 space-y-1">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors group",
                isActive 
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20" 
                  : "text-muted-foreground hover:bg-sidebar-accent hover:text-foreground"
              )}
            >
              <Icon className={cn("h-5 w-5", isActive ? "text-primary-foreground" : "text-muted-foreground group-hover:text-primary")} />
              <span>{item.name}</span>
            </Link>
          );
        })}
      </nav>
      <div className="p-4 border-t border-sidebar-border">
        <div className="flex items-center space-x-3 p-2 rounded-lg bg-card border border-border/50">
          <div className="h-8 w-8 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center">
            <span className="text-xs font-bold">AL</span>
          </div>
          <div className="flex-1 overflow-hidden">
            <p className="text-xs font-semibold truncate">Alex L. Engineer</p>
            <p className="text-[10px] text-muted-foreground truncate">Verified Tier 1</p>
          </div>
        </div>
      </div>
    </div>
  );
}
