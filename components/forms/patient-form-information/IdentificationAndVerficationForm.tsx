"use client";

import CustomFormField, { FormFieldType } from "@/components/CustomFormField";
import FileUploader from "@/components/FileUploader";
import { FormControl } from "@/components/ui/form";
import { SelectItem } from "@/components/ui/select";
import { IdentificationTypes } from "@/constants";
import { PatientFormValidation } from "@/lib/validation";
import { UseFormReturn } from "react-hook-form";
import { z } from "zod";

type UserFormProps = {
  form: UseFormReturn<z.infer<typeof PatientFormValidation>>;
};

const IdentificationAndVerficationForm = ({ form }: UserFormProps) => {
  return (
    <section className="space-y-6">
      <div className="mb-9 space-y-1">
        <h2 className="sub-header">Identification and Verfication</h2>
      </div>

      <CustomFormField
        fieldType={FormFieldType.SELECT}
        control={form.control}
        name="identificationType"
        label="Identification Type"
        placeholder="Select identification type"
      >
        {IdentificationTypes.map((type, i) => (
          <SelectItem key={type + i} value={type}>
            {type}
          </SelectItem>
        ))}
      </CustomFormField>

      <CustomFormField
        fieldType={FormFieldType.INPUT}
        control={form.control}
        name="identificationNumber"
        label="Identification Number"
        placeholder="123456789"
      />

      <CustomFormField
        fieldType={FormFieldType.SKELETON}
        control={form.control}
        name="identificationDocument"
        label="Scanned Copy of Identification Document"
        renderSkeleton={(field) => (
          <FormControl>
            <FileUploader files={field.value} onChange={field.onChange} />
          </FormControl>
        )}
      />
    </section>
  );
};

export default IdentificationAndVerficationForm;
