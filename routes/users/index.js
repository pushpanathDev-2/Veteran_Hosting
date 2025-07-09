// routes/users/index.js
const express = require('express');
const { db } = require('../../firebase/config');

const router = express.Router();
const collection = db.collection('users');

router.get("/", async (req, res) => {
  const snapshot = await user.get();
  const allUsers = [];
  snapshot.forEach(doc => {
    allUsers.push({ id: doc.id, ...doc.data() });
  });
  res.status(200).json(allUsers);
});


// READ: Get all users
router.get('/', async (req, res) => {
    try {
        const snapshot = await collection.get();
        const users = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// UPDATE: Update a user by ID
router.put('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const data = req.body;
        await collection.doc(id).update(data);
        res.status(200).json({ message: 'User updated successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// DELETE: Delete a user by ID
router.delete('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        await collection.doc(id).delete();
        res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;