import React, { useState, useEffect } from "react";
import { Box, TextField, Button, Card, CardContent, Typography, InputAdornment } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import BusinessIcon from "@mui/icons-material/Business";
import WorkIcon from "@mui/icons-material/Work";

const ContactForm = ({ contact, onSave, onClose }) => {
    const [formData, setFormData] = useState({
        first_name: "",
        last_name: "",
        email: "",
        phone: "",
        company: "",
        job_title: "",
    });

    useEffect(() => {
        if (contact) {
            setFormData(contact);
        }
    }, [contact]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave(formData);
    };

    return (
        <Card
            sx={{
                maxWidth: 600,
                mx: "auto",
                mt: 4,
                boxShadow: 4,
                borderRadius: 5,
                backgroundColor: "#ffffff",
            }}
        >
            <CardContent>
                <Typography
                    variant="h5"
                    align="center"
                    gutterBottom
                    sx={{
                        fontWeight: 'bold',
                        color: '#2c6975',
                        borderRadius: 5
                    }}
                >
                    {contact ? 'Edit Contact' : 'Add Contact'}
                    <Box
                        sx={{
                            width: '50px',
                            height: '2px',
                            backgroundColor: '#68b5a0',
                            margin: 'auto',
                            mt: 1,
                            borderRadius: 5
                        }}
                    />
                </Typography>
                <Box
                    component="form"
                    onSubmit={handleSubmit}
                    sx={{
                        "& .MuiTextField-root": { mb: 2 },
                        "& .MuiButton-root": { textTransform: "none" },
                        borderRadius: 5,

                    }}
                >
                    <TextField
                        label="First Name"
                        name="first_name"
                        value={formData.first_name}
                        onChange={handleChange}
                        fullWidth
                        required
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <PersonIcon />
                                </InputAdornment>
                            ),
                        }}
                        sx={{
                            '& .MuiOutlinedInput-root': {
                                '& fieldset': {
                                    borderColor: '#2c6975',

                                },
                                '&:hover fieldset': {
                                    borderColor: '#68b5a0',
                                },
                                borderRadius: 5,
                            }
                        }}
                    />
                    <TextField
                        label="Last Name"
                        name="last_name"
                        value={formData.last_name}
                        onChange={handleChange}
                        fullWidth
                        required
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <PersonIcon />
                                </InputAdornment>
                            ),
                        }}
                        sx={{
                            '& .MuiOutlinedInput-root': {
                                '& fieldset': {
                                    borderColor: '#2c6975',

                                },
                                '&:hover fieldset': {
                                    borderColor: '#68b5a0',
                                },
                                borderRadius: 5,
                            }
                        }}
                    />
                    <TextField
                        label="Phone Number"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        fullWidth
                        required
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <PhoneIcon />
                                </InputAdornment>
                            ),
                        }}
                        sx={{
                            '& .MuiOutlinedInput-root': {
                                '& fieldset': {
                                    borderColor: '#2c6975',

                                },
                                '&:hover fieldset': {
                                    borderColor: '#68b5a0',
                                },
                                borderRadius: 5,
                            }
                        }}
                    />
                    <TextField
                        label="Email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        fullWidth
                        required
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <EmailIcon />
                                </InputAdornment>
                            ),
                        }}
                        sx={{
                            '& .MuiOutlinedInput-root': {
                                '& fieldset': {
                                    borderColor: '#2c6975',

                                },
                                '&:hover fieldset': {
                                    borderColor: '#68b5a0',
                                },
                                borderRadius: 5,
                            }
                        }}
                    />
                    <TextField
                        label="Company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        fullWidth
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <BusinessIcon />
                                </InputAdornment>
                            ),
                        }}
                        sx={{
                            '& .MuiOutlinedInput-root': {
                                '& fieldset': {
                                    borderColor: '#2c6975',

                                },
                                '&:hover fieldset': {
                                    borderColor: '#68b5a0',
                                },
                                borderRadius: 5,
                            }
                        }}
                    />
                    <TextField
                        label="Job Title"
                        name="job_title"
                        value={formData.job_title}
                        onChange={handleChange}
                        fullWidth
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <WorkIcon />
                                </InputAdornment>
                            ),
                        }}
                        sx={{
                            '& .MuiOutlinedInput-root': {
                                '& fieldset': {
                                    borderColor: '#2c6975',

                                },
                                '&:hover fieldset': {
                                    borderColor: '#68b5a0',
                                },
                                borderRadius: 5,
                            }
                        }}
                    />
                    <Box mt={3} display="flex" justifyContent="space-between">
                        <Button
                            type="submit"
                            variant="contained"
                            sx={{
                                backgroundColor: '#68b5a0',
                                '&:hover': { backgroundColor: '#2c6975' },
                                borderRadius: 5
                            }}
                        >
                            Done
                        </Button>
                        <Button
                            variant="outlined"
                            onClick={onClose}
                            sx={{
                                borderColor: '#2c6975',
                                color: '#2c6975',
                                '&:hover': {
                                    backgroundColor: '#cde0c9',

                                },
                                borderRadius: 5
                            }}
                        >
                            Cancel
                        </Button>
                    </Box>
                </Box>
            </CardContent>
        </Card>
    );
};

export default ContactForm;