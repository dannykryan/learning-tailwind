import snowboarder from '../public/Assets/snowboarder.jpg'

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
        {/* Layout Container */}
        <div className="container mt-4">
            <div className="col-span-3 md:col-span-2 bg-sky-500 p-6 rounded-lg">Content</div>
        </div>

        {/* Adding based on column count */}
        <div className="h-[300px] text white Parent bg-slate-900 mt-4">
          <div className="container columns-xs text-white">
            <img src="https://images.unsplash.com/photo-1708516514746-9979b248d4bb?q=80&w=2014&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="snowboarder" className="h-[300px] mx-auto float-left" />
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora delectus saepe incidunt commodi recusandae, porro obcaecati, nobis repudiandae iure eum exercitationem rerum quam quas aliquam quae libero non itaque a!</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora delectus saepe incidunt commodi recusandae, porro obcaecati, nobis repudiandae iure eum exercitationem rerum quam quas aliquam quae libero non itaque a!</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora delectus saepe incidunt commodi recusandae, porro obcaecati, nobis repudiandae iure eum exercitationem rerum quam quas aliquam quae libero non itaque a!</p>
          </div>
        </div>

        {/* Using columns with images */}
        <div className="h-[200px] text white Parent bg-slate-900 mt-4">
          <div className="container columns-xs text-white pt-2">
            <Image src={snowboarder} className="object-cover h-32 w-32 mx-auto float-left mr-2" alt="snowboarder"/>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora delectus saepe incidunt commodi recusandae, porro obcaecati, nobis repudiandae iure eum exercitationem rerum quam quas aliquam quae libero non itaque a!</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora delectus saepe incidunt commodi recusandae, porro obcaecati, nobis repudiandae iure eum exercitationem rerum quam quas aliquam quae libero non itaque a!</p>
          </div>
        </div>
        
        {/* Position */}
        <div className="text-white Parent bg-slate-900 h-[200px] mt-4">
          <div className="container px-2">
            <div className="relative top-8 w-32 h-32 p-8 bg-red-500 rounded-lg">
            <div className="absolute -top-2 -left-2 w-24 h-24 bg-green-500 rounded-lg"></div>
            </div>
          </div>
        </div>

        {/* Overflow */}
        <div className="container w-screen flex">
        <div className="container w-72 h-48 overflow-auto">
          <h1 className="text-xl font-bold">Overflow:</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil delectus nulla ullam culpa. Tenetur sint, odit qui possimus eveniet nam unde! Facere dolorem inventore accusamus modi iure, quia excepturi itaque!
          Iure tempore totam ratione minima sint dolorum? Magni expedita praesentium adipisci ullam doloribus obcaecati/</p>
        </div>
        <div className="container w-72 h-48 overflow-x-auto">
          <h1 className="text-xl font-bold">Overflow X Auto:</h1>
          <div className="container flex">
          <Image src={snowboarder} className="object-cover h-32 w-32 mx-auto float-left mr-2" alt="snowboarder"/>
          <Image src={snowboarder} className="object-cover h-32 w-32 mx-auto float-left mr-2" alt="snowboarder"/>
          <Image src={snowboarder} className="object-cover h-32 w-32 mx-auto float-left mr-2" alt="snowboarder"/>
          <Image src={snowboarder} className="object-cover h-32 w-32 mx-auto float-left mr-2" alt="snowboarder"/>
          <Image src={snowboarder} className="object-cover h-32 w-32 mx-auto float-left mr-2" alt="snowboarder"/>
          </div>
        </div>
        </div>

        {/* Making Elements Visible */}
        <div className="text-white bg-slate-900 Parent mt-4">
          <div className="container">
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-teal-500">01</div>
              <div className="invisible bg-teal-500">02</div>
              <div className="bg-teal-500">03</div>
            </div>
          </div>
        </div>

        {/* Z-Index */}
        <div className="text-white bg-slate-900 Parent mt-4">
          <div className="container flex -space-x-3">
            <div className="w-16 h-16 rounded-full flex items-center justify-center bg-pink-500 shadow-lg ring-2 ring-white z-40">05</div>
            <div className="z-30 w-16 h-16 rounded-full flex items-center justify-center bg-pink-500 shadow-lg ring-2 ring-white">04</div>
            <div className="z-20 w-16 h-16 rounded-full flex items-center justify-center bg-pink-500 shadow-lg ring-2 ring-white">03</div>
            <div className="z-10 w-16 h-16 rounded-full flex items-center justify-center bg-pink-500 shadow-lg ring-2 ring-white">02</div>
            <div className="z-0 w-16 h-16 rounded-full flex items-center justify-center bg-pink-500 shadow-lg ring-2 ring-white">01</div>
          </div>
        </div>

        {/* Object Position */}
        <div className="container flex space-x-8 mt-4">
          <div className="text-center space-y-2">
            <h2>Object Center</h2>
            <Image src={snowboarder} className="object-none mx-auto h-[200px] w-[200px] object-center rounded-full" alt="snowboarder" />
          </div>
          <div className="text-center space-y-2">
            <h2>Object Top</h2>
            <Image src={snowboarder} className="object-none mx-auto h-[200px] w-[200px] object-top rounded-full" alt="snowboarder" />
          </div>
          <div className="text-center space-y-2">
            <h2>Object Left </h2>
            <Image src={snowboarder} className="object-none mx-auto h-[200px] w-[200px] object-left rounded-full" alt="snowboarder" />
          </div>
        </div>

    </>
  )
}
