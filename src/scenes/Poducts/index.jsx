import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataContacts } from "../../data/mockData";
import Header from "../../components/Header";
import { useTheme } from "@mui/material";

const Poducts = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns = [
    { field: "id", headerName: "ID", flex: 0.5 },
    { field: "registrarId", headerName: "Registrar ID" },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "phone",
      headerName: "Phone Number",
      flex: 1,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "address",
      headerName: "Address",
      flex: 1,
    },
    {
      field: "city",
      headerName: "City",
      flex: 1,
    },
    {
      field: "zipCode",
      headerName: "Zip Code",
      flex: 1,
    },
  ];

  return (
    <Box m="20px">
      <Header
        title="Products"
        subtitle="List of Products"
      />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            // border: "none",
            border: `2px solid ${colors.green[300]}`,
          },
          "& .MuiDataGrid-cell": {
            // borderBottom: "none",
            borderBottom: `2px solid ${colors.green[300]}`,
          },
          "& .name-column--cell": {
            color: colors.grey[400],
          },
          "&  .css-1rt5bto-MuiTablePagination-selectLabel":{
            color:'white !important'
          },
          "&  .css-7ms3qr-MuiTablePagination-displayedRows":{
            color:'white !important'
          },
          "&  .MuiDataGrid-columnHeader.MuiDataGrid-columnHeader--alignLeft.MuiDataGrid-columnHeader--sortable":{
            outline:'none !important'
          },
          "&  .MuiDataGrid-columnHeader.MuiDataGrid-columnHeader--sortable.MuiDataGrid-columnHeader--sorted":{
            outline:'none !important'
          },
          "& .MuiButtonBase-root.MuiCheckbox-root.MuiCheckbox-colorPrimary.PrivateSwitchBase-root.MuiCheckbox-root.MuiCheckbox-colorPrimary.MuiDataGrid-checkboxInput.css-b4z7w1-MuiButtonBase-root-MuiCheckbox-root ":{
            outline:'none !important'
          },
          "&  .MuiDataGrid-columnHeader.MuiDataGrid-columnHeader--sortable":{
            outline:'none !important'
          },
          "&  .MuiDataGrid-columnHeader.MuiDataGrid-columnHeader--sortable.MuiDataGrid-columnHeader--sorted":{
            outline:'none !important'
          },
          "&  .MuiSvgIcon-root.MuiSvgIcon-fontSizeSmall.css-196n7va-MuiSvgIcon-root":{
            color:'white !important'
          },
          "&  .MuiButtonBase-root.Mui-disabled.MuiIconButton-root.Mui-disabled.MuiIconButton-colorInherit.MuiIconButton-sizeMedium.css-1hgjne-MuiButtonBase-root-MuiIconButton-root":{
            color:'white !important'
          },
          "&  .MuiSelect-select.MuiTablePagination-select.MuiSelect-standard.MuiInputBase-input.css-194a1fa-MuiSelect-select-MuiInputBase-input":{
            color:'white !important'
          },
          "&  .MuiDataGrid-columnHeaderTitle.css-1jbbcbn-MuiDataGrid-columnHeaderTitle":{
            color:'white !important'
          },

          "& .MuiSelect-select.MuiTablePagination-select.MuiSelect-standard.MuiInputBase-input.css-194a1fa-MuiSelect-select-MuiInputBase-input":{
            color:'white !important'
          },
          "& .MuiDataGrid-selectedRowCount.css-de9k3v-MuiDataGrid-selectedRowCount":{
            color:'white !important'
          },



          "& .MuiDataGrid-columnHeaders": {
            borderBottom: "none",
            backgroundColor: colors.green[300],
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.green[300],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${theme.palette.mode === "dark"?"white":colors.green[500]} !important`,
          },
        }}
      >
        <DataGrid
          rows={mockDataContacts}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
        />
      </Box>
    </Box>
  );
};

export default Poducts;
