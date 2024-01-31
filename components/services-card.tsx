import { ServicesJSON, ServicesResponseData } from "@/types";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { ScrollArea } from "./ui/scroll-area";
import ServicesForm from "./form/services-form";

interface ServiceCardProps {
  response: ServicesResponseData;
}

const filteredServicesJson = (
  servicesJson: ServicesJSON[],
  serviceId: number
) => {
  return servicesJson.filter((service) => service.service_id.id === serviceId);
};

const ServiceCard: React.FC<ServiceCardProps> = ({ response }) => {
  const data = response.data;
  return (
    <Card>
      <CardHeader>
        <CardTitle>Lengkapi data di bawah ini</CardTitle>
        <CardDescription>
          Silakan isi prasyarat berikut ini. Jika sudah selesai, klik tombol{" "}
          <span className="font-bold">Submit</span>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-2">
          {data.services.map((service) => (
            <Dialog key={service.id}>
              <DialogTrigger asChild>
                <Button
                  variant={"outline"}
                  className="flex gap-2 justify-start"
                >
                  <div className="w-4 h-4 bg-primary rounded-full" />
                  {service.service_name}
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>{service.service_name}</DialogHeader>
                <DialogDescription className="text-red-500 text-center">
                  * Mandatory (harus dilengkapi)
                </DialogDescription>
                <ScrollArea className="flex flex-col gap-2 h-[65vh]">
                  <ServicesForm
                    services={filteredServicesJson(
                      data.services_json,
                      service.id
                    )}
                  />
                </ScrollArea>
                <DialogFooter>
                  <Button variant={"outline"}>Draft</Button>
                  <Button>Simpan</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          ))}
          {/* {data.services_json.map((service) => (
            <div key={service.service_id.id}>
              {service.json.map((item) => (
                <div key={item.id}>
                  {item.group === "parent" && (
                    <Dialog key={item.id}>
                      <DialogTrigger asChild>
                        <Button
                          variant={"outline"}
                          className="flex gap-2 justify-start"
                        >
                          <div className="w-4 h-4 bg-primary rounded-full" />
                          {item.description}
                        </Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>{item.description}</DialogHeader>
                        <DialogDescription className="text-red-500 text-center">
                          * Mandatory (harus dilengkapi)
                        </DialogDescription>
                        <ScrollArea className="flex flex-col gap-2 h-[600px]">
                          <ServicesForm
                            services={filteredServicesJson(
                              data.services_json,
                              item.id
                            )}
                          />
                        </ScrollArea>
                      </DialogContent>
                    </Dialog>
                  )}
                </div>
              ))}
            </div>
          ))} */}
        </div>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
