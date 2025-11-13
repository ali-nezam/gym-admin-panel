interface CoachData {
  full_name: string;
  expertise: string;
}

export default interface MemberType {
  id: number;
  created_at: string;
  full_name: string;
  coach_id: number;
  gender: string | null;
  phone: string | null;
  profile_image_url: string | null;
  national_id: string | null;
  birth_date: string | null;
  start_date: string | null;
  end_date: string | null;
  status: "active" | "gold" | "expired";
  note: string | null;
  membership_type: "3-month" | "monthly";
  coachData: CoachData;
}

export type EditMemberApiData = Omit<MemberType, "coachData">;
export type AddMemberApiData = Partial<Omit<MemberType, "coachData">>;

export type StatusFilterType = "all" | "active" | "expired" | "gold";

export type StatusSortType =
  | "created_at_asc"
  | "end_date_asc"
  | "name_asc"
  | "name_desc";
