// import { useContext } from "react";
// const { first, end } = useContext(StyledTablePagination);
import supabase from "./supabase";

export async function getCoaches(
  from,
  to,
  statusFilter = "all",
  statusSort = "created_at-asc",
  searchTerm = ""
) {
  // const { data, error, count } = await supabase
  let query = supabase
    .from("coaches")
    .select("*", { count: "exact" })
    // .order("id", { ascending: true })
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
  console.log();
  return { data, count };
}

export async function createNewCoach(newCoach) {
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
export async function editCoachApi(coachEdited, id) {
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

export async function deleteCoachApi(id) {
  const { data, error } = await supabase.from("coaches").delete().eq("id", id);
  if (error) {
    console.error(error);
    throw new Error("Failed to edit coach");
  }
  return data;
}

export async function getRowCoach(id) {
  const { data: coach, error } = await supabase
    .from("coaches")
    .select("*")
    .eq("id", id)
    .single();
  if (error) {
    console.error(error);
    throw new Error("Failed to add coach");
  }
  console.log(coach);
  return coach;
}
