import React, { Component } from "react";
import Box from "@mui/material/Box";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import { PrimaryButton } from "@fluentui/react";

class Registration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Username: "",
      First_Name: "",
      Last_Name: "",
      DOB: "",
      Medical_History: "",
      Email: "",
      Password:'',
      Confirm_Password:'',
      Contact: "",
      Address: "",
      Role:'Patient'
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleregistration = this.handleregistration.bind(this);
  }

  handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    this.setState({
      [name]: value
    });
  };
  handleregistration = () => {};

  componentDidMount() {}

  componentWillReceiveProps() {}

  render() {
    return (
      <div style={{ padding: "20px" }}>
        <Box
          sx={{ display: "flex", flexDirection: "column", flexWrap: "wrap" }}
        >
          <FormControl fullWidth sx={{ m: 1, width: "75ch" }}>
            <h1>Enter the User Details Details</h1>
          </FormControl>
          <FormControl fullWidth sx={{ m: 1, width: "75ch" }}>
            <InputLabel htmlFor="Username">Username</InputLabel>
            <OutlinedInput
              id="Username"
              name="Username"
              value={this.state.Username}
              onChange={this.handleChange}
              label="Username"
            />
          </FormControl>
          <FormControl fullWidth sx={{ m: 1, width: "75ch" }}>
            <InputLabel htmlFor="Username">First Name</InputLabel>
            <OutlinedInput
              id="First_Name"
              name="First_Name"
              value={this.state.First_Name}
              onChange={this.handleChange}
              label="First Name"
            />
          </FormControl>
          <FormControl fullWidth sx={{ m: 1, width: "75ch" }}>
            <InputLabel htmlFor="Username">Last Name</InputLabel>
            <OutlinedInput
              id="Last_Name"
              name="Last_Name"
              value={this.state.Last_Name}
              onChange={this.handleChange}
              label="Last Name"
            />
          </FormControl>
          <FormControl fullWidth sx={{ m: 1, width: "75ch" }}>
            <InputLabel htmlFor="Username">DOB</InputLabel>
            <OutlinedInput
              id="DOB"
              name="DOB"
              value={this.state.DOB}
              onChange={this.handleChange}
              label="DOB"
            />
          </FormControl>
          <FormControl fullWidth sx={{ m: 1, width: "75ch" }}>
            <InputLabel htmlFor="Username">Medical History</InputLabel>
            <OutlinedInput
              id="Medical_History"
              name="Medical_History"
              value={this.state.Medical_History}
              onChange={this.handleChange}
              label="Medical History"
            />
          </FormControl>
          <FormControl fullWidth sx={{ m: 1, width: "75ch" }}>
            <InputLabel htmlFor="Username">Email</InputLabel>
            <OutlinedInput
              id="Email"
              name="Email"
              value={this.state.Email}
              onChange={this.handleChange}
              label="Email"
            />
          </FormControl>
          <FormControl fullWidth sx={{ m: 1, width: "75ch" }}>
            <InputLabel htmlFor="Username">Password</InputLabel>
            <OutlinedInput
              id="Password"
              name="Password"
              value={this.state.Password}
              onChange={this.handleChange}
              label="Password"
            />
          </FormControl>
          <FormControl fullWidth sx={{ m: 1, width: "75ch" }}>
            <InputLabel htmlFor="Username">Confirm Password</InputLabel>
            <OutlinedInput
              id="Confirm_Password"
              name="Confirm_Password"
              value={this.state.Confirm_Password}
              onChange={this.handleChange}
              label="Confirm_Password"
            />
          </FormControl>
          
          <FormControl fullWidth sx={{ m: 1, width: "75ch" }}>
            <InputLabel htmlFor="Username">Address</InputLabel>
            <OutlinedInput
              id="Address"
              name="Address"
              value={this.state.Address}
              onChange={this.handleChange}
              label="Address"
            />
          </FormControl>
          <FormControl fullWidth sx={{ m: 1, width: "75ch" }}>
            <PrimaryButton text="Signup" />
          </FormControl>
        </Box>
      </div>
    );
  }
}

export default Registration;
