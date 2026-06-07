import { useState } from 'react'

const initialPanels = [
  {
    src: 'https://content.presspage.com/uploads/2223/1f77a1bc-c7bb-49dc-ae80-e76420eb661d/1920_stockphoto-solarfarmtamworth.jpg?10000',
    name: 'SunRay Solar',
    description: 'Clean energy powered by the sun.',
  },
  {
    src: 'https://alpexsolar.com/resources/wp-content/uploads/2024/09/Untitleddesign-2024-09-05T184343.91.jpeg',
    name: 'EcoVolt Panels',
    description: 'Reliable solar performance every day.',
  },
  {
    src: 'https://gb.solar/wp-content/uploads/2024/12/Harnessing-the-Sun_-How-Solar-Energy-is-Revolutionizing-Sustainable-Living.jpg',
    name: 'GoldenGrid Energy',
    description: 'Bright solutions for a greener future.',
  },
  {
    src: 'https://t4.ftcdn.net/jpg/02/12/78/05/360_F_212780575_jCx2m2E7XMr1xUmaMMnb3hbVMqApo2PO.jpg',
    name: 'PureShine Solar',
    description: 'Keeping solar panels efficient and spotless.',
  },
]

function Solar() {
  const [showContacts, setShowContacts] = useState(false)
  const [panels, setPanels] = useState(initialPanels)
  const [photoUrl, setPhotoUrl] = useState('')
  const [panelName, setPanelName] = useState('')
  const [panelText, setPanelText] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()

    if (!photoUrl.trim() || !panelName.trim() || !panelText.trim()) {
      return
    }

    setPanels((current) => [
      {
        src: photoUrl,
        name: panelName,
        description: panelText,
      },
      ...current,
    ])

    setPhotoUrl('')
    setPanelName('')
    setPanelText('')
  }

  return (
    <section className="space-y-10">
      <div className="rounded-[32px] border border-yellow-500/20 bg-slate-950/90 p-8 shadow-2xl shadow-yellow-500/10">
        <p className="text-sm uppercase tracking-[0.3em] text-yellow-300">Solar panel overview</p>
        <h1 className="mt-3 text-4xl font-bold text-white sm:text-5xl">
          Built for power, built for warmth
        </h1>
        <p className="mt-4 max-w-3xl text-slate-300">
          Company Solar panels are engineered to deliver strong energy performance with a yellow-inspired palette and a design that closes the cool blue tones in favor of rich, warm solar warmth.
        </p>
      </div>

      


        

      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {panels.map((panel) => (
          <div key={`${panel.src}-${panel.name}`} className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/80 shadow-xl shadow-yellow-500/5">
            <img
              src={panel.src}
              alt={panel.name}
              loading="lazy"
              className="h-56 w-full object-cover transition duration-700 hover:scale-105"
            />
            <div className="space-y-2 p-5">
              <p className="text-sm font-semibold text-yellow-300">{panel.name}</p>
              <p className="text-sm text-slate-400">{panel.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="rounded-[32px] border border-yellow-500/20 bg-slate-950/90 p-8 shadow-2xl shadow-yellow-500/10">
        <h2 className="text-2xl font-semibold text-white">About solar panel strength</h2>
        <p className="mt-4 text-slate-300">
        Solar panels are designed to provide strong and reliable energy performance in different weather conditions.
        They are built with durable materials that can resist rain, wind, heat, and long-term sunlight exposure. High-
        quality panels maintain efficiency for many years while reducing energy costs and supporting clean energy
        solutions. Their advanced technology helps capture maximum sunlight for better power generation. Regular
        maintenance keeps the panels operating at peak performance and extends their lifespan. Solar energy is a
        smart and sustainable choice for a greener and brighter future.
        </p>
      </div>

      <div className="space-y-6 rounded-[32px] border border-yellow-500/20 bg-slate-950/90 p-8 shadow-2xl shadow-yellow-500/10">
        <button
          onClick={() => setShowContacts(true)}
          className="rounded-full bg-yellow-400 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-yellow-500/20 transition hover:bg-yellow-300"
        >
          Show contact info
        </button>

        {showContacts && (
          <div className="space-y-6 rounded-3xl border border-slate-800 bg-slate-900/90 p-6">
            <div className="space-y-3 text-slate-200">
              <p><span className="font-semibold text-yellow-300">Name:</span> Triumf</p>
              <p><span className="font-semibold text-yellow-300">Surname:</span> Zylfiu</p>
              <p><span className="font-semibold text-yellow-300">Email:</span> zylfiutriumf@gmail.com</p>
              <p><span className="font-semibold text-yellow-300">Number:</span> +381 62 235 502</p>
              <p><span className="font-semibold text-yellow-300">Address:</span> 123 Solar Terrnava , Presevo City</p>
            </div>
            <button
              onClick={() => setShowContacts(false)}
              className="rounded-full bg-slate-800 px-6 py-3 text-sm font-semibold text-yellow-300 transition hover:bg-slate-700"
            >
              Hide contact
            </button>
          </div>
        )}
      </div>
    </section>
  )
}

export default Solar

