import React from 'react';
import MaterialTable from 'material-table';

function Performance() {
    const { useState } = React;

    const [columns, setColumns] = useState([
        { title: 'Name', field: 'name' },
        { title: 'Start Date', field: 'sdate' },
        { title: 'End Date', field: 'edate' },
        { title: 'Status', field: 'status' },
        { title: 'Client', field: 'client' },

    ]);

    const [data, setData] = useState([
        { name: 'Bridge Project 1', sdate: '01/01/2020', edate:"02/02/20202", status:"completed", client:"Jack" },
        { name: 'Bridge Project 1', sdate: '01/01/2020', edate:"02/02/20202", status:"completed", client:"Jack" },
        { name: 'Bridge Project 1', sdate: '01/01/2020', edate:"02/02/20202", status:"completed", client:"Jack" },
        { name: 'Bridge Project 1', sdate: '01/01/2020', edate:"02/02/20202", status:"completed", client:"Jack" },
        
        

    ]);

    return (
        <MaterialTable
            title="Projects"
            columns={columns}
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