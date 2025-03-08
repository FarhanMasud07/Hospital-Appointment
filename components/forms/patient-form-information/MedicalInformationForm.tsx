"use client";

import CustomFormField, { FormFieldType } from "@/components/CustomFormField";
import { SelectItem } from "@/components/ui/select";
import { Doctors } from "@/constants";
import Image from "next/image";
import { PatientFormValidation } from "@/lib/validation";
import { UseFormReturn } from "react-hook-form";
import { z } from "zod";

type UserFormProps = {
  form: UseFormReturn<z.infer<typeof PatientFormValidation>>;
};

const MedicalInformationForm = ({ form }: UserFormProps) => {
  return (
    <section className="space-y-6">
      <div className="mb-9 space-y-1">
        <h2 className="sub-header">Medical Information</h2>
      </div>

      {/* PRIMARY CARE PHYSICIAN */}
      <CustomFormField
        fieldType={FormFieldType.SELECT}
        control={form.control}
        name="primaryPhysician"
        label="Primary care physician"
        placeholder="Select a physician"
      >
        {Doctors.map((doctor, i) => (
          <SelectItem key={doctor.name + i} value={doctor.name}>
            <div className="flex cursor-pointer items-center gap-2">
              <Image
                src={doctor.image}
                width={32}
                height={32}
                alt="doctor"
                className="rounded-full border border-dark-500"
              />
              <p>{doctor.name}</p>
            </div>
          </SelectItem>
        ))}
      </CustomFormField>

      {/* INSURANCE & POLICY NUMBER */}
      <div className="flex flex-col gap-6 xl:flex-row">
        <CustomFormField
          fieldType={FormFieldType.INPUT}
          control={form.control}
          name="insuranceProvider"
          label="Insurance provider"
          placeholder="BlueCross BlueShield"
        />

        <CustomFormField
          fieldType={FormFieldType.INPUT}
          control={form.control}
          name="insurancePolicyNumber"
          label="Insurance policy number"
          placeholder="ABC123456789"
        />
      </div>

      {/* ALLERGY & CURRENT MEDICATIONS */}
      <div className="flex flex-col gap-6 xl:flex-row">
        <CustomFormField
          fieldType={FormFieldType.TEXTAREA}
          control={form.control}
          name="allergies"
          label="Allergies (if any)"
          placeholder="Peanuts, Penicillin, Pollen"
        />

        <CustomFormField
          fieldType={FormFieldType.TEXTAREA}
          control={form.control}
          name="currentMedication"
          label="Current medications"
          placeholder="Ibuprofen 200mg, Levothyroxine 50mcg"
        />
      </div>

      {/* FAMILY MEDICATION & PAST MEDICATIONS */}
      <div className="flex flex-col gap-6 xl:flex-row">
        <CustomFormField
          fieldType={FormFieldType.TEXTAREA}
          control={form.control}
          name="familyMedicalHistory"
          label=" Family medical history (if relevant)"
          placeholder="Mother had brain cancer, Father has hypertension"
        />

        <CustomFormField
          fieldType={FormFieldType.TEXTAREA}
          control={form.control}
          name="pastMedicalHistory"
          label="Past medical history"
          placeholder="Appendectomy in 2015, Asthma diagnosis in childhood"
        />
      </div>
    </section>
  );
};

export default MedicalInformationForm;
