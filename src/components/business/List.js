import react from 'react';
import MaterialTable from 'material-table';

function List() {
    return (
        <MaterialTable
        style={{ paddingLeft: "20px",paddingRight:"20px" }}
            title=""
            columns={[
                { title: 'Name', field: 'name' },
                { title: 'Status', field: 'status' },
                { title: 'Date', field: 'date', },
                { title: 'Owner', field: 'owner' },
                { title: 'Amount', field: 'amount' },
 
            ]}
            data={[
                { name: 'Deal 1', status: 'Identified', date: "01/03/987", owner:"zeeshan", amount: "63 $" },
                { name: 'Deal 2', status: 'Pending', date: "01/03/987", owner:"ali", amount: "63 $" },
                { name: 'Deal 3 ', status: 'Rejected', date: "01/03/987", owner:"umer", amount: "63 $" },
                { name: 'Deal 4', status: 'Identified', date: "01/03/987", owner:"zeeshan", amount: "63 $" },

            ]}
            // actions={[
            //     {
            //         icon: 'save',
            //         tooltip: 'Save User',
            //         onClick: (event, rowData) => alert("You saved " + rowData.name)
            //     }
            // ]}
        />
    )
}
export default List;