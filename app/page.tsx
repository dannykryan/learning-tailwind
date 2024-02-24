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
          <h1 className="text-3xl roboto">This is a h1 in Roboto</h1>
          <h2 className="text-2xl capitalize">This is a h2, capitalized</h2>
          <h3 className="text-xl leading-loose">This is a h3</h3>
          <p className="text-base uppercase">A regular Paragraph, uppercase</p>
          <p className="text-base underline">An underlined Paragraph</p>
          <p className="text-base underline underline-offset-4 decoration-red-500 decoration-double">A fancy underlined Paragraph</p>
          <p className="text-base line-through">A line-through Paragraph</p>
          <p className="text-base overline decoration-wavy decoration-2 decoration-blue-600 mt-2">An overline Paragraph with wave</p>
          <p className="text-sm">A description paragraph</p>
          <p className="text-xs">A little note</p>
          <div className="mt-5 w-[400px] mx-auto">
            <p className="text-3xl truncate">Truncated text: Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
          </div>
        </div>
    </>
  )
}
