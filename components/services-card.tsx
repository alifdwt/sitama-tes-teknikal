import { JSOND, JSONDWithChildren, ServicesResponseData } from "@/types";
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

function processAndFilterData(items: JSOND[], serviceId: number) {
  function groupChildrenByParent(items: JSOND[]) {
    let groupedItems: JSONDWithChildren[] = [];

    items.forEach((parentItem) => {
      if (parentItem.group === "parent") {
        let parentWithChildren = { ...parentItem, children: [] };
        items.forEach((childItem) => {
          if (
            childItem.group === "child" &&
            childItem.parent === parentItem.id.toString()
          ) {
            parentWithChildren.children.push(childItem);
          }
        });
        groupedItems.push(parentWithChildren);
      }
    });

    return groupedItems;
  }

  let groupedData = groupChildrenByParent(items);

  let filteredData: JSONDWithChildren[] = [];

  if (serviceId === 1) {
    filteredData = groupedData.filter((parent) => {
      return (
        parent.description.startsWith("Foto") ||
        parent.description.startsWith("Video")
      );
    });
  } else if (serviceId === 2) {
    filteredData = groupedData.filter((parent) => {
      return (
        parent.description.startsWith("TTD") ||
        parent.description.startsWith("Dokumen")
      );
    });
  } else if (serviceId === 3) {
    filteredData = groupedData.filter((parent) => {
      return parent.description.startsWith("BPKB");
    });
  }

  return filteredData;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ response }) => {
  const data = response.data;
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-center">
          Lengkapi data di bawah ini
        </CardTitle>
        <CardDescription className="text-center">
          Silakan isi prasyarat berikut ini. Jika sudah selesai, klik tombol{" "}
          <span className="font-bold">Submit</span>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-2">
          {data.services.map((service) => (
            <Dialog key={service.id}>
              <DialogTrigger asChild>
                <Button variant={"outline"}>
                  {service.service_name.startsWith("Foto") ? (
                    <p>📷 {service.service_name}</p>
                  ) : service.service_name.startsWith("Tanda Tangan") ? (
                    <p>✍🏻 {service.service_name}</p>
                  ) : service.service_name.startsWith("BPKB") ? (
                    <p>📄 {service.service_name}</p>
                  ) : (
                    <p>{service.service_name}</p>
                  )}
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>{service.service_name}</DialogTitle>
                  <DialogDescription className="text-red-500 text-center">
                    * Mandatory (harus dilengkapi)
                  </DialogDescription>
                </DialogHeader>
                <ScrollArea className="flex flex-col gap-2 h-[65vh]">
                  <ServicesForm
                    services={processAndFilterData(
                      data.services_json[0].json,
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
        </div>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
