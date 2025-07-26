import supabase from "./supabase";

export async function getMembers() {
  const { data, error } = await supabase
    .from("members")
    // .select("*")
    .select(`*,coachData:coach_id ( full_name ,expertise)`)
    .order("id", { ascending: true })
    .range(0, 55);

  if (error) {
    throw error;
  }
  return data;
}
