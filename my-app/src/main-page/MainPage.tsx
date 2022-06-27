import React, {FormEvent, useState} from 'react';
import {Alert, Box, Button, CssBaseline, styled, TextField, Typography} from "@mui/material";
import {useNavigate} from "react-router-dom";
import './MainPage.css';

const StyledTextField = styled(TextField)({
  '& .MuiInputLabel-root': {
    color: 'white'
  },
  '& .MuiOutlinedInput-input': {
    color: 'white'
  },
  '& label.Mui-focused': {
    color: '#fafbfc',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#fafbfc',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#ffffff',
    },
    '&:hover fieldset': {
      borderColor: '#fafaaa',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#fafbfc',
    },
  },
});

export const MainPage = () => {
  const navigate = useNavigate();
  const [correct, setCorrect] = useState(true);
  const usernamePattern = /^[a-z\d](?:[a-z\d]|-(?=[a-z\d])){0,38}$/i;
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    event.stopPropagation();
    const username = event.currentTarget.elements[0] as HTMLInputElement;
    if (!usernamePattern.test(username.value as string)) {
      setCorrect(false)
      return;
    }
    navigate(`/information/${username.value}`);
  };
  return (
    <Box className="Main-box">
      <CssBaseline/>
      <Typography variant={"h3"} mb={4}>
        Github user repositories and organisations information
      </Typography>
      {!correct && <Alert severity="warning">This github username cannot exist.</Alert>}
      <form onSubmit={handleSubmit}>
        <StyledTextField label="Enter a username"></StyledTextField>
        <Button type="submit" variant="contained" sx={{margin: "2rem"}}>Search</Button>
      </form>
    </Box>
  );
}
