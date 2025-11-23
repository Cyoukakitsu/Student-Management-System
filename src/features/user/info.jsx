import { useState } from "react";
function Info() {
  const [image, setImage] = useState(
    "https://i.pinimg.com/originals/78/7b/b1/787bb10ef4f399952cf290d649a0d1bd.jpg"
  );

  function handleImageChange(e) {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      setImage(reader.result);
    };
    reader.readAsDataURL(file);
  }

  return (
    <>
      <div className="w-96 max-w-full mx-auto shadow-2xl shadow-blue-300 rounded-box mt-40 px-8 py-10 bg-base-100">
        <div className="avatar flex justify-center mb-5">
          <div className="w-24 rounded-full ">
            <label className="cursor-pointer" htmlFor="avatar-input">
              <img src={image} />
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
          <label className="input input-bordered flex items-center gap-2 ">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </g>
            </svg>

            <input type="text" className="grow" value="My Name" disabled />
          </label>
          <ul className="menu bg-base-200 rounded-box w-auto">
            <li>
              <details open>
                <summary>Class in Charge</summary>
                <ul>
                  <li>
                    <a>Class 10 | Year 9</a>
                  </li>
                  <li>
                    <a>Class 11 | Year 10</a>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>

        <div className="text-center mt-10">
          <button className="btn btn-primary  my-2">Update Avatar</button>
        </div>
      </div>
    </>
  );
}
export default Info;
