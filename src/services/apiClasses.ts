import supabase from "./supabase";
import ClassesType, { MemberOfClassType } from "../types/class";

export async function getClasses(
  from: number,
  to: number
): Promise<{
  data: ClassesType[] | null | undefined;
  count: number | null;
}> {
  const { data, error, count } = await supabase
    .from("classes")
    .select("*", { count: "exact" })
    .order("id", { ascending: true })
    .range(from, to);

  if (error) {
    console.error(error.message);
    throw new Error("faild get classes");
  }
  // console.log(data);
  return { data, count };
}

export async function addclass(newClass: ClassesType) {
  const { data, error } = await supabase
    .from("classes")
    .insert({ ...newClass })
    .select("*")
    .single();
  if (error) {
    console.error(error);
    throw new Error("Faild to add class");
  }
  return { data };
}
export async function editClassApi(editedClass: ClassesType, id: number) {
  const { data, error } = await supabase
    .from("classes")
    .update({ ...editedClass })
    .eq("id", id)
    .select()
    .single();
  if (error) {
    console.error(error);
    throw new Error("Faild to edit class");
  }
  return { data };
}

export async function deleteClassApi({ classId }: any) {
  const { data, error } = await supabase
    .from("classes")
    .delete()
    .eq("id", classId);

  if (error) {
    console.error(error);
    throw new Error("Faild to add member to class");
  }
  return { data };
}

//////////////////////////////////////////////////////
/////////////// member of class///////////////////////
//////////////////////////////////////////////////////

export async function addMemberToClassApi(newMemberToClass: MemberOfClassType) {
  console.log(newMemberToClass);
  const { data, error } = await supabase
    .from("classes_members")
    .insert(newMemberToClass)
    .select("*")
    .single();
  if (error) {
    console.error(error.message);
    throw new Error("Faild to add member to class");
  }
  return { data };
}

export async function deleteMemberOfClassWithId(memberId: number) {
  const { data, error } = await supabase
    .from("classes_members")
    .delete()
    .eq("id", memberId);

  if (error) {
    console.error(error);
    throw new Error("Faild to add member to class");
  }
  return { data };
}

export async function getMembersOfClassWithId(classId: number): Promise<{
  data: MemberOfClassType[] | null | undefined;
  count: number | null;
}> {
  const { data, error, count } = await supabase
    .from("classes_members")
    .select("*", { count: "exact" })
    .eq("class_id", classId);

  if (error) {
    console.error(error.message);
    throw new Error("Faild to add member to class");
  }
  return { data, count };
}

//////////////////////////////////////////////////////
/////////////// dashboard of classes sections///////////////////////
//////////////////////////////////////////////////////

export async function getClassesWithMembers() {
  const { data, error } = await supabase
    .from("classes")
    .select("id, price, capacity, classes_members(id)")
    .order("id", { ascending: true });

  if (error) {
    throw new Error("خطا در گرفتن اطلاعات کلاس‌ها");
  }

  return data;
}
