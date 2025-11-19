import ScoreListItem from "./ScoreListItem";

// import { useState } from 'react';
function ScoreList() {
  return (
    <div className="overflow-x-auto">
      <table className="table table-lg">
        <tbody>
          <tr>
            <th>Name</th>
            <th>Class</th>
            <th>Subject</th>
            <th>Semester</th>
            <th>Score</th>
          </tr>
        </tbody>
        <tbody>
          <ScoreListItem />
        </tbody>
      </table>
    </div>
  );
}
export default ScoreList;
