// import { useState } from 'react';

import { useNavigate } from "react-router-dom";

function ScoreListItem({ scoreItem }) {
  const navigate = useNavigate();

  return (
    <tr>
      <td>{scoreItem.Name}</td>
      <td>{scoreItem.Class}</td>
      <td>{scoreItem.Subject}</td>
      <td>{scoreItem.Semester}</td>
      <td>{scoreItem.Score}</td>
      <th>
        <button
          className="btn btn-ghost btn-sm"
          onClick={() => navigate(`/home/score/${scoreItem.id}`)}
        >
          details
        </button>
        <button className="btn btn-error btn-sm">delete</button>
      </th>
    </tr>
  );
}

export default ScoreListItem;
