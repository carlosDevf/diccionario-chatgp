const BEARER_TOKEN = process.env.BEARER_TOKEN
const API_OPENAI = process.env.API_OPENAI

export default async function handler(req, res) {

  if (req.method === 'POST') {
    const { prompt } = req.body
    const content = `      
      Eres una api de diccionario, quiero que me enseñes todos los datos curisos que sepas de la palabra que te voy a dar.
      Si es una historia mucho mejor, pero si no, no importa, solo quiero que me enseñes datos curiosos, la palabra es: ${prompt}
      las respuesta que es espero es un json uno que tenga la palabra, otra propiedad con la definicion y otra propiedad con los datos curiosos
      La respuesta siempre debe ser un json, si no tienes datos curiosos regrea un json con la palabra y la definicion
    `  
    await fetch(`${API_OPENAI}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${BEARER_TOKEN}`
      },      
      body: JSON.stringify({
        "model": "gpt-3.5-turbo",
        "messages": [
            {
                "role": "user",
                "content": content
            }
        ],
        "temperature": 0.7
      })
    })
    .then(response => response.json())
    .then(data => {      
      return res.status(200).json(data)
    })
  }

  res.status(500).json({ error: 'Method no allowed'})
}