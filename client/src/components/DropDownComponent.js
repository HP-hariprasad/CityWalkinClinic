import React, { Component } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

class DropDownComponent extends Component {
    constructor(props){
        super(props)
        this.state={
            dropDownValue:''
        }
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange = (e) =>{
        this.setState({
            dropDownValue:e.target.value
        },()=>{
            this.props.setSelected(this.state.dropDownValue)
        })        
    }
  render() {
    return (
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">{this.props.label}</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={this.state.dropDownValue}
            label={this.props.label}
            onChange={this.handleChange}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
      </Box>
    );
  }
}

export default DropDownComponent
