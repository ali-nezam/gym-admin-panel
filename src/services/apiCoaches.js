import supabase from "./supabase";

// export async function getCoaches() {
//   return supabase
//     .from("coaches")
//     .select("*")
//     .then(({ data, error }) => {
//       if (error) throw error;
//       return data;
//     });
// }

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
    .select("*");
  // console.log(newCoach);
  // console.log(data);
  if (error) {
    console.error(error);
    throw new Error("Failed to add coach");
  }
  return data;
}
