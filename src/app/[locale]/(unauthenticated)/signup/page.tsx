import { SignUp_Form } from "@/components/forms";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import type { Params } from "@/types";

interface SignUp_Page_Props {
  params: Params;
}

export default async function SignUp_Page({ params }: SignUp_Page_Props) {
  const { locale } = await params;

  setRequestLocale(locale);

  const t = await getTranslations("signUpPage");

  return (
    <>
      <h2 className="text-3xl font-semibold mb-10">{t("heading")}</h2>
      <SignUp_Form />
      <p className="text-center text-gray-500 mt-10">
        {t.rich("haveAccount", {
          signin: (chunks) => (
            <Link href="signin" className="text-primary">
              {chunks}
            </Link>
          ),
        })}
      </p>
    </>
  );
}
