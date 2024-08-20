import { File } from "./files.interface";

export interface Form {
  _id: string;
  forDriver_number: number;
  name: string;
  email: string;
  File: File;
}
