import React from 'react';

export default function dkvStudenlist({ renderdkvStudentList }) {
  console.log("Data:", renderdkvStudentList);
  let dkvElement = renderdkvStudentList.map((dkvStudent, index)=>{
return(
    <tr key={index}>
    <th scope="row">{index+1}</th>
    <td>{dkvStudent.dkvid}</td>
    <td>{dkvStudent.dkvname}</td>
    <td>{dkvStudent.dkvage}</td>
    <td>{dkvStudent.dkvphone}</td>
    <td>{dkvStudent.dkvemail}</td>
    <td>{dkvStudent.dkvstatus}</td>
    <td>Edit/Delete</td>
  </tr>
)
  })
  return (
    <div>
      <h2>Danh sách SV</h2>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">MSV</th>
            <th scope="col">Họ Tên</th>
            <th scope="col">Điện thoại</th>
            <th scope="col">Email</th>
            <th scope="col">Trạng thái</th>
            <th scope="col">Chức năng</th>
          </tr>
        </thead>
        <tbody>
       {dkvElement}
        </tbody>
      </table>
    </div>
  );
}
