import React, { useState, useEffect } from "react";

function TableBody(props) {
  return (
    <>
      {props.employees.length > 0 ? (
        props.employees.map(({name, email, phone, picture}) => {
          return (
            <tr>
              <td>
                {/* <img alt={employee.name} src={employee.picture.large}></img> */}
              </td>
              <td>{name.last}</td>
              <td>{email}</td>
              <td>{phone}</td>
            </tr>
          );
        })
      ) : (
        <tr></tr>
      )}
    </>
  );
}

export default TableBody;
