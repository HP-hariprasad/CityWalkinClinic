import React, { Component } from "react";
import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

class DatePickerComponet extends Component {
    constructor(props){
        super(props)
        this.state={
            dateValue:''
        }
        this.handleDate = this.handleDate.bind(this)
    }
    handleDate = (data) =>{
        this.setState({
            dateValue:data
        },()=>{
            this.props.setSelectedDate(this.state.dateValue)
        })
    }
  render() {
    return (
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker
          label="Choose the date"
          value={this.state.dateValue}
          onChange={(newValue)=>this.handleDate(newValue)}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
    );
  }
}

export default DatePickerComponet