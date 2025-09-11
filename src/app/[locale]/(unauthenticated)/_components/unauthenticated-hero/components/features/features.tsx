import { features } from "@/constants";
import { getTranslations } from "next-intl/server";

export default async function Features() {
  const t = await getTranslations("layout.unauthorizedHero");

  return (
    <div>
      <p className="text-3xl font-semibold mb-10">{t("subtitle")}</p>
      <ul className="text-primary space-y-5">
        {features.map(({ feature, icon: Icon }) => (
          <li key={feature} className="grid grid-cols-[auto_1fr] gap-3">
            <div aria-hidden className="border-2 border-primary p-1 h-fit aspect-square">
              <Icon />
            </div>
            <div>
              <h2 className="text-xl font-medium">{t(`features.${feature}.title`)}</h2>
              <p className="text-foreground mt-1">{t(`features.${feature}.description`)}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
