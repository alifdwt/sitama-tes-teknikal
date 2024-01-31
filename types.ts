export interface ServicesResponseData {
  code: number;
  status: string;
  data: {
    order_id: number;
    order_no: string;
    services: Services[];
    services_json: ServicesJSON[];
  };
  time_stamp: string;
}

export interface Services {
  id: number;
  service_name: string;
}

export interface ServicesJSON {
  service_id: {
    id: number;
    service_name: string;
  };
  json: JSOND[];
}

export interface JSOND {
  id: number;
  group: string;
  parent_description: any;
  description: string;
  mandatory: number;
  sequence: number;
  parent: string;
  type: string;
  is_multiple: number;
  remark: null;
  value: string;
}
