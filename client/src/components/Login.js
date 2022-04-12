import React, { Component } from "react";
import Box from "@mui/material/Box";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import {PrimaryButton} from "@fluentui/react"

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleChange = () => {};
  handleLogin = () => {};
  componentDidMount() {}

  componentWillReceiveProps() {}

  render() {
    return (
      <div style={{padding:'20px'}}>
        <Box
          sx={{ display: "flex", flexDirection: "column", flexWrap: "wrap" }}
        >
             <FormControl fullWidth sx={{ m: 1, width: "75ch" }}>
            <h1>enter the Email and Password</h1>
          </FormControl>
          <FormControl fullWidth sx={{ m: 1, width: "75ch" }}>
            <InputLabel htmlFor="Username">Username</InputLabel>
            <OutlinedInput
              id="Username"
              onChange={this.handleChange("Username")}
              label="Username"
            />
          </FormControl>
          <FormControl fullWidth sx={{ m: 1, width: "75ch" }}>
            <InputLabel htmlFor="Username">First Name</InputLabel>
            <OutlinedInput
              id="First Name"
              onChange={this.handleChange("First Name")}
              label="First Name"
            />
          </FormControl>
          <FormControl fullWidth sx={{ m: 1, width: "75ch" }}>
            <PrimaryButton text="Login" />
          </FormControl>
        </Box>
      </div>
    );
  }
}

export default Login;
