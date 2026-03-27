import { AppBar, Toolbar, Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { logout } from "../features/auth/authSlice";

export default function Navbar() {
  const dispatch = useDispatch();

  return (
    <AppBar position="static">
      <Toolbar>
        <Button color="inherit" onClick={() => dispatch(logout())}>
          Logout
        </Button>
      </Toolbar>
    </AppBar>
  );
}