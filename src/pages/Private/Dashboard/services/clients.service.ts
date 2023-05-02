import { privateAxios } from "../../../../api";
import { ApiClient } from "../models/client.model";

interface Clients {
  data: ApiClient[]
}

export const getClientsRequest = async (): Promise<Clients> =>
  await privateAxios.get('/api/clients');

export const getClientRequest = async (id: string): Promise<ApiClient> =>
  await privateAxios.get(`/api/clients/${id}`);