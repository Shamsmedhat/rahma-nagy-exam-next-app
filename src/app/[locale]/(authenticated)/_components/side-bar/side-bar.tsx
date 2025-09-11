"use client";

import Nav_Item from "./nav-item";
import Nav_User from "./nav-user";
import { Logo } from "@/components/misc";
import { Sidebar as SidebarUi, SidebarContent, SidebarFooter, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarGroup } from "@/components/ui/sidebar";
import { sideNavigation } from "@/constants/navigation";
import type { ComponentProps } from "react";

interface Sidebar_Props extends ComponentProps<typeof SidebarUi> {}

export default function Sidebar({ ...props }: Sidebar_Props) {
  return (
    <SidebarUi variant="sidebar" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <h1>
                <Logo />
              </h1>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup className="group-data-[collapsible=icon]:hidden">
          <SidebarMenu>
            {sideNavigation.map((item) => (
              <Nav_Item key={item.url} item={item} />
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <Nav_User />
      </SidebarFooter>
    </SidebarUi>
  );
}
