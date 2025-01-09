"use client";

import { ComponentProps, ReactNode } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function Nav({ children }: { children: ReactNode }) {
  return (
    <nav className="flex justify-center items-center bg-transparent text-slate-500 gap-2">
      {children}
    </nav>
  );
}

export function NavLink(props: Omit<ComponentProps<typeof Link>, "classname">) {
  const pathname = usePathname();
  return (
    <Link
      {...props}
      className={cn(
        "px-4 py-2 rounded-full",
        pathname === props.href ? "bg-green-800 text-slate-200 " : "hover:bg-green-200 transition duration-300 ease-in-out"
      )}
    />
  );
}
