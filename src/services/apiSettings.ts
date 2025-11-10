import supabase from "./supabase";
import settings from "../types/settings";

export async function getSettings() {
  const { data, error } = await supabase.from("settings").select("*");

  if (error) {
    throw error;
  }
  return { data };
}

export async function editSettingsApi(
  settingsEdited: Partial<settings>,
  id: number
) {
  const { data, error } = await supabase
    .from("settings")
    .update({ ...settingsEdited })
    .eq("id", id)
    .select()
    .single();

  if (error) {
    console.error(error);
    throw new Error("Failed to edit coach");
  }
  return data;
}
