import { useEffect, useState } from "react";
import List from "@mui/material/List";
import User from "./User";
import { Button } from "@mui/material";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import { flexbox } from "@mui/system";

export default function UserList() {
  const [data, setData] = useState<any>();
  const [isLoading, setisLoading] = useState(false);
  const [error, setError] = useState();

  function fetchUserList() {
    setisLoading(true);
    fetch("https://reqres.in/api/users?page=1")
      .then((resp) => resp.json())
      .then((resp) => {
        setData(resp.data);
        console.log(resp.data);
      })
      .catch((error) => {
        console.error(error);
        setError(error);
      })
      .finally(() => {
        setisLoading(false);
      });
  }

  function deleteUser(id: any) {
    setData((prev: any) =>
      prev.filter((user: any) => {
        if (id === user.id) {
          return false;
        }
        return true;
      })
    );
  }

  useEffect(() => {
    fetchUserList();
  }, []);

  if (error) {
    return <p>Error</p>;
  }

  if (isLoading) {
    return <p>Loading</p>;
  }

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Button
          variant="outlined"
          startIcon={<RestartAltIcon />}
          onClick={() => {
            fetchUserList();
          }}
        >
          Reset
        </Button>
      </div>
      <List
        sx={{ width: "100%", maxWidth: "760px", bgcolor: "background.paper" }}
      >
        {data &&
          data.map((user: any) => {
            return <User key={user.id} deleteUser={deleteUser} {...user} />;
          })}
      </List>
    </div>
  );
}
