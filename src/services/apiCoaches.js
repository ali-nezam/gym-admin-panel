import supabase from "./supabase";

export async function getCoaches() {
  const { data, error } = await supabase
    .from("coaches")
    .select("*")
    .order("id", { ascending: true })
    .range(0, 5);

  if (error) {
    throw error;
  }
  return data;
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
