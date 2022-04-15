import { Stack } from "@mui/material";
import "./App.css";
import UserList from "./UserList";

function App() {
  return (
    <div
      style={{
        maxWidth: "760px",
        margin: "4em auto",
      }}
    >
      {/* <Stack
      direction="row"
      justifyContent="center"
      alignItems="center"
      spacing={2}
    > */}
      <UserList />
      {/* </Stack> */}
    </div>
  );
}

export default App;
