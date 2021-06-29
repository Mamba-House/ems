import React from 'react';
import MaterialTable from 'material-table';

function Performance() {
    const { useState } = React;

    const [columns, setColumns] = useState([
        { title: 'Code', field: 'code' },
        { title: 'Asset Type', field: 'type',  },
        { title: 'Assigned to', field: 'to', },
        { title: 'Date', field: 'date', },

     
    ]);

    const [data, setData] = useState([
        { code: 'CNST-LT-1', type: 'Laptop', to: "emp 1 ", date: "02/03/2020" },
        { code: 'CNST-LT-1', type: 'Laptop', to: "emp 1 ", date: "02/03/2020" },
        { code: 'CNST-LT-1', type: 'Laptop', to: "emp 1 ", date: "02/03/2020" },
        { code: 'CNST-LT-1', type: 'Laptop', to: "emp 1 ", date: "02/03/2020" },
        { code: 'CNST-LT-1', type: 'Laptop', to: "emp 1 ", date: "02/03/2020" },
        { code: 'CNST-LT-1', type: 'Laptop', to: "emp 1 ", date: "02/03/2020" },

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