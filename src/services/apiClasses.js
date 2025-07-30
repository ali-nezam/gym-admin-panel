import supabase from "./supabase";

export async function getClasses() {
  const { data, error } = await supabase.from("classes").select("*");
  if (error) {
    console.error(error.message);
    throw new Error("faild get classes");
  }
  // console.log(data);
  return { data };
}
