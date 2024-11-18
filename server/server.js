const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { Pool } = require("pg");
require('dotenv').config();

const pool = new Pool({
    user: process.env.DB_USER,
    host: "localhost",
    database: "contact_management",
    password: process.env.DB_PASSWORD,
    port: 5432,
});

const app = express();
app.use(cors());
app.use(bodyParser.json());


// read
app.get("/contacts", async (req, res) => {
    const page = req.query.page || 1;
    const limit = req.query.limit || 10;
    const search = req.query.search;
    const offset = (page - 1) * limit;

    let query = "SELECT * FROM contacts";
    const values = [];

    if (search) {
        query += " WHERE first_name ILIKE $1 OR last_name ILIKE $1 OR email ILIKE $1 OR phone ILIKE $1 OR company ILIKE $1 OR job_title ILIKE $1";
        values.push(`%${search}%`);
    }

    query += " ORDER BY id ASC LIMIT $2 OFFSET $3";
    values.push(limit, offset);

    try {
        const result = await pool.query(query, values);

        const countResult = await pool.query("SELECT COUNT(*) FROM contacts");
        const total = parseInt(countResult.rows[0].count);

        res.json({
            data: result.rows,
            total: total,
            page: parseInt(page),
            limit: parseInt(limit),
        });
    } catch (err) {
        console.error("Error fetching contacts:", err);
        res.status(500).json({ error: "Failed to fetch contacts" });
    }
});


// create
app.post("/contacts", async (req, res) => {
    const { first_name, last_name, email, phone, company, job_title } = req.body;

    if (!first_name || !last_name || !email) {
        return res.status(400).json({ error: "First name, last name, and email are required." });
    }

    try {
        const result = await pool.query(
            "INSERT INTO contacts (first_name, last_name, email, phone, company, job_title) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
            [first_name, last_name, email, phone, company, job_title]
        );
        res.status(201).json(result.rows[0]);
    } catch (err) {
        console.error("Database error:", err);
        res.status(500).json({ error: "Failed to add contact" });
    }
});



//edit
app.put("/contacts/:id", async (req, res) => {
    const { id } = req.params;
    const { first_name, last_name, email, phone, company, job_title } = req.body;

    try {
        const result = await pool.query(
            "UPDATE contacts SET first_name = $1, last_name = $2, email = $3, phone = $4, company = $5, job_title = $6 WHERE id = $7 RETURNING *",
            [first_name, last_name, email, phone, company, job_title, id]
        );
        res.json(result.rows[0]);
    } catch (err) {
        res.status(400).json({ error: "Failed to update contact" });
    }
});

// delete
app.delete("/contacts/:id", async (req, res) => {
    const { id } = req.params;

    try {
        await pool.query("DELETE FROM contacts WHERE id = $1", [id]);
        res.status(204).send();
    } catch (err) {
        res.status(400).json({ error: "Failed to delete contact" });
    }
});

app.listen(3001, () => console.log("Server running on http://localhost:3001"));
