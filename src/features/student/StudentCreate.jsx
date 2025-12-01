import { useEffect } from "react";
import { useState } from "react";
import { getConfig } from "../../utils/configHelper";
import { getTeacherByTeacherId } from "../../services/APITeacher";

function StudentCreate() {
  const [name, setName] = useState("Someone");
  const [classInfo, setClassInfo] = useState("x | x");
  const [email, setEmail] = useState("some@example.com");
  const [classInChargeArr, setClassInChargeArr] = useState([]);
  const [gender, setGender] = useState("male");

  useEffect(() => {
    const token = getConfig("SUPER_TOKEN");
    const userToken = JSON.parse(localStorage.getItem(token));

    if (!userToken) {
      return;
    }
    async function fetchData() {
      const teachers = await getTeacherByTeacherId(userToken.user.id);
      setClassInChargeArr(JSON.parse(teachers[0].class_in_charge));
    }
    fetchData();
  }, []);

  async function onClick() {}

  return (
    <div className="w-1/3 mx-auto shadow-2xl shadow-blue-300 rounded-box mt-40">
      <div className="w-3/4 mx-auto pt-4">
        <label className="input input-bordered flex items-center gap-2 my-4">
          Email
          <input
            type="text"
            className="grow"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label className="input input-bordered flex items-center gap-2 my-4">
          Name
          <input
            type="text"
            className="grow"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <select
          className="select select-bordered w-full mb-4"
          value={classInfo}
          onChange={(e) => setClassInfo(e.target.value)}
        >
          <option disabled>Choose Class</option>
          {classInChargeArr.map((item) => (
            <option key={item} value={item}>
              Class {item.split("|")[0]} | Year {item.split("|")[1]}
            </option>
          ))}
        </select>

        <select
          className="select select-bordered w-full mb-4"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        >
          <option disabled>Choose Gender</option>
          <option>male</option>
          <option>female</option>
        </select>
      </div>

      <div className="text-center">
        <button className="btn btn-primary my-2">Create Student</button>
      </div>
    </div>
  );
}

export default StudentCreate;
