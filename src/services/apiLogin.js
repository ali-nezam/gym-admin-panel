import supabase from "./supabase";
export async function CreateNewlogin({ newlogin }) {
  const { data, error } = await supabase
    .from("auth_logs")
    .insert([{ ...newlogin }])
    .select("*")
    .single();

  if (error) {
    console.error(error.message);
    throw new Error("Failed to login member");
  }

  return { data };
}
