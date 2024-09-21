import { IPet } from '../Pets/IPets';

export interface IOrg {
  id: string;
  email: string;
  name: string;
  address: string;
  city: string;
  state: string;
  zipcode: string;
  whatsapp_number: string;
  created_at: Date;
  updated_at: Date;
  pets: IPet[];
}
