// routes/scheme.js
const express = require("express");
const { db } = require("../firebase/config");

const router = express.Router();
const collection = db.collection("scheme");

// CREATE: Add a new Scheme
router.post("/", async (req, res) => {
  try {
    const data = req.body;
    const newscheme = await collection.add(data);
    res.status(201).json({ id: newscheme.id });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// READ: Get all scheme
router.get("/", async (req, res) => {
  try {
    const snapshot = await collection.get();
    const scheme = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    res.status(200).json(scheme);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// UPDATE: Update an scheme by ID
router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;
    await collection.doc(id).update(data);
    res.status(200).json({ message: `Scheme ${id} updated` });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// DELETE: Delete an Scheme by ID
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await collection.doc(id).delete();
    res.status(200).json({ message: `Scheme ${id} deleted` });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
