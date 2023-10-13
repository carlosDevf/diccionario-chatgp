// import Image from 'next/image'
// import { Inter } from 'next/font/google'
// const inter = Inter({ subsets: ['latin'] })
// swr
import { useState } from "react"
import Definition from "../components/Definition"

export default function Home() {  
  const [loading, setLoading] = useState(false)
  const [chat, setChat] = useState(null)

  const getChatCuriosity = async (prompt) => {
    setLoading(true)
    if (chat) setChat(null)
    const res = await fetch('/api/chat-gtp', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ prompt }),
    })    
    
    if (res.status === 200) {
      const data = await res.json()
      console.log("🚀 ~ file: index.jsx:25 ~ getChatCuriosity ~ data:", data)

      try {
        console.log(JSON.parse(data.choices[0].message.content))
        setChat(JSON.parse(data.choices[0].message.content))
        setLoading(false)        
      } catch (error) {
        setChat({
          palabra: "No se encontró la palabra",
        })
      }

    }    
  }

  const handlerSubmit = (e) => {
    e.preventDefault() // evita que se recargue la página
    setChat(null)
    const word = e.target[0].value    
    // getDefinition(word)
    getChatCuriosity(word)
  }

  return (
    <main className="grid w-screen h-screen">
    <div className="flex flex-col items-center">
      <header className='container mx-12 px-4 pl-4 pr-4 mt-14'>
          <h1 className="text-4xl font-bold">
            Buscador de curiosidades
          </h1>
          <form onSubmit={handlerSubmit} className='flex gap-1 bg-red-50 p-2 rounded-sm'>
            <input type="text" placeholder="¿Qué quieres buscar?" className="bg-gray-100 text-gray-500 rounded px-4 py-2 w-full" />
            <button type="submit" className="w-[100px] bg-blue-500 text-white rounded px-4 py-2">Buscar</button>
          </form>
      </header>
      <div className='mt-8'>
        {
          loading ? <p>Cargando...</p> : chat && <Definition def={chat} />
        }
      </div>
    </div>
    </main>
  )
}
