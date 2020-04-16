export interface IPerson {
  id: string;
  firstName: string;
  lastName: string;
  hierarchy: string[];
  hierarchyFlat?: string;
  mail: string;
  fullName?: string;
}
