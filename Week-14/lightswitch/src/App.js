
import './App.css';
import {
  Paper,
  FormGroup,
  FormControlLabel,
  Switch,
  Typography,
} from "@mui/material";
function App() {
  return (
    <div className="App">
     <FormGroup>
      <FormControlLabel control={<Switch />} label="Toggle Theme" />
     </FormGroup>
    </div>
  );
}

export default App;
