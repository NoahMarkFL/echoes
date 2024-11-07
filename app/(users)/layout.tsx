/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import { Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import * as React from "react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navItems = [
  { name: "Feed", href: "/feeds" },
  { name: "Resources", href: "/resources" },
  { name: "Creators", href: "/creators" },
  { name: "Playground", href: "/playground" },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = React.useState(false);
  const pathname = usePathname();

  return (
    <div className="min-h-screen flex flex-col">
      <nav className="bg-white shadow dark:bg-gray-800">
        <div className="container mx-auto px-6 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Link
                href="/"
                className="text-2xl font-bold text-gray-800 dark:text-white"
              >
                Logo
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="flex items-center space-x-4">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`${
                      pathname === item.href
                        ? "text-indigo-600 dark:text-indigo-400 font-semibold"
                        : "text-gray-700 hover:text-indigo-600 dark:text-gray-200 dark:hover:text-indigo-400"
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
            <div className="md:hidden">
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="md:hidden">
                    <Menu className="h-5 w-5" />
                    <span className="sr-only">Toggle menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[240px] sm:w-[300px]">
                  <nav className="flex flex-col space-y-4 mt-4">
                    {navItems.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className={`${
                          pathname === item.href
                            ? "text-indigo-600 dark:text-indigo-400 font-semibold"
                            : "text-gray-700 hover:text-indigo-600 dark:text-gray-200 dark:hover:text-indigo-400"
                        }`}
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </nav>
      <main className="flex-grow container mx-auto p-6">{children}</main>
    </div>
  );
}
