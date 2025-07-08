// routes/items.js
const express = require('express');
const { db } = require('../firebase/config');

const router = express.Router();
const collection = db.collection('items');

// CREATE: Add a new item
router.post('/', async (req, res) => {
  try {
    const data = req.body;
    const newItem = await collection.add(data);
    res.status(201).json({ id: newItem.id });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// READ: Get all items
router.get('/', async (req, res) => {
  try {
    const snapshot = await collection.get();
    const items = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    res.status(200).json(items);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// UPDATE: Update an item by ID
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;
    await collection.doc(id).update(data);
    res.status(200).json({ message: `Item ${id} updated` });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// DELETE: Delete an item by ID
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await collection.doc(id).delete();
    res.status(200).json({ message: `Item ${id} deleted` });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;