"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import Image from "next/image" // Import Image component

import { cn } from "@/lib/utils"
import { Button } from "../ui/button"
import { HeaderActions } from "./HeaderActions"
import { MobileHeader } from "./MobileHeader" // Assuming this is where MobileHeader is defined

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/founder", label: "Founder" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/partners", label: "Partners" },
  { href: "/events", label: "Events" },
  { href: "/chapters", label: "Chapters" },
  { href: "/sponsors", label: "Sponsors" },
  { href: "/faq", label: "FAQ" },
]

export function Header() {
  const pathname = usePathname()

  const NavLink = ({ href, label, className }: { href: string; label: string, className?: string }) => (
    <Link
      href={href}
      className={cn(
        "font-medium transition-colors hover:text-primary",
        pathname === href ? "text-primary" : "text-muted-foreground",
        className
      )}
    >
      {label}
    </Link>
  )

  const BrandLink = () => (
    <Link
      href="/"
      className="flex items-center space-x-2 font-bold text-lg font-headline hover:text-primary transition-colors whitespace-nowrap"
    >
      <Image
        src="/icon.png" // Path to your icon in the public directory
        alt="Tech TribeX Logo"
        width={32} // Adjust size as needed
        height={32} // Adjust size as needed
        className="rounded-full" // Optional: add styling to the icon
      />
      <span>Tech TribeX</span>
    </Link>
  )

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center justify-between">
        {/* Desktop Header */}
        <div className="hidden md:flex flex-1 items-center">
          <div className="mr-8">
            <BrandLink />
          </div>
          <nav className="flex items-center space-x-6 text-sm">
            {navLinks.map((link) => (
              <NavLink key={link.href} {...link} />
            ))}
          </nav>
        </div>

        {/* Mobile Header */}
        <div className="md:hidden contents"> {/* 'contents' instead of flex ensures BrandLink is passed correctly */}
          <MobileHeader navLinks={navLinks} BrandLink={BrandLink}> {/* Pass BrandLink as a prop */}
            <HeaderActions />
          </MobileHeader>
        </div>
        
        {/* Actions for Desktop */}
        <div className="hidden md:flex items-center justify-end gap-2">
           <Button asChild>
              <Link href="/contact">Contact Us</Link>
          </Button>
          <HeaderActions />
        </div>
      </div>
    </header>
  )
}