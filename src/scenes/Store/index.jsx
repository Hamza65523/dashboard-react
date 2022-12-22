import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataTeam } from "../../data/mockData";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import Header from "../../components/Header";

const Store = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "category",
      headerName: "Category",
      type: "string",
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
      field: "accessLevel",
      headerName: "Access Level",
      flex: 1,
      renderCell: ({ row: { access } }) => {
        return (
          <Box
            width="60%"
            m="0 auto"
            p="5px"
            display="flex"
            justifyContent="center"
            backgroundColor={
              access === "admin"
                ? colors.greenAccent[600]
                : access === "manager"
                ? colors.greenAccent[700]
                : colors.greenAccent[700]
            }
            borderRadius="4px"
          >
            {access === "admin" && <AdminPanelSettingsOutlinedIcon />}
            {access === "manager" && <SecurityOutlinedIcon />}
            {access === "user" && <LockOpenOutlinedIcon />}
            <Typography color={colors.grey[100]} sx={{ ml: "5px" }}>
              {access}
            </Typography>
          </Box>
        );
      },
    },
  ];

  return (
    <Box m="20px">
      <Header title="Store" subtitle="Store Description" />
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
        }}
      >
        <DataGrid checkboxSelection rows={mockDataTeam} columns={columns} />
      </Box>
    </Box>
  );
};

export default Store;
