import { getConfig } from "../utils/configHelper";
import { supabase } from "../utils/supabase";
import { updateUser } from "./APIAuth";

const token = getConfig("SUPABASE_TOKEN");
const supabaseUrl = getConfig("SUPABASE_URL");

const userToken = JSON.parse(localStorage.getItem(token));
export async function uploadAvatar(avatarFile) {
  const avatarFilename = `${userToken.user.email}-${Date.now()}.png`;

  const { data, error } = await supabase.storage
    .from("avatar")
    //TODO  : change the name
    .upload(`public/${avatarFilename}`, avatarFile, {
      cacheControl: "3600",
      upsert: false,
    });

  if (error) {
    console.log(error.message);
  }
  const newAvatarUrl = `${supabaseUrl}/storage/v1/object/public/${avatarFilename}`;
  const newUserMetadata = await updateUser({ avatar: newAvatarUrl });

  return newUserMetadata;
}
