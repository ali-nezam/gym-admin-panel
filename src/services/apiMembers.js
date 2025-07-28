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
export async function getMembersStatusApi() {
  const { count: total } = await supabase
    .from("members")
    .select("*", { count: "exact", head: true });

  const { count: active } = await supabase
    .from("members")
    .select("*", { count: "exact", head: true })
    .eq("status", "active");

  const { count: expired } = await supabase
    .from("members")
    .select("*", { count: "exact", head: true })
    .eq("status", "expired");

  const { count: gold } = await supabase
    .from("members")
    .select("*", { count: "exact", head: true })
    .eq("status", "gold");
  return { total, active, expired, gold };
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
