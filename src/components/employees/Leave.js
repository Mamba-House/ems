import React from 'react';
import MaterialTable from 'material-table';

function Leave() {
    const { useState } = React;

    const [columns, setColumns] = useState([
        { title: 'Leave Type', field: 'type' },
        { title: 'Date from', field: 'datef'},
        { title: 'To', field: 'datet'},
        { title: 'Status', field: 'status'},

       
    ]);

    const [data, setData] = useState([
        { type: 'Anual', datef: '02/12/2020',datet:'08/12/2020', status:"Pending"},
        { type: 'Sick Leave', datef: '02/12/2020',datet:'08/12/2020', status:"Approved"  },
        
        

        

      
    ]);

    return (
        <MaterialTable
            title=""
            columns={columns}
            style={{ paddingLeft: "40px",paddingRight:"40px" }}
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

export default Leave;