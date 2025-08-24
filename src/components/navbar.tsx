import { DATA } from "@/data/resumer";
import { Dock } from "./magicui/dock";
import { DockIcon } from "lucide-react";
import {buttonVariants} from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import Link from "next/link"

import { cn } from "@/lib/utils";
import { Separator } from "@radix-ui/react-separator";
import { ModeToggle } from "./mode-toggle";

export default function Navbar() {
    return (
        <div className="pointer-events-none fixed inset-x-0 bottom-0 z-30 mx-auto mb-4 flex origin-bottom h-full max-h-14">
            <div>
                <Dock className="">
                    {DATA.navbar.map((item) =>(
                        <DockIcon key={item.href}>
                            <Tooltip>
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <Link href={item.href} className={cn(
                                            buttonVariants({variant: "ghost", size: "icon"}),
                                            "size-12"
                                        )}>
                                           <item.icon className="size-4" />
                                        </Link>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <p>{item.label}</p>
                                    </TooltipContent>
                                </Tooltip>
                            </Tooltip>
                        </DockIcon>
                    ))}
                    <Separator orientation="vertical" className="h-full" />
                    {Object.entries(DATA.contact.social)
                        .filter(([_N_E_STYLE_LOAD, social]) => social.navbar)
                        .map(([name, social]) => (
                            <DockIcon key={name}>
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <Link 
                                            href={social.url}
                                            className={cn(buttonVariants({variant: "ghost", size: "icon"}), "size-12")}
                                        >
                                            <social.icon className="size-4" />
                                        </Link>
                                    </TooltipTrigger>
                                </Tooltip>
                            </DockIcon>
                        ))}
                         <Separator orientation="vertical" className="h-full py-2" />
                         <DockIcon>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <ModeToggle />
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>Theme</p>
                                </TooltipContent>
                            </Tooltip>
                         </DockIcon>
                </Dock>
            </div>
        </div>
    )
}