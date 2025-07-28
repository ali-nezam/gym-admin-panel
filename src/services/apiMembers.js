import supabase from "./supabase";

export async function getMembers(from, to) {
  const { data, error, count } = await supabase
    .from("members")
    // .select("*")
    .select(`*,coachData:coach_id ( full_name ,expertise)`, { count: "exact" })
    .order("id", { ascending: true })
    .range(from, to);

  if (error) {
    throw error;
  }
  return { data, count };
}

export async function deleteMemberApi(id) {
  const { data, error } = await supabase.from("members").delete().eq("id", id);
  if (error) {
    console.error(error);
    throw new Error("Failed to edit member");
  }
  return data;
}
