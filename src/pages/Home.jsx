import { Link } from 'react-router-dom'
import StatCard from '../components/StatCard.jsx'

function Home() {
  return (
    <section className="space-y-10">
      <div className="rounded-[32px] border border-yellow-500/20 bg-slate-950/90 p-8 shadow-2xl shadow-yellow-500/10">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.3em] text-yellow-300">About</p>
            <h1 className="mt-3 text-4xl font-bold text-white sm:text-5xl">
              Company Solar: strong, reliable energy every day
            </h1>
            <p className="mt-5 text-slate-300">
              Solar energy is clean, efficient and ready to power your future. Our systems are built to deliver reliable output, while keeping the design bright, warm and focused on yellow.
So far all our customers are very satisfied.
Welcome to our powerful Company.
            </p>
          </div>
         
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <StatCard
          label="The reliability."
          value="100%"
          sub="Reliability means being trustworthy and responsible in everything we do. It helps people build trust, work better together, and succeed in life."
        />
        <StatCard
          label="Customer satisfaction."
          value="99%"
          sub="Customer satisfaction is very important for every business because happy customers are more likely to return and recommend the company to others. Good service, quality products, and understanding customer needs help increase customer satisfaction."
        />
        <StatCard
          label="PERFORMANCE EFFICIENCY."
          value="98%"
          sub="Performance efficiency shows how effectively solar panels convert sunlight into clean energy. High-efficiency panels produce more power while using less space, making them a smart and cost-effective solution for homes and businesses."
        />
        <StatCard
          label="ECO FRIENDLY ENERGY."
          value="100%"
          sub="Solar energy is one of the cleanest renewable energy sources available today. It helps reduce pollution, lower carbon emissions, and protect the environment while providing sustainable power for future generations."
        />
      </div>

      <div className="rounded-[32px] border border-yellow-500/20 bg-slate-950/90 p-8 shadow-2xl shadow-yellow-500/10">
        <h2 className="text-2xl font-semibold text-white">Customers trust us</h2>
        <p className="mt-4 text-slate-300">
          Our clients choose Company Solar because we deliver quality, safety, and clean energy with 100% trust. The yellow-ready design and dependable output make every install feel secure.
        </p>
        <button className="mt-6 rounded-full bg-slate-800 px-6 py-3 text-sm font-semibold text-yellow-300 transition hover:bg-slate-700">
          100% Trusted by customers
        </button>
      </div>
    </section>
  )
}

export default Home

