import { Loader2Icon } from "lucide-react";
import { useTranslations } from "next-intl";

interface Loading_Props {
  loadingPhrase?: "authenticating";
}

export default function Loading({ loadingPhrase }: Loading_Props) {
  const t = useTranslations("keyWords");

  return (
    <div className="absolute inset-0 bg-background/50 flex items-center justify-center capitalize">
      <Loader2Icon className="animate-spin me-2" />
      {t(loadingPhrase || "loading")}
    </div>
  );
}
