/* eslint-disable @next/next/no-img-element */
// const def = {
//   "palabra": "Día de Muertos en Pátzcuaro",
//   "definicion": "El Día de Muertos en Pátzcuaro es una festividad tradicional mexicana que se celebra en la ciudad de Pátzcuaro, en el estado de Michoacán. Es una de las celebraciones más importantes y coloridas de México, en la cual se honra a los difuntos y se celebra la vida de quienes ya no están con nosotros.",
//   "datos_curiosos": [
//       "Pátzcuaro es conocida por ser uno de los lugares más representativos para celebrar el Día de Muertos en México. Las calles se llenan de color y vida con altares, ofrendas, música, danzas y procesiones.",
//       "La tradición del Día de Muertos en Pátzcuaro se remonta a la época prehispánica, cuando los antiguos mexicanos creían en la existencia de un inframundo al que iban las almas después de la muerte. Esta creencia se fusionó con las tradiciones católicas después de la llegada de los españoles.",
//       "Uno de los elementos más característicos del Día de Muertos en Pátzcuaro son las velas. Se cree que su luz guía a las almas de los difuntos de regreso a sus hogares. Durante la noche, las calles se iluminan con miles de velas que crean un ambiente mágico y misterioso.",
//       "En Pátzcuaro se acostumbra visitar los cementerios para limpiar y decorar las tumbas de los seres queridos fallecidos. Las familias pasan la noche en el cementerio, compartiendo comida, bebidas y anécdotas sobre los difuntos.",
//       "Durante el Día de Muertos en Pátzcuaro, se elaboran altares y ofrendas en honor a los difuntos. Estos altares están llenos de elementos simbólicos, como fotografías de los seres queridos, flores de cempasúchil, comida, bebidas y objetos que eran importantes para ellos en vida.",
//       "Una de las tradiciones más populares en Pátzcuaro durante el Día de Muertos es la Noche de los Muertos. Durante esta noche, se lleva a cabo una procesión por las calles del centro de la ciudad, en la cual los participantes se visten de catrinas y catrines, personajes emblemáticos de la festividad.",
//       "El Día de Muertos en Pátzcuaro ha sido reconocido como Patrimonio Cultural Inmaterial de la Humanidad por la UNESCO, debido a su importancia cultural y su relevancia en la preservación de las tradiciones mexicanas.",
//       "Durante el Día de Muertos en Pátzcuaro, también se realizan diversas actividades culturales, como conciertos, exposiciones de arte, danzas tradicionales y representaciones teatrales.",
//       "La gastronomía juega un papel importante en el Día de Muertos en Pátzcuaro. Se preparan platillos tradicionales como tamales, atole, mole, calaveritas de azúcar y pan de muerto, el cual es un pan dulce decorado con formas de huesos y calaveras.",
//       "El Día de Muertos en Pátzcuaro es una celebración llena de alegría y respeto hacia los difuntos. Se considera como un momento de encuentro y comunión entre vivos y muertos, en el cual se celebra la vida y se honra la memoria de quienes ya no están con nosotros."
//   ]
// }

export default function Definition({ def }) {
  return (
    <div className="container mx-12 px-4">
      <h1 className="w-full text-center text-6xl font-bold text-gray-900 dark:text-white">
        {def.palabra}
      </h1>
      <div className="grid grid-cols-2">
        <div>
          <div className="m-4">
            <h2 className="text-3xl">
              Definicion:
            </h2>
            <p>{def.definicion}</p>
          </div>
          <div className="mx-4">
            <h3 className="text-3xl">Datos Curiosos</h3>
            <div>
              <ul className="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
                {
                  Array.isArray(def.datos_curiosos) &&
                  def.datos_curiosos
                  .map((d, i) => (              
                    <li key={i}>{d}</li>
                  ))
                }
              </ul>
            </div>
          </div>
        </div>
      <div className="grid place-content-center">
        <img
        className="rounded px-12"
        src="https://imgs.search.brave.com/mlOs3gBCfJheoXaNRuQeRcgIxQaJePMjUF7OJq-Wor8/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/Y29vbHQuY29tL3Vw/bG9hZHMvczEvNjIv/MzcvMC9lbC1jdWFy/dGV0by1kZS1ub3Mt/NS5qcGVn" alt="imagen"/>
      </div>
      </div>
    </div>
  )
}