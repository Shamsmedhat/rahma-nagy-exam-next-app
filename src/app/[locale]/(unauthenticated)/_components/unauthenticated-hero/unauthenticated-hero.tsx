import { ColorTheme_Toggler, Locale_Toggler, Logo } from "@/components/misc";
import { GradiantBall } from "@/components/ui";
import { Features } from "./components";
import { cn } from "@/lib/utils";

interface UnauthenticatedHero_Props {
  dir: "ltr" | "rtl";
}

export default async function UnauthenticatedHero({ dir }: UnauthenticatedHero_Props) {
  return (
    <section className="max-md:hidden relative bg-secondary/75 overflow-hidden h-full flex gap-20 flex-col justify-center">
      <div className="flex items-center justify-between">
        <Logo />
        <div className="flex gap-2">
          <ColorTheme_Toggler />
          <Locale_Toggler />
        </div>
      </div>
      <Features />
      <GradiantBall className={cn("-z-1 absolute -top-15 [@media(height<1200px)]:hidden", dir == "ltr" ? "-right-50" : "-left-50")} />
      <GradiantBall className={cn("-z-1 absolute -bottom-60", dir == "ltr" ? "-left-60" : "-right-60")} />
    </section>
  );
}
