import { ServicesJSON } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form, FormField } from "../ui/form";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Checkbox } from "../ui/checkbox";
import { FileVideo2, ImagePlus } from "lucide-react";

// const StepSchema = z.object({
//   id: z.number(),
//   description: z.string(),
//   type: z.string(),
//   mandatory: z.boolean(),
//   isMultiple: z.boolean(),
//   value: z.string(),
// });

// const ServiceSchema = z.object({
//   serviceName: z.string(),
//   steps: z.array(StepSchema),
// });

// const FormSchema = z.object({
//   services: z.array(ServiceSchema),
// });

// type ServivesFormValues = z.infer<typeof FormSchema>;

interface ServicesFormProps {
  services: ServicesJSON[];
}

const ServicesForm: React.FC<ServicesFormProps> = ({ services }) => {
  //   const formData = services.map((service) => ({
  //     serviceName: service.service_id.service_name,
  //     steps: service.json.map((step) => ({
  //       id: step.id,
  //       description: step.description,
  //       type: step.type,
  //       mandatory: !!step.mandatory,
  //       isMultiple: !!step.is_multiple,
  //       value: "",
  //     })),
  //   }));

  //   const form = useForm<ServivesFormValues>({
  //     resolver: zodResolver(FormSchema),
  //   });
  return (
    <div className="flex flex-col gap-3">
      {services.map((service) =>
        service.json.map((step) => (
          <div key={step.id}>
            {step.group === "parent" && (
              <h2 className="text-xl font-bold">{step.description}</h2>
            )}
            {step.group === "child" &&
              (step.type === "photo" ? (
                <>
                  <Label htmlFor={`step-${step.id}`}>
                    {step.description}{" "}
                    {step.mandatory === 1 && (
                      <span className="text-red-500">*</span>
                    )}
                  </Label>
                  <div className="flex items-center justify-center w-full">
                    <label className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                      <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <ImagePlus size={32} className="text-gray-400" />
                        <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                          <span className="font-semibold">Click to upload</span>{" "}
                          or drag and drop
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          SVG, PNG, JPG or GIF (MAX. 800x400px)
                        </p>
                      </div>
                      <input
                        id="dropzone-file"
                        type="file"
                        className="hidden"
                      />
                    </label>
                  </div>
                </>
              ) : step.type === "checkbox" ? (
                <div className="flex items-center space-x-2">
                  <Checkbox id={`step-${step.id}`} />
                  <Label htmlFor={`step-${step.id}`}>
                    {step.description}{" "}
                    {step.mandatory === 1 && (
                      <span className="text-red-500">*</span>
                    )}
                  </Label>
                </div>
              ) : step.type === "text" ? (
                <>
                  <Label htmlFor={`step-${step.id}`}>
                    {step.description}{" "}
                    {step.mandatory === 1 && (
                      <span className="text-red-500">*</span>
                    )}
                  </Label>
                  <Input type="text" id={`step-${step.id}`} />
                </>
              ) : step.type === "video" ? (
                <div className="flex items-center justify-center w-full">
                  <label className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      <FileVideo2 size={32} className="text-gray-400" />
                      <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                        <span className="font-semibold">Click to upload</span>{" "}
                        or drag and drop
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        MP4, WEBM, OGG (MAX. 200MB)
                      </p>
                    </div>
                    <input id="dropzone-file" type="file" className="hidden" />
                  </label>
                </div>
              ) : null)}
          </div>
        ))
      )}
    </div>
  );
};

export default ServicesForm;
