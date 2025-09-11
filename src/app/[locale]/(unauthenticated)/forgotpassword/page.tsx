"use client";

import { ForgotPassword_From, VerifyOtp_Form } from "@/components/forms";
import { Link } from "@/i18n/navigation";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui";
import { useTranslations } from "next-intl";
import { useState } from "react";
import Step from "./_components/step";

export default function ForgotPassword_Page() {
  const t = useTranslations("forgotPasswordPage");
  const tAccount = useTranslations("signInPage");
  const [step, setStep] = useState<"forgot" | "otp" | "change">("forgot");

  return (
    <>
      <Tabs defaultValue="forgot" value={step}>
        <TabsList className="hidden">
          <TabsTrigger value="forgot" />
          <TabsTrigger value="otp" />
          <TabsTrigger value="change" />
        </TabsList>
        <TabsContent value="forgot">
          <Step heading={t("forgot.heading")} subheading={t("forgot.subheading")}>
            <ForgotPassword_From setStep={setStep} />
          </Step>
        </TabsContent>
        <TabsContent value="otp">
          <Step heading={t("otp.heading")} subheading={t("otp.subheading")} onBack={() => setStep("forgot")}>
            <VerifyOtp_Form setStep={setStep} />
          </Step>
        </TabsContent>
        <TabsContent value="change">
          <Step heading={t("change.heading")} subheading={t("change.subheading")} onBack={() => setStep("otp")}>
            CHANGE
          </Step>
        </TabsContent>
      </Tabs>
      <p className="text-center mt-10">
        {tAccount.rich("doNotHaveAccount", {
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
