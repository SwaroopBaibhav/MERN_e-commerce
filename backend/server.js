const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

// Import the Message model
const Message = require('./models/Message');

const app = express();

// Enable CORS for specific origin
app.use(cors({
  origin: 'http://localhost:5173', // Allow requests from this origin
  methods: ['GET', 'POST', 'DELETE'], // Allow only specific HTTP methods
  credentials: true, // Allow cookies and credentials (if needed)
}));

app.use(express.json()); // Parse JSON request bodies

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URL)
  .then(() => console.log('Connected to DB !!!'))
  .catch((err) => console.error('DB connection error:', err));

// Route to save a new message
app.post('/api/hello', async (req, res) => {
  const { text } = req.body; // Destructure the text field from the request body

  // Validate input
  if (!text) {
    return res.status(400).json({ error: 'Message is required' });
  }

  try {
    // Create and save a new message
    const newMessage = new Message({ text });
    await newMessage.save();

    // Return the saved message
    res.status(201).json(newMessage);
  } catch (error) {
    console.error('Error saving message:', error); // Log the error for debugging
    res.status(500).json({ error: 'Failed to save message !!!' });
  }
});

// Route to fetch all messages
app.get('/api/message', async (req, res) => {
  try {
    const messages = await Message.find();
    res.json(messages);
  } catch (error) {
    console.error('Error fetching messages:', error); // Log the error for debugging
    res.status(500).json({ error: 'Failed to fetch messages !!!' });
  }
});

// Route to delete a todo
app.delete('/api/message/:id', async(req, res) => {
    const { id } = req.params;
    try {
        const deletedMessage = await Message.findByIdAndDelete(id);
        if (!deletedMessage){
            return res.status(404).json({error: 'not found !!!'})
        }
        res.json({message: 'message deleted successfully !!!'})
        
    } catch (error) {
        console.log("deletion error :", error);
        
        res.status(500).json({error: 'failed to delete message !!!'})
    }
})


// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log('Listening at port:', PORT);
});