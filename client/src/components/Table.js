import React, { Component } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { DefaultButton } from "@fluentui/react";
import BookAppointment from "./BookAppointment";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(ID, Firstname, Lastname, Email, Contact, Address) {
  return { ID, Firstname, Lastname, Email, Contact, Address };
}

const rows = [
  createData(
    1,
    "Hariprasad",
    "Srinivas",
    "hari@gmail.com",
    "1234567890",
    "canada"
  ),
  createData(
    2,
    "Hariprasad",
    "Srinivas",
    "hari@gmail.com",
    "1234567890",
    "canada"
  ),
  createData(
    3,
    "Hariprasad",
    "Srinivas",
    "hari@gmail.com",
    "1234567890",
    "canada"
  ),
  createData(
    4,
    "Hariprasad",
    "Srinivas",
    "hari@gmail.com",
    "1234567890",
    "canada"
  ),
  createData(
    5,
    "Hariprasad",
    "Srinivas",
    "hari@gmail.com",
    "1234567890",
    "canada"
  ),
  createData(
    6,
    "Hariprasad",
    "Srinivas",
    "hari@gmail.com",
    "1234567890",
    "canada"
  ),
  createData(
    7,
    "Hariprasad",
    "Srinivas",
    "hari@gmail.com",
    "1234567890",
    "canada"
  ),
  createData(
    8,
    "Hariprasad",
    "Srinivas",
    "hari@gmail.com",
    "1234567890",
    "canada"
  ),
  createData(
    9,
    "Hariprasad",
    "Srinivas",
    "hari@gmail.com",
    "1234567890",
    "canada"
  ),
  createData(
    10,
    "Hariprasad",
    "Srinivas",
    "hari@gmail.com",
    "1234567890",
    "canada"
  ),
  createData(
    11,
    "Hariprasad",
    "Srinivas",
    "hari@gmail.com",
    "1234567890",
    "canada"
  ),
  createData(
    12,
    "Hariprasad",
    "Srinivas",
    "hari@gmail.com",
    "1234567890",
    "canada"
  ),
  createData(
    13,
    "Hariprasad",
    "Srinivas",
    "hari@gmail.com",
    "1234567890",
    "canada"
  ),
  createData(
    4,
    "Hariprasad",
    "Srinivas",
    "hari@gmail.com",
    "1234567890",
    "canada"
  ),
  createData(
    15,
    "Hariprasad",
    "Srinivas",
    "hari@gmail.com",
    "1234567890",
    "canada"
  ),
  createData(
    16,
    "Hariprasad",
    "Srinivas",
    "hari@gmail.com",
    "1234567890",
    "canada"
  ),
  createData(
    17,
    "Hariprasad",
    "Srinivas",
    "hari@gmail.com",
    "1234567890",
    "canada"
  ),
  createData(
    18,
    "Hariprasad",
    "Srinivas",
    "hari@gmail.com",
    "1234567890",
    "canada"
  ),
  createData(
    19,
    "Hariprasad",
    "Srinivas",
    "hari@gmail.com",
    "1234567890",
    "canada"
  ),
  createData(
    20,
    "Hariprasad",
    "Srinivas",
    "hari@gmail.com",
    "1234567890",
    "canada"
  ),
  createData(
    21,
    "Hariprasad",
    "Srinivas",
    "hari@gmail.com",
    "1234567890",
    "canada"
  ),
  createData(
    22,
    "Hariprasad",
    "Srinivas",
    "hari@gmail.com",
    "1234567890",
    "canada"
  ),
  createData(
    23,
    "Hariprasad",
    "Srinivas",
    "hari@gmail.com",
    "1234567890",
    "canada"
  ),
  createData(
    24,
    "Hariprasad",
    "Srinivas",
    "hari@gmail.com",
    "1234567890",
    "canada"
  ),
  createData(
    25,
    "Hariprasad",
    "Srinivas",
    "hari@gmail.com",
    "1234567890",
    "canada"
  ),
  createData(
    26,
    "Hariprasad",
    "Srinivas",
    "hari@gmail.com",
    "1234567890",
    "canada"
  ),
  createData(
    27,
    "Hariprasad",
    "Srinivas",
    "hari@gmail.com",
    "1234567890",
    "canada"
  ),
];

class CustomizedTables extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openBookAppointmentModal: false,
    };
    this.handleModal = this.handleModal.bind(this);
  }

  handleModal = () => {
    this.setState({
      openBookAppointmentModal: !this.state.openBookAppointmentModal,
    });
  };

  render() {
    return (
      <div>
        {this.state.openBookAppointmentModal ? <BookAppointment closeModal={this.handleModal} modal={this.state.openBookAppointmentModal} /> : ""}
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>ID</StyledTableCell>
                <StyledTableCell align="right">First Name</StyledTableCell>
                <StyledTableCell align="right">Last Name</StyledTableCell>
                <StyledTableCell align="right">Email</StyledTableCell>
                <StyledTableCell align="right">Contact</StyledTableCell>
                <StyledTableCell align="right">Address</StyledTableCell>
                <StyledTableCell align="center">Actions</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <StyledTableRow key={row.ID}>
                  <StyledTableCell>{row.ID}</StyledTableCell>
                  <StyledTableCell align="right">
                    {row.Firstname}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {row.Lastname}
                  </StyledTableCell>
                  <StyledTableCell align="right">{row.Email}</StyledTableCell>
                  <StyledTableCell align="right">{row.Contact}</StyledTableCell>
                  <StyledTableCell align="right">{row.Address}</StyledTableCell>
                  <StyledTableCell
                    style={{
                      display: "flex",
                      columnGap: "5px",
                      alignItems: "center",
                      justifyContent: "right",
                    }}
                  >
                    <DefaultButton text="View/Edit" />
                    <DefaultButton text="Delete" />
                    <DefaultButton text="Book Appointment" onClick={this.handleModal} />
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    );
  }
}

export default CustomizedTables;
