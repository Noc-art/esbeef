export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <nav className='w-full h-20 bg-yellow-200 flex items-center pl-10'>
        <h1 className='ml-2 font-bold text-2xl'>PERAK</h1>
        <button className='bg-white ml-16'>HOME</button>
        <button className='bg-white ml-16'>BIO</button>
      </nav>
      <h2 className='min-h-screen'>biodata</h2>
    </main>
  )
}
