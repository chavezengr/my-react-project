import React from "react";
import { NavLink, Outlet, Route } from "react-router-dom";
import routes from "../../routes";
import {
  Box,
  CssBaseline,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from "@mui/material";

interface Props {
  routes: Routes[];
}

interface Routes {
  path: string;
  element?: any;
  name?: string;
}

const SideMenu: React.FC<Props> = ({ routes }: Props) => {
  const drawerWidth = 250;

  return (
    <>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: "auto" }}>
          <List>
            {routes.map(({ path, element: Element, name }) => (
              <NavLink
                // style={({ isActive }) => ({
                //   display: "block",
                //   margin: "1rem 0",
                //   color: isActive ? "red" : "",
                // })}
                to={path}
                key={name}
              >
                {/* {name} */}

                <ListItem key={name} disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
                    </ListItemIcon>
                    <ListItemText primary={name} />
                  </ListItemButton>
                </ListItem>
              </NavLink>
            ))}
          </List>
        </Box>
        <Divider />
      </Drawer>

      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <Outlet />
      </Box>
    </>
  );
};

export default SideMenu;
