import { NavItem } from "@/types/nav"

interface SiteConfig {
  name: string
  description: string
  mainNav: NavItem[]
  links: {
    designer: string
    github: string
    donate: string
  }
}

export const siteConfig: SiteConfig = {
  name: "Placard",
  description:
    "Design your digital contact card in seconds.",
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Designer",
      href: "https://designer.placard-app.vercel.app",
    },
  ],
  links: {
    designer: "https://designer.placard-app.vercel.app",
    github: "https://github.com/placardapp",
    donate: "https://cash.app/$itstotallyjan",
  },
}
