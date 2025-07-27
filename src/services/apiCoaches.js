// import { useContext } from "react";
// const { first, end } = useContext(StyledTablePagination);
import supabase from "./supabase";

export async function getCoaches(from, to) {
  const { data, error, count } = await supabase
    .from("coaches")
    .select("*", { count: "exact" })
    .order("id", { ascending: true })
    .range(from, to);

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
