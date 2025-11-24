
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function StudentListItem({ studentItem }) {
  const navigate = useNavigate();
  const [imgSrc, setImgSrc] = useState(studentItem.avatar);

  useEffect(() => {
    const img = new Image();
    img.src = studentItem.avatar;
    img.onload = () => {
      setImgSrc(studentItem.avatar);
    };
    img.onerror = () => {
      setImgSrc(
        `https://ui-avatars.com/api/?name=${studentItem.name}&background=random`
      );
    };
  }, [studentItem.avatar, studentItem.name]);

  return (
    <tr>
      <th>
        <label>
          <input type="checkbox" className="checkbox" />
        </label>
      </th>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle h-12 w-12">
              <img
                src={imgSrc}
                alt="Avatar Tailwind CSS Component"
              />
            </div>
          </div>
          {/* name and gender */}
          <div>
            <div className="font-bold">{studentItem.name}</div>
            <div className="text-sm opacity-50">{studentItem.gender}</div>
          </div>
        </div>
      </td>
      {/* class and room teacher */}
      <td>
        class {studentItem.class} | year {studentItem.grade}
      </td>
      <th>
        <button
          className="btn btn-ghost btn-sm"
          onClick={() => navigate(`/home/student/${studentItem.id}`)}
        >
          details
        </button>
        <button className="btn btn-error btn-sm">delete</button>
      </th>
    </tr>
  );
}

export default StudentListItem;
