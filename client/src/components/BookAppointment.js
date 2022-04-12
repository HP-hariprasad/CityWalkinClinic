import React, { Component } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import DropDownComponent from "./DropDownComponent";
import DatePickerComponet from "./DatePicker";
import { PrimaryButton } from "@fluentui/react";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  height: "25rem",
  width: "600px",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

class BookAppointment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      SelectedPatient: "",
      SelectedDoctor: "",
      SelectedDate: "",
      SelectedTime: "",
    };
    this.handleSelectPatient = this.handleSelectPatient.bind(this);
    this.handleSelectDoctor = this.handleSelectDoctor.bind(this);
    this.handleSelectedDate = this.handleSelectDoctor.bind(this);
    this.bookAppointment = this.bookAppointment.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this)
  }

  handleSelectDoctor = (data) => {
    this.setState({
      SelectedDoctor: data,
    });
  };
  handleSelectPatient = (data) => {
    this.setState({
      SelectedPatient: data,
    });
  };
  handleSelectedDate = (data) => {
    this.setState({
      SelectedDate: data,
    });
  };
  handleTextChange = () =>{

  }
  bookAppointment = () => {};
  render() {
    return (
      <div>
        <Modal
          open={this.props.modal}
          onClose={this.props.closeModal}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Book Appointment for the Patient
            </Typography>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                rowGap: "10px",
              }}
            >
              <DropDownComponent
                setSelected={this.handleSelectDoctor}
                label="Doctor"
              />
              <DatePickerComponet setSelectedDate={this.handleSelectedDate} />
              <DropDownComponent
                setSelected={this.handleSelectDoctor}
                label="Time Slot"
              />
              <FormControl >
                <InputLabel htmlFor="Username">Concern</InputLabel>
                <OutlinedInput
                  id="Concern"
                  onChange={this.handleTextChange("Concern")}
                  label="Concern"
                />
              </FormControl>
              <PrimaryButton text="Book Appointment" />
            </div>
          </Box>
        </Modal>
      </div>
    );
  }
}

export default BookAppointment;
