"use client";

import CustomFormField, { FormFieldType } from "@/components/CustomFormField";
import { FormControl } from "@/components/ui/form";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { GenderOptions } from "@/constants";
import { PatientFormValidation } from "@/lib/validation";
import { UseFormReturn } from "react-hook-form";
import { z } from "zod";

type UserFormProps = {
  form: UseFormReturn<z.infer<typeof PatientFormValidation>>;
};

const PersonalInformationForm = ({ form }: UserFormProps) => {
  return (
    <section className="space-y-6">
      <div className="mb-9 space-y-1">
        <h2 className="sub-header">Personal Information</h2>
      </div>
      <CustomFormField
        fieldType={FormFieldType.INPUT}
        control={form.control}
        name="name"
        label="Full name"
        placeholder="Farhan Masud"
        iconSrc="/assets/icons/user.svg"
        iconAlt="user"
      />

      {/* EMAIL & PHONE */}
      <div className="flex flex-col gap-6 xl:flex-row">
        <CustomFormField
          fieldType={FormFieldType.INPUT}
          control={form.control}
          name="email"
          label="Email address"
          placeholder="farhan@gmail.com"
          iconSrc="/assets/icons/email.svg"
          iconAlt="email"
        />

        <CustomFormField
          fieldType={FormFieldType.PHONE_INPUT}
          control={form.control}
          name="phone"
          label="Phone Number"
          placeholder="(880) 162-7756775"
        />
      </div>

      {/* BirthDate &  Gender */}
      <div className="flex flex-col gap-6 xl:flex-row">
        <CustomFormField
          fieldType={FormFieldType.DATE_PICKER}
          control={form.control}
          name="birthdate"
          label="Date of birth"
        />
        <CustomFormField
          fieldType={FormFieldType.SKELETON}
          control={form.control}
          name="gender"
          label="Gender"
          renderSkeleton={(field) => (
            <FormControl>
              <RadioGroup
                className="flex h-11 gap-6 xl:justify-between"
                onChange={field.onChange}
                defaultValue={field.value}
              >
                {GenderOptions.map((option, i) => (
                  <div key={option + i} className="radio-group">
                    <RadioGroupItem value={option} id={option} />
                    <Label htmlFor={option} className="cursor-pointer">
                      {option}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </FormControl>
          )}
        />
      </div>

      {/* Address & Occupation */}
      <div className="flex flex-col gap-6 xl:flex-row">
        <CustomFormField
          fieldType={FormFieldType.INPUT}
          control={form.control}
          name="address"
          label="Address"
          placeholder="16/18 block b dhaka"
        />

        <CustomFormField
          fieldType={FormFieldType.INPUT}
          control={form.control}
          name="occupation"
          label="Occupation"
          placeholder="Senior Software Engineer"
        />
      </div>

      {/* Emergency Contact Name & Emergency Contact Number */}
      <div className="flex flex-col gap-6 xl:flex-row">
        <CustomFormField
          fieldType={FormFieldType.INPUT}
          control={form.control}
          name="emergencyContactName"
          label="Emergency contact name"
          placeholder="Guardian's name"
        />

        <CustomFormField
          fieldType={FormFieldType.PHONE_INPUT}
          control={form.control}
          name="emergencyContactNumber"
          label="Emergency contact number"
          placeholder="(880) 162-7756775"
        />
      </div>
    </section>
  );
};

export default PersonalInformationForm;
