import MemberType from "../types/member";
import supabase from "./supabase";

export async function getDashboardCard() {
  const { count: classesCount, error: classesError } = await supabase
    .from("classes")
    .select("*", { count: "exact", head: true });

  if (classesError) throw new Error(classesError.message);

  const { count: membersCount, error: membersError } = await supabase
    .from("members")
    .select("*", { count: "exact", head: true });

  if (membersError) throw new Error(membersError.message);

  const { count: coachesCount, error: coachesError } = await supabase
    .from("coaches")
    .select("*", { count: "exact", head: true });

  if (coachesError) throw new Error(coachesError.message);

  const { data: totalClassesData, error: errorTotalClassesData } =
    await supabase
      .from("classes")
      .select("id, price, classes_members(id)")
      .order("id", { ascending: true });

  if (errorTotalClassesData) {
    throw new Error("خطا در گرفتن اطلاعات کلاس‌ها");
  }

  return {
    classesCount,
    membersCount,
    coachesCount,
    totalClassesData,
  };
}

////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////

export async function getDataForChart() {
  const { data, error } = await supabase
    .from("classes_members")
    .select("*, classes(price)")
    .order("created_at", { ascending: true });
  const revenueByDate = data?.reduce((acc, item) => {
    const date = item.created_at.split("T")[0]; // فقط روز
    const price = item.classes?.price || 0;

    if (!acc[date]) acc[date] = 0;
    acc[date] += price;

    return acc;
  }, {});
  // 3. تبدیل به آرایه برای نمودار
  const dataForChart = Object.entries(revenueByDate).map(([date, revenue]) => ({
    date,
    revenue,
  }));

  if (error) {
    throw new Error("خطا در گرفتن اطلاعات کلاس‌ها");
  }

  return {
    dataForChart,
  };
}

export async function getRecentMember(): Promise<{
  data: Partial<MemberType>[] | undefined | null;
}> {
  const { data, error } = await supabase
    .from("members")
    .select("*,coachData:coach_id (expertise)")
    .order("id", { ascending: true })
    .range(0, 4);

  if (error) {
    throw error;
  }

  return { data };
}
