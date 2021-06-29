import react from "react";
import MaterialTable from "material-table";

function List() {
  return (
    <MaterialTable
      style={{ paddingLeft: "20px",paddingRight:"20px" }}
      title=""
      columns={[
        { title: "Name", field: "name" },
        { title: "Role", field: "role" },
        { title: "Manager", field: "manager" },
      ]}
      data={[
        { name: "jason", role: "staff member", manager: "john" },
        { name: "jack", role: "mason", manager: "john" },
        { name: "norma", role: "painter", manager: "jack" },
        { name: "wick", role: "mason", manager: "john" },

      ]}
    />
  );
}
export default List;
