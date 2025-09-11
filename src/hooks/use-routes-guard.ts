import queryKeys from "@/lib/query-keys";
import useQuerySubscribe from "./use-query-subscribe";
import type { Profile } from "@/types/api";
import { redirect, usePathname } from "@/i18n/navigation";
import { useEffect } from "react";
import { unauthenticatedRoutes } from "@/lib/constants";
import { useLocale } from "next-intl";

export default function useRoutesGuard(isAuthenticating: boolean) {
  const profile = useQuerySubscribe<Profile>([queryKeys.profile]);
  const pathname = usePathname();
  const locale = useLocale();

  useEffect(() => {
    if (!isAuthenticating) {
      if (unauthenticatedRoutes.includes(pathname) && profile) redirect({ href: "/", locale });
      if (!unauthenticatedRoutes.includes(pathname) && !profile) redirect({ href: "/signin", locale });
    }
  }, [pathname, profile, isAuthenticating]);
}
