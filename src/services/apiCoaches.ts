import { CoachType, StatusFilterType, StatusSortType } from "../types/coaches";
import supabase from "./supabase";

export async function getCoaches(
  from: number,
  to: number,
  statusFilter: StatusFilterType = "all",
  statusSort: StatusSortType = "created_at-asc",
  searchTerm: string = ""
): Promise<{ data: CoachType[] | null; count: number | null }> {
  let query = supabase
    .from("coaches")
    .select("*", { count: "exact" })
    .range(from, to);

  if (statusFilter !== "all") {
    query = query.eq("coach_status", statusFilter);
  }

  if (statusSort === "created_at-asc") {
    query = query.order("id", { ascending: true });
  } else if (statusSort === "created_at-desc") {
    query = query.order("id", { ascending: false });
  } else if (statusSort === "name-asc") {
    query = query.order("full_name", { ascending: true });
  } else if (statusSort === "name-desc") {
    query = query.order("full_name", { ascending: false });
  } else {
    query = query.order("id", { ascending: true });
  }

  if (searchTerm) {
    query = query.ilike("full_name", `%${searchTerm}%`);
  }

  const { data, error, count } = await query;
  if (error) {
    throw error;
  }
  // console.log(data);
  return { data, count };
}

export async function createNewCoach(
  newCoach: Partial<CoachType>
): Promise<CoachType> {
  const { data, error } = await supabase
    .from("coaches")
    .insert([{ ...newCoach }])
    .select("*")
    .single();
  if (error) {
    console.error(error);
    throw new Error("Failed to add coach");
  }
  return data;
}
export async function editCoachApi(
  coachEdited: CoachType,
  id: number
): Promise<CoachType> {
  const { data, error } = await supabase
    .from("coaches")
    .update({ ...coachEdited })
    .eq("id", id)
    .select()
    .single();

  if (error) {
    console.error(error);
    throw new Error("Failed to edit coach");
  }
  return data;
}

export async function deleteCoachApi(id: number) {
  const { data, error } = await supabase.from("coaches").delete().eq("id", id);
  if (error) {
    console.error(error);
    throw new Error("Failed to edit coach");
  }
  return data;
}

export async function getcoachesStatus() {
  const { count: total } = await supabase
    .from("coaches")
    .select("*", { count: "exact", head: true });

  const { count: active } = await supabase
    .from("coaches")
    .select("*", { count: "exact", head: true })
    .eq("coach_status", true);

  const { count: unactive } = await supabase
    .from("coaches")
    .select("*", { count: "exact", head: true })
    .eq("coach_status", false);

  return { total, active, unactive };
}
