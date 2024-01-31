import getSitama from "@/actions/get-sitama";
import ServiceCard from "@/components/services-card";

export default async function Home() {
  const data = await getSitama();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ServiceCard response={data} />
    </main>
  );
}
