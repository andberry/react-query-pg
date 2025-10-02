export interface ISmartphone {
  id: string;
  name: string;
  data: {
    year?: number;
    price?: number;
    color?: string;
    capacity?: string;
  } | null
  createdAt?: string;
}

export type ISmartphoneToCreate = Omit<ISmartphone, "id">