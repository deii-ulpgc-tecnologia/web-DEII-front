export enum Degree {
  Informatica="gii", Datos="gcid", FyM="fym"
}

export enum Semester {
  First, Second
}

export interface Subject {
  id?: number;
  name: string;
  degree: Degree;
  year: number;
  semester: Semester;
  area: string;
}
