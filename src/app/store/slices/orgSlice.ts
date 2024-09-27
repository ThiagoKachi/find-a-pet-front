import { IOrg } from '@/@types/Orgs/IOrgs';
import { StoreSlice } from '../store';

type OrgStore = {
  orgs: IOrg[];
  orgInfo: IOrg | null;
}

type OrgActions = {
  setOrgs: (pets: IOrg[]) => void;
  setOrgInfo: (pet: IOrg | null) => void;
}

export type OrgSlice = OrgStore & OrgActions;

export const createOrgSlice: StoreSlice<OrgSlice> = (set) => ({
  orgs: [],
  setOrgs: (orgs) => set(() => ({ orgs })),
  orgInfo: null,
  setOrgInfo: (org) => set(() => ({ orgInfo: org })),
});
