import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton } from "@mui/material";

export default function User(props: any) {
  const { id, email, first_name, last_name, avatar, deleteUser } = props;

  return (
    <>
      <ListItem
        alignItems="flex-start"
        secondaryAction={
          <Button
            variant="outlined"
            startIcon={<DeleteIcon />}
            onClick={() => {
              deleteUser(id);
            }}
          >
            Delete
          </Button>
        }
      >
        <ListItemAvatar>
          <Avatar alt={first_name} src={avatar} />
        </ListItemAvatar>

        <ListItemText
          primary={`${first_name} ${last_name}`}
          secondary={
            <Typography
              sx={{ display: "inline" }}
              component="span"
              variant="body2"
              color="text.primary"
            >
              {email}
            </Typography>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
    </>
  );
}
