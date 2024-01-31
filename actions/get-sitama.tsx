import { ServicesResponseData } from "@/types";

const apiURL =
  "https://wiremock.solusione.id/wiremock/test/services/MBFIN202111080000016";

const getSitama = async (): Promise<ServicesResponseData> => {
  const response = await fetch(apiURL);
  return response.json();
};

export default getSitama;
