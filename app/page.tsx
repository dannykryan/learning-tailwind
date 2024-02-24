import Image from 'next/image'

export default function Home() {
  return (
    <>
      <h1 className="lg:text-3xl md:text-xl font-bold underline text-center mt-10 selection:bg-fuchsia-300"> 
        Hello, World!
        </h1>
        <div className="flex justify-center mt-5 mb-5">
          <button className="bg-green-300 border-2 border-green-700 hover:bg-green-400 rounded-md p-1 mx-2">Accept</button>
          <button className="bg-red-300 border-2 border-red-700 hover:bg-red-400 rounded-md p-1 mx-2">Cancel</button>
        </div>
        <h2 className="text-white bg-mustard font-bold text-center">Goodbye World!</h2>

        <div className="text-center mt-6">
          <h1>This is a h1</h1>
          <h2>This is a h2</h2>
          <h3>This is a h3</h3>
          <p>A regular Paragraph</p>
          <p>A description paragraph</p>
          <p>A little note</p>
        </div>

    </>
  )
}
