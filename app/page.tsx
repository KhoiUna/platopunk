import Image from 'next/image'

export default function page() {
  return (
    <main className='min-h-screen bg-slate-50 p-8'>
      <h1 className='text-center text-xl font-light'>PlatoPunk</h1>
      <h2 className='text-center text-lg font-light mt-1'>A place to talk ideas for building a utopian future</h2>

      <div className='pt-20'>
        <Image className='w-[150px] m-auto rounded-full' priority src={'/images/plato.jpg'} alt='Plato' width={500} height={500} />
        <p className='text-center font-light italic mt-3'>
          {`"The beginning is the most important part of the work."`}
          <br />
          ― Plato, The Republic
        </p>

        <div className="text-center mt-8">
          <a href="https://tally.so/r/w8aqXl" target='_blank'>
            <button className='border-2 border-black p-2 drop-shadow-lg rounded-lg bg-white'>
              Join Waitlist
            </button>
          </a>
        </div>
      </div>
    </main>
  )
}
