// import { useState } from 'react';

function ScoreListItem({ scoreItem }) {
  return (
    <tr>
      <td>{scoreItem.Name}</td>
      <td>{scoreItem.Class}</td>
      <td>{scoreItem.Subject}</td>
      <td>{scoreItem.Semester}</td>
      <td>{scoreItem.Score}</td>
      <th>
        <button className="btn btn-ghost btn-sm">details</button>
        <button className="btn btn-error btn-sm">delete</button>
      </th>
    </tr>
  );
}

export default ScoreListItem;