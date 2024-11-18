import React, { useState, useEffect } from "react";
import { TextField, TablePagination, Container, Typography, Button, Box } from "@mui/material";
import ContactForm from "./components/ContactForm";
import ContactsTable from "./components/ContactsTable";
import axios from "axios";

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [selectedContact, setSelectedContact] = useState(null);
  const [formOpen, setFormOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [totalContacts, setTotalContacts] = useState(0);

  const fetchContacts = async () => {
    try {
      const response = await axios.get("http://localhost:3001/contacts", {
        params: {
          page,
          limit: rowsPerPage,
          search: searchQuery,
        },
      });
      setContacts(response.data.data);
      setTotalContacts(response.data.total);
    } catch (error) {
      console.error("Error fetching contacts:", error);
    }
  };

  const handlePageChange = (event, newPage) => {
    setPage(newPage + 1);
    fetchContacts();
  };

  const handleRowsPerPageChange = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(1);
    fetchContacts();
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    fetchContacts();
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  const handleAddContact = async (contact) => {
    try {
      const response = await axios.post("http://localhost:3001/contacts", contact);
      setContacts([...contacts, response.data]);
    } catch (error) {
      console.error("Error adding contact:", error);
    }
  };

  const handleEditContact = async (updatedContact) => {
    try {
      const response = await axios.put(
        `http://localhost:3001/contacts/${updatedContact.id}`,
        updatedContact
      );
      setContacts(
        contacts.map((contact) =>
          contact.id === updatedContact.id ? response.data : contact
        )
      );
      setSelectedContact(null);
      setFormOpen(false);
    } catch (error) {
      console.error("Error editing contact:", error);
    }
  };

  const handleDeleteContact = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/contacts/${id}`);
      setContacts(contacts.filter((contact) => contact.id !== id));
    } catch (error) {
      console.error("Error deleting contact:", error);
    }
  };

  return (
    <Container sx={{ backgroundColor: '#e0ecde', borderRadius: 5, padding: 2 }}>
      <Typography
        variant="h2"
        align="center"
        sx={{
          fontWeight: 'bold',
          color: '#2c6975',
          backgroundColor: '#cde0c9',
          padding: 2,
          borderRadius: 5
        }}
        gutterBottom
      >
        Contact Management
      </Typography>
      <Box mb={2}>
        <Button
          variant="contained"
          onClick={() => setFormOpen(true)}
          sx={{
            backgroundColor: '#68b5a0',
            '&:hover': { backgroundColor: '#2c6975' },
            borderRadius: 5
          }}
        >
          Add Contact
        </Button>
      </Box>
      <Box mb={2}>
        <TextField
          label="Search Contacts"
          variant="outlined"
          value={searchQuery}
          onChange={handleSearch}
          fullWidth
          sx={{
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: '#2c6975',
              },
              '&:hover fieldset': {
                borderColor: '#68b5a0',
              },
              borderRadius: 5
            }
          }}
        />
      </Box>

      <ContactsTable
        contacts={contacts}
        onEdit={(contact) => {
          setSelectedContact(contact);
          setFormOpen(true);
        }}
        onDelete={handleDeleteContact}
      />
      <TablePagination
        component="div"
        count={totalContacts}
        page={page - 1}
        onPageChange={handlePageChange}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleRowsPerPageChange}
        sx={{
          backgroundColor: '#cde0c9',
          color: '#2c6975',
          borderRadius: 5,
          marginTop: 2

        }}
      />

      {formOpen && (
        <ContactForm
          contact={selectedContact}
          onSave={(contact) =>
            selectedContact ? handleEditContact(contact) : handleAddContact(contact)
          }
          onClose={() => {
            setFormOpen(false);
            setSelectedContact(null);
          }}
        />
      )}
    </Container>
  );
};

export default App;