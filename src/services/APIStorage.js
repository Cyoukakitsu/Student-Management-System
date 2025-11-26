import { supabase } from "../utils/supabase";

export async function uploadAvatar(avatarFile) {
  const { data, error } = await supabase.storage
    .from("avatar")
    //TODO  : change the name
    .upload("public/avatar1.png", avatarFile, {
      cacheControl: "3600",
      upsert: false,
    });

  if (error) {
    console.log(error.message);
  }

  return data;
}
