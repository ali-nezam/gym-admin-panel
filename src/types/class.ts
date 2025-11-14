export default interface ClassesType {
  id: number;
  created_at: string;
  class_name: string;
  price: number;
  capacity: number;
  coach_name: string;
}

export interface MemberOfClassType {
  class_id: number;
  created_at: string;
  id: number;
  name_member: string | null;
  note: string | null;
  number: string | null;
}
