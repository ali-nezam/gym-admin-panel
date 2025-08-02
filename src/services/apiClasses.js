import supabase from "./supabase";

export async function getClasses() {
  const { data, error } = await supabase
    .from("classes")
    .select("*")
    .order("id", { ascending: true });

  if (error) {
    console.error(error.message);
    throw new Error("faild get classes");
  }
  // console.log(data);
  return { data };
}

export async function getMemberOfClasses() {
  const { data, error } = await supabase.from("classes_members").select("*");
  if (error) {
    console.error(error.message);
    throw new Error("faild get classes");
  }
  // console.log(data);
  return { data };
}

export async function addMemberToClassApi({ newMemberToClass }) {
  const { data, error } = await supabase
    .from("classes_members")
    .insert([{ ...newMemberToClass }])
    .select("*")
    .single();
  if (error) {
    console.Error(error.message);
    throw new Error("Faild to add member to class");
  }
  return { data };
}

export async function getMembersOfClassWithId({ classId }) {
  const { data, error, count } = await supabase
    .from("classes_members")
    .select("*", { count: "exact" })
    .eq("class_id", classId);

  if (error) {
    console.Error(error.message);
    throw new Error("Faild to add member to class");
  }
  return { data, count };
}

export async function deleteMemberOfClassWithId({ memberId }) {
  const { data, error } = await supabase
    .from("classes_members")
    .delete()
    .eq("id", memberId);

  if (error) {
    console.Error(error);
    throw new Error("Faild to add member to class");
  }
  return { data };
}
