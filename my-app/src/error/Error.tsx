import {Box, Button, Typography} from "@mui/material";
import {Link} from "react-router-dom";
import './Error.css';

export const Error = () => {
  return (
    <Box className="Error-box">
      <Typography variant="h3">
        Couldn't find user
      </Typography>
      <Link to='/'>
        <Button variant="contained" sx={{marginTop: "2rem"}}>
          Try again
        </Button>
      </Link>
    </Box>
  );
};