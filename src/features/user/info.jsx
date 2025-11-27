import { useState, useEffect } from "react";
import { useAtom } from "jotai";

import { uploadAvatar } from "../../services/APIStorage";
import { userAtom } from "../../atoms/user";
import { getTeacherByTeacherId } from "../../services/APITeacher";
import { getConfig } from "../../utils/configHelper";

function Info() {
  const [user, setUser] = useAtom(userAtom);

  const [currentAvatarUrl, setCurrentAvatarUrl] = useState(user?.avatar || "");
  const [avatarFile, setAvatarFile] = useState(null);

  const [classInChargeArr, setClassInChargeArr] = useState([]);

  // 更新 avatar
  useEffect(() => {
    setCurrentAvatarUrl(user?.avatar || "");
  }, [user]);

  // 安全加载教师数据
  useEffect(() => {
    async function loadData() {
      const token = getConfig("SUPABASE_TOKEN");
      const userToken = JSON.parse(localStorage.getItem(token));

      if (!userToken?.user?.id) {
        console.warn("No valid user token found in localStorage");
        return;
      }

      console.log("userToken.user.id:", userToken.user.id);

      try {
        const teachers = await getTeacherByTeacherId(userToken.user.id);

        if (!Array.isArray(teachers) || teachers.length === 0) {
          console.warn("No teacher found for this user:", userToken.user.id);
          return;
        }

        const teacher = teachers[0];

        if (!teacher?.class_in_charge) {
          console.warn("teacher.class_in_charge is missing:", teacher);
          return;
        }

        try {
          const parsedClasses = JSON.parse(teacher.class_in_charge);
          if (Array.isArray(parsedClasses)) {
            setClassInChargeArr(parsedClasses);
          } else {
            console.warn("class_in_charge is not an array:", parsedClasses);
          }
        } catch (e) {
          console.error(
            "Failed to parse class_in_charge JSON:",
            e,
            teacher.class_in_charge
          );
        }
      } catch (err) {
        console.error("Error loading teacher data:", err);
      }
    }

    loadData();
  }, []);

  // 处理上传 avatar
  function handleImageChange(e) {
    const file = e.target.files[0];
    if (!file) return;

    setAvatarFile(file);
    setCurrentAvatarUrl(URL.createObjectURL(file));
  }

  async function onClick() {
    if (!avatarFile) {
      console.log("No file selected");
      return;
    }

    try {
      const data = await uploadAvatar(avatarFile);
      setUser(data.user.user_metadata);
    } catch (err) {
      console.error("Failed to upload avatar:", err);
    }
  }

  return (
    <div className="w-96 max-w-full mx-auto shadow-2xl shadow-blue-300 rounded-box mt-40 px-8 py-10 bg-base-100">
      <div className="avatar flex justify-center mb-5">
        <div className="w-24 rounded-full">
          <label className="cursor-pointer" htmlFor="avatar-input">
            <img src={currentAvatarUrl} alt="avatar" />
          </label>
        </div>
      </div>

      <input
        id="avatar-input"
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        className="hidden"
      />

      <div className="space-y-6">
        <label className="input input-bordered flex items-center gap-2">
          <input
            type="text"
            className="grow"
            value={user?.name || "My Name"}
            disabled
          />
        </label>

        {classInChargeArr.length > 0 && (
          <ul className="menu bg-base-200 rounded-box w-auto">
            <li>
              <details open>
                <summary>Class in Charge</summary>
                <ul>
                  {classInChargeArr.map((classItem, idx) => (
                    <li key={idx}>
                      <a>
                        Class {classItem.split("|")[0]} | Year{" "}
                        {classItem.split("|")[1]}
                      </a>
                    </li>
                  ))}
                </ul>
              </details>
            </li>
          </ul>
        )}
      </div>

      <div className="text-center mt-10">
        <button className="btn btn-primary my-2" onClick={onClick}>
          Update Avatar
        </button>
      </div>
    </div>
  );
}

export default Info;
