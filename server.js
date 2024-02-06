const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const port = 3001;
app.use(cors());
app.use(express.json());

app.post('/send-form-goog', async (req, res) => {
  const sendData = req.body;
  //console.log("Send Data:", sendData);

  try {
    const apiUrl = 'https://script.google.com/macros/s/AKfycbyMgtwbQEDUZfBjehLxs2og1y5ya0_rFTmjDXm6IkZLcKBpTK8HhQky5u97oeRlZQBn/exec';

    // Make an API fetch call
    const response = await axios.post(apiUrl, JSON.stringify(sendData), {
      headers: {
        "Content-Type": "application/json"
      }
    });

    console.log("response:", response.data, "\n--New Submission--");

    // Check if the response is successful (status code 200-299)
    if (response.status >= 200 && response.status < 300) {
      res.json(response.data);
    } else {
      // If the response is not successful, handle the error
      res.status(response.status).json({ error: 'API request failed' });
    }
  } catch (error) {
    // Handle any other errors that may occur during the fetch
    console.error('Error:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
