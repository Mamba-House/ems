import React from 'react';
import MaterialTable from 'material-table';

function Performance() {
    const { useState } = React;

    const [columns, setColumns] = useState([
        { title: 'Job Title', field: 'title' },
        { title: 'Location', field: 'location',  },
        { title: 'Salary', field: 'salary', },
        { title: 'type', field: 'type', },
        { title: 'No. of Applicants', field: 'no', },
        { title: 'Status', field: 'status', },


     
    ]);

    const [data, setData] = useState([
        { title: 'Project Manager', location: 'England', salary: "$ 5000 ", type: "Permanant", no:" 4", status:"Open" },
        { title: 'Project Manager', location: 'England', salary: "$ 5000 ", type: "Permanant", no:" 4", status:"Open" },
        { title: 'Project Manager', location: 'England', salary: "$ 5000 ", type: "Permanant", no:" 4", status:"Open" },
        { title: 'Project Manager', location: 'England', salary: "$ 5000 ", type: "Permanant", no:" 4", status:"Open" },
        { title: 'Project Manager', location: 'England', salary: "$ 5000 ", type: "Permanant", no:" 4", status:"Open" },
        { title: 'Project Manager', location: 'England', salary: "$ 5000 ", type: "Permanant", no:" 4", status:"Open" },

      

    ]);

    return (
        <MaterialTable
            title=""
            columns={columns}
            style={{ paddingLeft: "30px",paddingRight:"30px", marginTop:"50px" }}     
            data={data}
            editable={{
                onRowAdd: newData =>
                    new Promise((resolve, reject) => {
                        setTimeout(() => {
                            setData([...data, newData]);

                            resolve();
                        }, 1000)
                    }),
                onRowUpdate: (newData, oldData) =>
                    new Promise((resolve, reject) => {
                        setTimeout(() => {
                            const dataUpdate = [...data];
                            const index = oldData.tableData.id;
                            dataUpdate[index] = newData;
                            setData([...dataUpdate]);

                            resolve();
                        }, 1000)
                    }),
                onRowDelete: oldData =>
                    new Promise((resolve, reject) => {
                        setTimeout(() => {
                            const dataDelete = [...data];
                            const index = oldData.tableData.id;
                            dataDelete.splice(index, 1);
                            setData([...dataDelete]);

                            resolve()
                        }, 1000)
                    }),
            }}
        />
    )
}

export default Performance;