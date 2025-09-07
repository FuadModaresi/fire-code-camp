"use client";

import Link from "next/link";
import { Flame, Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
  SheetTitle
} from "@/components/ui/sheet";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

const navLinks = [
  { href: "#courses", label: "Courses" },
  { href: "#tutorials", label: "Tutorials" },
  { href: "#ide", label: "IDE" },
  { href: "#community", label: "Community" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Flame className="h-6 w-6 text-primary" />
            <span className="hidden font-bold sm:inline-block">
              Fire Code Camp
            </span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-primary"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
        
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="md:hidden">
             <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="pr-0 pt-10">
                <SheetTitle asChild>
                  <VisuallyHidden>
                    <h2>Mobile Menu</h2>
                  </VisuallyHidden>
                </SheetTitle>
                <Link href="/" className="flex items-center space-x-2 px-6">
                  <Flame className="h-6 w-6 text-primary" />
                  <span className="font-bold">Fire Code Camp</span>
                </Link>
                <div className="my-4 h-[calc(100vh-8rem)] pb-10 pl-6">
                  <div className="flex flex-col space-y-4">
                  {navLinks.map((link) => (
                    <SheetClose key={link.href} asChild>
                      <Link
                        href={link.href}
                        className="text-lg transition-colors hover:text-primary"
                      >
                        {link.label}
                      </Link>
                    </SheetClose>
                  ))}
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
          <Link href="#learning-path">
            <Button>Get Started</Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
