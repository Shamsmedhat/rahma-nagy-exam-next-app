import type { Pagination_Response } from "./pagination";

export interface Subject {
  _id: string;
  name: string;
  icon: string;
  createdAt: Date;
}

export interface GetSubjects_Response extends Pagination_Response {
  subjects: Subject[];
}
