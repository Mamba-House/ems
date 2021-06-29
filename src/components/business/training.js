import React from 'react';
import MaterialTable from 'material-table';

function Performance() {
    const { useState } = React;

    const [columns, setColumns] = useState([
        { title: 'Name', field: 'name' },
        { title: 'Delivered by', field: 'del' },

        { title: 'Status', field: 'status' },

    ]);

    const [data, setData] = useState([
        { name: 'Project Management',  del:"Jack",status:"completed",  },
        
        { name: 'Project Management',  del:"Jack",status:"completed",  },
        { name: 'Project Management',  del:"Jack",status:"completed",  },
        { name: 'Project Management',  del:"Jack",status:"completed",  },
        { name: 'Project Management',  del:"Jack",status:"completed",  },
        { name: 'Project Management',  del:"Jack",status:"completed",  },
        
        

    ]);

    return (
        <MaterialTable
            title=""
            style={{paddingRight:"30px", paddingLeft:"30px"}}
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