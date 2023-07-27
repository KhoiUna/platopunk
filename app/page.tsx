import Image from 'next/image'

export default function page() {
  return (
    <main className='min-h-screen bg-slate-50 p-8'>
      <h1 className='text-center text-xl'>PlatoPunk</h1>
      <h2 className='text-center text-lg font-light mt-1'>A place to talk ideas for building a utopian future</h2>

      <div className='pt-20'>
        <Image className='w-[150px] m-auto rounded-full' priority src={'/images/plato.jpg'} alt='Plato' width={500} height={500} />
        <p className='text-center font-light italic mt-3'>
          {`"The beginning is the most important part of the work."`}
          <br />
          ― Plato, The Republic
        </p>

        <div className='mt-8 text-center'>
          <h3 className='text-xl mb-3 underline underline-offset-4'>Manifesto</h3>
          <ul className='text-lg font-light'>
            <li className='py-1'>No spams. No bots.</li>
            <li className='py-1'>No dopamine. No ads.</li>
            <li className='py-1'>
              <a className='underline underline-offset-4' href="https://github.com/KhoiUna/platopunk" target='_blank'>Open source</a>. Transparent.
            </li>
          </ul>
        </div>

        <div className="text-center mt-10">
          <a href="https://tally.so/r/w8aqXl" target='_blank'>
            <button className='font-bold border-2 border-black p-2 drop-shadow-lg rounded-lg bg-white ease-in-out transition-all hover:bg-black hover:text-white'>
              Join Waitlist
            </button>
          </a>
        </div>
      </div>
    </main>
  )
}
