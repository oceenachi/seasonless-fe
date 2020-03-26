import React, { useState, useEffect } from "react";

function Table(props) {
  console.log("tal;e id", props);
  const [repayments, setRepayments] = useState({});
  const [id, setId] = useState(Number(props.id));
  const fetchServices = url => {
    fetch(url)
      .then(data => data.json())
      .then(data => setRepayments(data));
  };

  // useEffect(() => {
  //   console.log("got to use effect");

  //   let uri = `http://192.168.8.116:9091/api/v1/customers/${id}`;
  //   fetchServices(uri);
  //   console.log(repayments);
  // }, [id]);

  return (
    <>
      {console.log(repayments.payload)}

      {props.data.length > 0 ? (
        <div className="tableParent">
          {props.data.map((val, index) => {
            return (
              <>
                <table className="table table-striped m-auto">
                  <thead>
                    <tr>
                      <th scope="col">SeasonID</th>
                      <th scope="col">Season Name</th>
                      <th scope="col">Total Credit Owed</th>
                      <th scope="col">Total Repaid</th>
                      <th scope="col">Difference</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{val.seasonsid}</td>
                      <td>{val.name}</td>
                      <td>{val.totalCredit}</td>
                      <td>{val.totalRepaid}</td>
                      <td>{val.difference}</td>
                    </tr>
                  </tbody>
                </table>
              </>
            );
          })}
        </div>
      ) : (
        []
      )}
    </>
  );
}

export default Table;
