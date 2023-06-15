

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between sm:p-24 p-4">
     <div className='z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex'>
           <h1 className='text-4xl p-4 text-center'> Harcama Takip</h1>
           <div className='bg-slate-800 p-4 rounded-lg'>
           <form className='grid grid-cols-6 items-center text-black'>
            <input type='text' className='col-span-3 p-3 border' placeholder='Harcama gürin' />
            <input type='text'  className='col-span-2 p-3 border'placeholder='  ₺' />
            <button type='submit'>+</button>
           </form>
            </div>
      </div>
    </main>
  )
}
