export interface CoachType {
  id: number;
  created_at: string;
  full_name: string;
  phone: string | null;
  gender: string | null;
  expertise: string | null;
  available_days: string | null;
  start_hour: string | null;
  end_hour: string | null;
  price_Subscription: number | null;
  profile_img: string | null;
  coach_status: boolean | null;
  Membership_date: string | null;
  // [key: string]: any;
}

export type StatusFilterType = "all" | boolean;

export type StatusSortType =
  | "created_at-asc"
  | "created_at-desc"
  | "name-asc"
  | "name-desc";
