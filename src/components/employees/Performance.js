import React from 'react';
import MaterialTable from 'material-table';

function Performance() {
    const { useState } = React;

    const [columns, setColumns] = useState([
        { title: 'PDR', field: 'pdr' },
        { title: 'Date', field: 'date'},
        { title: 'Score', field: 'score'},
        { title: 'Accessor', field: 'accessor'},

       
    ]);

    const [data, setData] = useState([
        { pdr: 'Mehmet', date: '02/12/2020',score:"20", accessor:"Mgr Name"  },
        { pdr: 'Mehmet', date: '02/12/2020',score:"20", accessor:"Mgr Name"  },
        { pdr: 'Mehmet', date: '02/12/2020',score:"20", accessor:"Mgr Name"  },
        { pdr: 'Mehmet', date: '02/12/2020',score:"20", accessor:"Mgr Name"  },
        { pdr: 'Mehmet', date: '02/12/2020',score:"20", accessor:"Mgr Name"  },

    ]);

    return (
        <MaterialTable
            title=""
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