async function sendToBot(message) {
  try {
    const response = await fetch('http://localhost:3000/ask', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ question: message })
    });

    const data = await response.json();
    return data.reply;
  } catch (error) {
    return "Oops! Couldn't reach the fashion assistant.";
  }
}


