import { useSelector, useDispatch } from "react-redux";
import { ThemeProvider } from "@mui/material/styles";
import {
  Paper,
  FormGroup,
  FormControlLabel,
  Switch,
  Typography,
} from "@mui/material";

import { darkTheme, lightTheme } from "./redux/theme/theme";
import { toggleTheme } from "./redux/theme/themeSlice";

export default function App() {
  // get theme from store
  const theme = useSelector((state) => state.theme);

  // initialize dispatch variable
  const dispatch = useDispatch();

  // ToggleSwitch component
  const ToggleSwitch = () => {
    return (
      <div>
        <FormGroup>
          <FormControlLabel
            control={
              <Switch
                checked={theme.darkTheme}
                onChange={() => dispatch(toggleTheme())}
              />
            }
            label="Toggle Theme"
          />
        </FormGroup>
      </div>
    );
  };

  return (
    <ThemeProvider theme={theme.darkTheme ? darkTheme : lightTheme}>
      <Paper
        style={{
          minHeight: "100vh",
          borderRadius: "0",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <ToggleSwitch />
        <Typography variant="h1">Hello</Typography>
      </Paper>
    </ThemeProvider>
  );
}