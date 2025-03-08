"use client";

import CustomFormField, { FormFieldType } from "@/components/CustomFormField";
import { PatientFormValidation } from "@/lib/validation";
import { UseFormReturn } from "react-hook-form";
import { z } from "zod";

type UserFormProps = {
  form: UseFormReturn<z.infer<typeof PatientFormValidation>>;
};

const ConsentAndPrivacyForm = ({ form }: UserFormProps) => {
  return (
    <section className="space-y-6">
      <div className="mb-9 space-y-1">
        <h2 className="sub-header">Consent and Privacy</h2>
      </div>

      <CustomFormField
        fieldType={FormFieldType.CHECKBOX}
        control={form.control}
        name="treatmentConsent"
        label="I consent to receive treatment for my health condition."
      />

      <CustomFormField
        fieldType={FormFieldType.CHECKBOX}
        control={form.control}
        name="disclosureConsent"
        label="I consent to the use and disclosure of my health
            information for treatment purposes."
      />

      <CustomFormField
        fieldType={FormFieldType.CHECKBOX}
        control={form.control}
        name="privacyConsent"
        label="I acknowledge that I have reviewed and agree to the
            privacy policy"
      />
    </section>
  );
};

export default ConsentAndPrivacyForm;
