import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [messages, setMessages] = useState([]); // State to store messages
  const [input, setInput] = useState(''); // State to store the input value

  // Fetch messages from the backend when the component mounts
  useEffect(() => {
    fetch('http://localhost:5000/api/message')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => setMessages(data)) // Update the messages state
      .catch((error) => console.error('Error fetching messages:', error)); // Log errors
  }, []);

  // Function to add a new message
  const addTodo = async () => {
    if (!input.trim()) {
      alert('No blank entries allowed!'); // Validate input
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/api/hello', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text: input }), // Send the input text to the backend
      });

      if (!response.ok) {
        const errorData = await response.json(); // Parse the error response
        console.error('Failed to add todo:', errorData);
        throw new Error('Failed to add todo');
      }

      const newMessage = await response.json(); // Parse the response
      setMessages([newMessage, ...messages]); // Update the messages state
      setInput(''); // Clear the input field
    } catch (error) {
      console.error('Error adding todo:', error); // Log errors
    }
  };

  const deleteTodo = async(id) => {
    try {
      const res = await fetch(`http://localhost:5000/api/message/${id}`, {
        method: 'DELETE',
      });

      if (!res.ok){
        const errorData = await res.json();
        console.error(errorData);
      }

      setMessages(messages.filter((e) => e._id != id));
    } catch (error) {
      console.log("Failed to delete TODO:", error);
    }

  }

  return (
    <div>
      <h1>MERN Stack Application</h1>
      <label>Enter the todo:</label>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)} // Update the input state
        required // Ensure the input is not empty
      />
      <button onClick={addTodo}>Add</button> {/* Trigger addTodo on click */}

      {/* Display the list of messages */}
      <div>
        {messages.map((message) => (
          <div style={{display: "flex"}} key={message._id}>
            {/* // Use message._id as the key */}
            <p>{message.text}</p>
            <button onClick={() => deleteTodo(message._id)}>X</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;