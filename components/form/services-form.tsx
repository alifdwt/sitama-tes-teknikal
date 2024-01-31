import { JSOND, JSONDWithChildren } from "@/types";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Checkbox } from "../ui/checkbox";
import { FileVideo2, ImagePlus } from "lucide-react";

interface ServicesFormProps {
  services: JSONDWithChildren[];
}

const ServicesForm: React.FC<ServicesFormProps> = ({ services }) => {
  return (
    <div className="flex flex-col gap-3">
      {services.map((step) => (
        <div key={step.id}>
          <h2 className="text-xl font-bold mb-3">{step.description}</h2>
          <div className="flex flex-col gap-3">
            {step.children.map((child) =>
              child.type === "photo" ? (
                <div key={child.id} className="mb-2">
                  <Label htmlFor={`step-${child.id}`}>
                    {child.description}{" "}
                    {child.mandatory === 1 && (
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
                </div>
              ) : child.type === "checkbox" ? (
                <div className="flex items-center space-x-2">
                  <Checkbox id={`step-${child.id}`} />
                  <Label htmlFor={`step-${child.id}`}>
                    {child.description}{" "}
                    {child.mandatory === 1 && (
                      <span className="text-red-500">*</span>
                    )}
                  </Label>
                </div>
              ) : child.type === "text" ? (
                <>
                  <Label htmlFor={`step-${child.id}`}>
                    {child.description}{" "}
                    {child.mandatory === 1 && (
                      <span className="text-red-500">*</span>
                    )}
                  </Label>
                  <Input type="text" id={`step-${child.id}`} />
                </>
              ) : child.type === "video" ? (
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
              ) : null
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServicesForm;
