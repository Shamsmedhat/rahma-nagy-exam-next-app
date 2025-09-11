import { SignIn_Form } from "@/components/forms";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import type { Params } from "@/types";

interface SignIn_Page_Props {
  params: Params;
}

export default async function SignIn_Page({ params }: SignIn_Page_Props) {
  const { locale } = await params;

  setRequestLocale(locale);

  const t = await getTranslations("signInPage");

  return (
    <>
      <h2 className="text-3xl font-semibold mb-10">{t("heading")}</h2>
      <SignIn_Form />
      <p className="text-center mt-10">
        {t.rich("doNotHaveAccount", {
          signup: (chunks) => (
            <Link href="signup" className="text-primary">
              {chunks}
            </Link>
          ),
        })}
      </p>
    </>
  );
}
