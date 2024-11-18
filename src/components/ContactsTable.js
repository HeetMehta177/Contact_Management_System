import React from "react";
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Button,
    Paper,
} from "@mui/material";

const ContactsTable = ({ contacts, onEdit, onDelete }) => {
    return (
        <TableContainer
            component={Paper}
            sx={{
                boxShadow: 2,
                borderRadius: 5,
                margin: "auto",
                mt: 4,
                backgroundColor: "#ffffff",
            }}
        >
            <Table>
                <TableHead>
                    <TableRow
                        sx={{
                            backgroundColor: "#68b5a0",
                            borderRadius: 5
                        }}
                    >
                        {["First Name", "Last Name", "Email", "Phone", "Company", "Job Title", "Actions"].map((header) => (
                            <TableCell
                                key={header}
                                sx={{
                                    fontWeight: "bold",
                                    color: '#2c6975',
                                }}
                            >
                                {header}
                            </TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {contacts.map((contact, index) => (
                        <TableRow
                            key={contact.id}
                            sx={{
                                backgroundColor: index % 2 === 0 ? "#e0ecde" : "#ffffff",
                                "&:hover": {
                                    backgroundColor: "#cde0c9",
                                },
                                borderRadius: 5

                            }}
                        >
                            <TableCell>{contact.first_name}</TableCell>
                            <TableCell>{contact.last_name}</TableCell>
                            <TableCell>{contact.email}</TableCell>
                            <TableCell>{contact.phone}</TableCell>
                            <TableCell>{contact.company}</TableCell>
                            <TableCell>{contact.job_title}</TableCell>
                            <TableCell>
                                <Button
                                    onClick={() => onEdit(contact)}
                                    variant="outlined"
                                    size="small"
                                    sx={{
                                        borderColor: "#2c6975",
                                        color: "#2c6975",
                                        mr: 1,
                                        "&:hover": {
                                            backgroundColor: "#cde0c9",
                                        },
                                        borderRadius: 5
                                    }}
                                >
                                    Edit
                                </Button>
                                <Button
                                    onClick={() => onDelete(contact.id)}
                                    variant="contained"
                                    size="small"
                                    sx={{
                                        backgroundColor: "#2c6975",
                                        color: "#ffffff",
                                        "&:hover": {
                                            backgroundColor: "#68b5a0",
                                        },
                                        borderRadius: 5

                                    }}
                                >
                                    Delete
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default ContactsTable;