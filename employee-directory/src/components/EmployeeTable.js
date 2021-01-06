import React from "react";

function EmployeeTable (props) {
    return (
        <table className="table" style={{margin: "auto"}}>
            <thead>
                <tr>
                    <th scope="col">Profile Picture</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Phone Number</th>
                </tr>
            </thead>
            <tbody>
                {props.children}
            </tbody>
        </table>
    )
};

export default EmployeeTable