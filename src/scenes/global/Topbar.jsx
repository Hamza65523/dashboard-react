import { Box, IconButton, useTheme } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../../theme";
import InputBase from "@mui/material/InputBase";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";

const Topbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);



  return (
    <Box display="flex" justifyContent="space-between" p={2}>
      {/* SEARCH BAR */}
      <Box
        display="flex"
        backgroundColor={colors.green[300]}
        borderRadius="3px"
      >
        <InputBase sx={{ ml: 2, flex: 1, }}  style={{color:'white'}} placeholder="Search" />
        <IconButton type="button" sx={{ p: 1 }}>
          <SearchIcon  style={{ color: 'white'}}/>
        </IconButton>
      </Box>

      {/* ICONS */}
      <Box display="flex">
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "dark" ? (
            <DarkModeOutlinedIcon />
          ) : (
            <LightModeOutlinedIcon style={{color:`${colors.green[300]}`}}/>
          )}
        </IconButton>
        <IconButton>
          <NotificationsOutlinedIcon style={{color:`${theme.palette.mode === "dark"?'':colors.green[300]}`}}/>
        </IconButton>
        <IconButton>
          <SettingsOutlinedIcon style={{color:`${theme.palette.mode === "dark"?'':colors.green[300]}`}}/>
        </IconButton>
        <IconButton>
          <PersonOutlinedIcon style={{color:`${theme.palette.mode === "dark"?'':colors.green[300]}`}} />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Topbar;
