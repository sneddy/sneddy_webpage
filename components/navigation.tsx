"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { ModeToggle } from "@/components/mode-toggle"
import Image from "next/image"

export function Navigation() {
  const pathname = usePathname()

  const links = [
    { href: "/", label: "Home" },
    { href: "/experience", label: "Experience" },
    { href: "/talks", label: "Talks" },
    // { href: "/media", label: "Media" }, // Temporarily hidden
    { href: "/blog", label: "Blog" },
    // Hidden but preserved for future use
    // { href: "/contact", label: "Contact" },
  ]

  return (
    <div className="fixed top-0 w-full z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dsml_logo-iqk3NANdn7EIg34HpqcWwVMqbTiR0B.png"
            alt="DSML KZ Logo"
            width={120}
            height={40}
          />
        </Link>
        <nav className="hidden md:flex gap-6">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                pathname === href ? "text-primary" : "text-muted-foreground",
              )}
            >
              {label}
            </Link>
          ))}
        </nav>
        <ModeToggle />
      </div>
    </div>
  )
}
