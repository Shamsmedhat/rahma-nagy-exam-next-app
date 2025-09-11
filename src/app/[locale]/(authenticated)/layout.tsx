import { headers } from "next/headers";
import { setRequestLocale } from "next-intl/server";
import { dashboardRoutes } from "@/constants/navigation";
import { Sidebar } from "./_components";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
  Separator,
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui";
import { ColorTheme_Toggler, Locale_Toggler } from "@/components/misc";
import type { Params } from "@/types";
import type { ReactNode } from "react";

interface AuthenticatedLayout_Props {
  children: ReactNode;
  params: Params;
}

export default async function AuthenticatedLayout({ children, params }: Readonly<AuthenticatedLayout_Props>) {
  const { locale } = await params;
  // const referer = await headers().then((value) => value.get("referer"));
  // const pathname = referer ? new URL(referer).pathname : "/";

  // const page = pathname.split("/")[2] as keyof typeof dashboardRoutes;
  // const pageName = dashboardRoutes[page].name;
  // const PageIcon = dashboardRoutes[page].icon;

  setRequestLocale(locale);

  return (
    <SidebarProvider>
      <Sidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 px-4">
          <div className="flex-auto flex items-center gap-2">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 data-[orientation=vertical]:h-4" />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="#">Building Your Application</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>Data Fetching</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
          <div className="flex items-center gap-2">
            <Locale_Toggler />
            <ColorTheme_Toggler />
          </div>
        </header>
        <main className="relative flex-auto p-4 bg-secondary flex flex-col gap-4">
          {/* <h2 className="w-full flex gap-2 bg-primary text-background p-4 text-4xl">
            <PageIcon size={45} />
            <span>{pageName}</span>
          </h2> */}
          {children}
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}
