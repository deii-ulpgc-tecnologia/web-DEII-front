export enum Degree {
  Informatica="ii", Datos="cid", FyM="ifm"
}

enum Year {
  First=1, Second=2, Third=3, Fourth=4
}

export enum Semester {
  First=1, Second=2
}

export interface Subject {
  id?: number;
  name: string;
  degree: Degree;
  year: number;
  semester: Semester;
  area: string;
}
