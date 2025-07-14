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
  const { data, error } = await supabase.from("coaches").select("*");
  if (error) {
    throw error;
  }
  console.log(data);
  return data;
}
getCoaches();
