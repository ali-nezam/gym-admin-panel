import supabase from "./supabase";

export async function getMembers(
  from,
  to,
  statusFilter,
  statusSort,
  searchTerm
) {
  // const { data, error, count } = await supabase
  let query = supabase
    .from("members")
    .select(`*,coachData:coach_id ( full_name ,expertise)`, { count: "exact" })
    // .order("id", { ascending: true })
    .range(from, to);

  if (statusFilter !== "all") {
    query = query.eq("status", statusFilter);
  }

  if (statusSort === "created_at-asc") {
    query = query.order("id", { ascending: true });
  } else if (statusSort === "end_date-asc") {
    query = query.order("end_date", { ascending: false });
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

export async function CreateNewMemberApi({ newMember }) {
  console.log(newMember);
  // console.log(...newMember);
  const { data, error } = await supabase
    .from("members")
    .insert([{ ...newMember }])
    .select("*")
    .single();

  if (error) {
    console.error(error.message);
    throw new Error("Failed to add member");
  }

  return { data };
}

export async function EditMemberApi(editedMember, id) {
  const { data, error } = await supabase
    .from("members")
    .select()
    .eq("id", id)
    .single()
    .update({ ...editedMember });
  if (error) {
    console.error(error.message);
    throw new Error("Failed to edit member");
  }
  return { data };
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
