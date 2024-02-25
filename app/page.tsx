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

        {/* Typography */}
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

        {/* Padding and Margin */}
        <div className="flex space-x-4">
        <div className="bg-red-500 text-white text-center py-5 text-3xl w-1/5 rounded-md mx-auto mt-4 hover:bg-red-700 cursor-pointer">Sidebar</div>
        <div className="bg-green-500 text-white text-center py-5 text-3xl w-4/5 rounded-md mx-auto mt-4 hover:bg-green-700 cursor-pointer">Content</div>
        </div>

        {/* Flex */}
        <div className="parent">
          <div>Header</div>
          <div className="flex flex-row">
          <div className="grow">Main Content</div>
          <div className="flex flex-col">
            <div>Sidebar</div>
            <div>Menu</div>
          </div>
          </div>
        </div>

        {/* Flex Basis */}
        <div className="Parent">
          <div className="w-full bg-purple-500">Header</div>
          <div className="flex">
            <div className="basis-1/4 bg-green-500">Menu</div>
            <div className="basis-2/4 bg-red-500">Main Content</div>
            <div className="basis-1/4 bg-green-500">Sidebar</div>
          </div>
        </div>

        {/* Flex Wrap */}
        <div className="Parent">
          <div className="bg-purple-500 mt-4">Header</div>
          <div className="flex flex-col md:flex-row">
            <div className="flex w-full flex-nowrap">
              <div className="w-full grow bg-yellow-500">Col 1</div>
              <div className="w-full grow bg-yellow-600">Col 2</div>
              <div className="w-full grow bg-yellow-700">Col 3</div>
              <div className="w-full grow bg-yellow-600">Col 4</div>
              <div className="w-full grow bg-yellow-700">Col 5</div>
            </div>
          </div>
        </div>

        {/* Align Baseline */}
        <div className="flex items-baseline justify-center mt-4 space-x-1">
          <div className="pt-2 pb-6 bg-sky-500">01</div>
          <div className="pt-8 pb-12 bg-green-500">02</div>
          <div className="pt-12 pb-4 bg-red-500">03</div>
        </div>

        {/* Grid */}
        <div className="text-white Parent bg-slate-900 mt-4 py-4">
          <div className="container mx-auto">
            <div className="grid grid-cols-3 gap-4 lg:grid-cols-4">
              <div className="bg-sky-500 p-6 rounded-lg">1</div>
              <div className="bg-red-500 p-6 rounded-lg">2</div>
              <div className="bg-green-500 p-6 rounded-lg">3</div>
              <div className="bg-yellow-500 p-6 rounded-lg">4</div>
              <div className="bg-purple-500 p-6 rounded-lg">5</div>
              <div className="bg-orange-500 p-6 rounded-lg col-span-2">6</div>
            </div>
          </div>
        </div>

        {/* Grid Starting and Ending Lines */}
        <div className="text-white Parent bg-slate-900 mt-4 py-4">
          <div className="container mx-auto">
            <div className="grid grid-cols-6 gap-4">
              <div className="col-start-2 col-span-4 bg-sky-500 p-6 rounded-lg">1</div>
              <div className="col-start-1 col-end-3 bg-red-500 p-6 rounded-lg">2</div>
              <div className="col-start-5 col-end-7 bg-green-500 p-6 rounded-lg">3</div>
              <div className="col-start-1 col-end-7 bg-yellow-500 p-6 rounded-lg">4</div>
            </div>
          </div>
        </div>

        {/* Grid Auto Rows */}
        <div className="mt-4 py-4 text-white Parent bg-slate-900">
          <div className="container mx-auto">
            <div className="grid grid-flow-col grid-rows-3 gap-4">
              <div className="p-6 rounded-lg bg-sky-500">01</div>
              <div className="p-6 rounded-lg bg-sky-500">02</div>
              <div className="p-6 rounded-lg bg-sky-500">03</div>
              <div className="p-6 rounded-lg bg-sky-500">04</div>
              <div className="p-6 rounded-lg bg-sky-500">05</div>
              <div className="p-6 rounded-lg bg-sky-500">06</div>
              <div className="p-6 rounded-lg bg-sky-500">07</div>
              <div className="p-6 rounded-lg bg-sky-500">08</div>
              <div className="p-6 rounded-lg bg-sky-500">09</div>
              <div className="p-6 rounded-lg bg-sky-500">10</div>
              <div className="p-6 rounded-lg bg-sky-500">11</div>
              <div className="p-6 rounded-lg bg-sky-500">12</div>
            </div>
          </div>
        </div>

        {/* Spanning Rows */}
        <div className="mt-4 py-4 text-white Parent bg-slate-900">
          <div className="container mx-auto">
            <div className="grid grid-flow-col grid-rows-3 gap-4">
              <div className=" row-span-2 p-6 rounded-lg bg-red-500">01</div>
              <div className="p-6 rounded-lg bg-red-500">02</div>
              <div className="p-6 rounded-lg bg-red-500">03</div>
              <div className="p-6 rounded-lg bg-red-500">04</div>
              <div className="p-6 rounded-lg bg-red-500">05</div>
              <div className="p-6 rounded-lg bg-red-500">06</div>
              <div className="p-6 rounded-lg bg-red-500">07</div>
              <div className="row-span-2 p-6 rounded-lg bg-red-500">08</div>
              <div className="p-6 rounded-lg bg-red-500">09</div>
              <div className="row-span-2 p-6 rounded-lg bg-red-500">10</div>
              <div className="row-span-2 p-6 rounded-lg bg-red-500">11</div>
              <div className="p-6 rounded-lg bg-red-500">12</div>
            </div>
          </div>
        </div>

        {/* Grid Auto Flow */}
        <div className="mt-4 py-4 text-white Parent bg-slate-900">
          <div className="container mx-auto">
            <div className="grid grid-flow-row-dense grid-cols-3 grid-rows-3 gap-2">
              <div className="col-span-2 p-6 rounded-lg bg-yellow-500">01</div>
              <div className="col-span-2 p-6 rounded-lg bg-yellow-500">02</div>
              <div className="p-6 rounded-lg bg-yellow-500">03</div>
              <div className="p-6 rounded-lg bg-yellow-500">04</div>
              <div className="p-6 rounded-lg bg-yellow-500">05</div>
              <div className="p-6 rounded-lg bg-yellow-500">06</div>
              <div className="p-6 rounded-lg bg-yellow-500">07</div>
              <div className="p-6 rounded-lg bg-yellow-500">08</div>
              <div className="p-6 rounded-lg bg-yellow-500">09</div>
              <div className="p-6 rounded-lg bg-yellow-500">10</div>
              <div className="p-6 rounded-lg bg-yellow-500">11</div>
              <div className="p-6 rounded-lg bg-yellow-500">12</div>
            </div>
          </div>
        </div>
    </>
  )
}
