import React from "react";

function TableBody(props) {
  return (
    <>
      {props.employees.length > 0 ? (
        props.employees.map(({name, email, phone, picture}) => {
          return (
            <tr>
              <td>
                <img alt={ name !== undefined ? name.first : ""} src={ picture !== undefined ? picture.large : "" }></img>
              </td>
              <td>{ name !== undefined ? name.first : "" }</td>
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