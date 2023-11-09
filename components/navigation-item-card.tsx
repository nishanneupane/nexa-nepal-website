"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

const components: { title: string; href: string; description: string }[] = [
    {
        title: "Web Designing",
        href: "/services",
        description:
            "We can design you a seamless website for your company's or your personal portfolio",
    },
    {
        title: "Graphic Designing",
        href: "/services",
        description:
            "We can here for you to design your graphics as per your requirement",
    },
    {
        title: "Video Designing",
        href: "/services",
        description:
            "We can also design a good video as per your instructions.",
    },
    {
        title: "Social Media Marketing",
        href: "/services",
        description:
            "We can help you to grow your company or personal portfolio by advertising on our platform like instagram , facebook etc.",
    },
]

export function NavigationItemCard() {
    return (
        <NavigationMenu >
            <NavigationMenuList>

                <NavigationMenuItem>
                    <NavigationMenuTrigger>
                        <Link className='text-black hover:text-blue-700 text-lg font-semibold' href={"/services"} >Services</Link>
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid w-[200px] gap-3 p-4 md:w-[300px] md:grid-cols-1 lg:w-[400px] ">
                            {components.map((component) => (
                                <ListItem
                                    key={component.title}
                                    title={component.title}
                                    href={component.href}
                                >
                                    <p className="text-xs text-muted-foreground">{component.description}</p>
                                </ListItem>
                            ))}
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>

            </NavigationMenuList>
        </NavigationMenu>
    )
}

const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">{title}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    )
})
ListItem.displayName = "ListItem"
