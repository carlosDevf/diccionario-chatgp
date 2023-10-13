const API = process.env.DICCIONARY_API
export default async function handler(req, res) {
  // PUT, GET, POST, UPDAT, DELETE

  if (req.method === 'DELETE') {
    return res.status(404).json({ error: 'Method no allowed'})
  }

  if (req.method === 'POST') {
    const { word } = req.body
    console.log("🚀 ~ file: diccionary.js:11 ~ handler ~ word:", word)

    await fetch(`${API}/${word}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },      
    })
    .then(response => response.json())
    .then(data => {      
      return res.status(200).json(data)
    })
  }

  if (req.method === 'GET') {
    res.status(200).json({ text: 'Hello' })
  }

  try {

  } catch(err) {
    console.log(err)
    return res.status(500).json({ error: err.message })
  }

}