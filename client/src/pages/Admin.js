import React, { Component } from "react";
import Navbar from "../components/Navbar";
import { DocumentCard } from "@fluentui/react/lib/DocumentCard";
import CustomizedTables from "../components/Table";
import { PrimaryButton } from "@fluentui/react";
import { padding } from "@mui/system";

class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      role: "Appointment's",
      enableAppointmentModal: false
    };
    this.handleRole = this.handleRole.bind(this);
   
  }

  handleRole = (data) => {
    this.setState({
      role: data,
    });
  };

  handleModal = () =>{
    this.setState({
        enableAppointmentModal:!this.state.enableAppointmentModal
    })
  }

  render() {
    return (
      <div>
        <Navbar />
        <div
          style={{
            display: "flex",
            padding: "10px",
            columnGap: "10px",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <DocumentCard
            style={{
              height: "4rem",
              width: "rem",
              background: "#D3D3D3",
              color: "crimson",
              padding: "0.5rem",
            }}
            onClick={() => this.handleRole("Patient's")}
          >
            <h3>PATIENT'S</h3>
          </DocumentCard>
          <DocumentCard
            style={{
              height: "4rem",
              width: "rem",
              background: "#D3D3D3",
              color: "crimson",
              padding: "0.5rem",
            }}
            onClick={() => this.handleRole("Doctor's")}
          >
            <h3>DOCTOR'S</h3>
          </DocumentCard>
          <DocumentCard
            style={{
              height: "4rem",
              width: "rem",
              background: "#D3D3D3",
              color: "crimson",
              padding: "0.5rem",
            }}
            onClick={() => this.handleRole("Appointment's")}
          >
            <h3>APPOINTMENT'S</h3>
          </DocumentCard>
        </div>
        <div
          style={{
            padding: "1rem",
          }}
        >
          <div style={{display:'flex',columnGap:'5px',padding:'1rem'}}>
            <h2 >{this.state.role} List</h2>
            <PrimaryButton style={{marginLeft:'10px',marginTop:'15px'}} text="Add"/>
          </div>
          <CustomizedTables />
        </div>
      </div>
    );
  }
}

export default Admin;
