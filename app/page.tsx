import snowboarder from '../public/Assets/snowboarder.jpg'
import cabin from '../public/Assets/yellow-cabin.jpg'
import kitten from '../public/Assets/kitten.jpg'

import Image from 'next/image'

export default function Home() {
  return (
    <>
    <div className="mb-16">
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
        <div className="text-white bg-slate-900 Parent mt-4 py-2">
          <div className="container flex -space-x-3 justify-center">
            <div className="w-16 h-16 rounded-full flex items-center justify-center bg-pink-500 shadow-lg ring-2 ring-white z-40">05</div>
            <div className="z-30 w-16 h-16 rounded-full flex items-center justify-center bg-pink-500 shadow-lg ring-2 ring-white">04</div>
            <div className="z-20 w-16 h-16 rounded-full flex items-center justify-center bg-pink-500 shadow-lg ring-2 ring-white">03</div>
            <div className="z-10 w-16 h-16 rounded-full flex items-center justify-center bg-pink-500 shadow-lg ring-2 ring-white">02</div>
            <div className="z-0 w-16 h-16 rounded-full flex items-center justify-center bg-pink-500 shadow-lg ring-2 ring-white">01</div>
          </div>
        </div>

        {/* Object Position */}
        <div className="container flex space-x-8 mt-4 justify-center">
          <div className="text-center space-y-2">
            <h2>Object Center</h2>
            <Image src={kitten} className="object-none mx-auto h-[200px] w-[200px] object-center rounded-full" alt="kitten" />
          </div>
          <div className="text-center space-y-2">
            <h2>Object Top</h2>
            <Image src={kitten} className="object-none mx-auto h-[200px] w-[200px] object-top rounded-full" alt="kitten" />
          </div>
          <div className="text-center space-y-2">
            <h2>Object Left </h2>
            <Image src={kitten} className="object-none mx-auto h-[200px] w-[200px] object-left rounded-full" alt="kitten" />
          </div>
        </div>

        {/* Borders */}
        <div className="text-white bg-slate-900 Parent mt-4 text-center">
          <header className="w-full border-t-8 border-x-8 border-b-4 border-green-300">Header</header>
        </div>


        {/* Borders can also be applied as dividers between elements: */}
        <div className="text-white bg-slate-900 Parent mt-4 text-center">
          <div className="divide-y divide-red-500">
            <div>01</div>
            <div>02</div>
            <div>03</div>
          </div>
        </div>

        <div className="text-green-500 bg-slate-900 Parent mt-4 text-center py-2">
          <input type="text" className="border-2 border-rose-600 outline-none text-center" />
        </div>

        {/* Effects and Filters */}
        
        {/* Box Shadow */}
        <div className="my-4 border-2 w-[180px] justify-center p-4 shadow-lg mx-auto">
          <h1 className="text-2xl font-bold">Hello</h1>
          <p className="text-lg">This is my div</p>
          <button className="bg-teal-700 text-xl rounded-lg p-2 mt-4 shadow-teal-900/50 shadow-md hover:bg-teal-900 text-white">Say Hello</button>
        </div>

        {/* Opacity */}
        <div className="bg-slate-900 text-white Parent mt-4 text-center">
          <div className="container">
            <div className="opacity-50">This is 50% opacity text</div>
          </div>
        </div>

        {/* Mix Blend Mode */}
        <div className="text-white Parent mt-4 py-2">
          <div className="container flex -space-x-8 justify-center">
            <div className="w-32 h-32 rounded-full flex items-center justify-center bg-green-500 shadow-lg z-40 mix-blend-multiply">05</div>
            <div className="z-30 w-32 h-32 rounded-full flex items-center justify-center bg-sky-500 shadow-lg mix-blend-multiply">04</div>
            <div className="z-20 w-32 h-32 rounded-full flex items-center justify-center bg-purple-500 shadow-lg mix-blend-multiply">03</div>
            <div className="z-10 w-32 h-32 rounded-full flex items-center justify-center bg-red-500 shadow-lg mix-blend-multiply">02</div>
            <div className="z-0 w-32 h-32 rounded-full flex items-center justify-center bg-orange-500 shadow-lg mix-blend-multiply">01</div>
          </div>
        </div>

        {/* Filters: Blur */}
        <div className="flex">
          <div className="my-4 border-2 w-[180px] justify-center p-4 shadow-lg mx-auto text-center">
            <Image src={kitten} alt="kitten" className="object-none h-[200px] mb-2" />
            <h1 className="text-2xl font-bold">Normal</h1>
          </div>

          <div className="my-4 border-2 w-[180px] justify-center p-4 shadow-lg mx-auto text-center">
            <Image src={kitten} alt="kitten" className="object-none h-[200px] mb-2 blur-sm" />
            <h1 className="text-2xl font-bold">Blur-sm</h1>
          </div>

          <div className="my-4 border-2 w-[180px] justify-center p-4 shadow-lg mx-auto text-center">
            <Image src={kitten} alt="kitten" className="object-none h-[200px] mb-2 blur-md" />
            <h1 className="text-2xl font-bold">Blur-md</h1>
          </div>

          <div className="my-4 border-2 w-[180px] justify-center p-4 shadow-lg mx-auto text-center">
            <Image src={kitten} alt="kitten" className="object-none h-[200px] mb-2 hue-rotate-90" />
            <h1 className="text-2xl font-bold">hue-rotate-90</h1>
          </div>
        </div>

        <div className="flex">
          <div className="my-4 border-2 w-[180px] justify-center p-4 shadow-lg mx-auto text-center">
            <Image src={kitten} alt="kitten" className="object-none h-[200px] mb-2 brightness-50" />
            <h1 className="text-2xl font-bold">brightness-50%</h1>
          </div>

          <div className="my-4 border-2 w-[180px] justify-center p-4 shadow-lg mx-auto text-center">
            <Image src={kitten} alt="kitten" className="object-none h-[200px] mb-2 brightness-125" />
            <h1 className="text-2xl font-bold">brightness-125%</h1>
          </div>

          <div className="my-4 border-2 w-[180px] justify-center p-4 shadow-lg mx-auto text-center">
            <Image src={kitten} alt="kitten" className="object-none h-[200px] mb-2 contrast-10" />
            <h1 className="text-2xl font-bold">Contrast-10%</h1>
          </div>

          <div className="my-4 border-2 w-[180px] justify-center p-4 shadow-lg mx-auto text-center">
            <Image src={kitten} alt="kitten" className="object-none h-[200px] mb-2 grayscale" />
            <h1 className="text-2xl font-bold">Grayscale</h1>
          </div>
        </div>

        <div className="flex">
        <div className="my-4 border-2 w-[180px] justify-center p-4 shadow-lg mx-auto text-center">
            <Image src={kitten} alt="kitten" className="object-none h-[200px] mb-2 invert" />
            <h1 className="text-2xl font-bold">invert</h1>
          </div>

          <div className="my-4 border-2 w-[180px] justify-center p-4 shadow-lg mx-auto text-center">
            <Image src={kitten} alt="kitten" className="object-none h-[200px] mb-2 sepia" />
            <h1 className="text-2xl font-bold">sepia</h1>
          </div>

          <div className="my-4 border-2 w-[180px] justify-center p-4 shadow-lg mx-auto text-center">
            <Image src={kitten} alt="kitten" className="object-none h-[200px] mb-2 invert hue-rotate-90" />
            <h1 className="text-2xl font-bold">invert & hue-rotate</h1>
          </div>

          <div className="my-4 border-2 w-[180px] justify-center p-4 shadow-lg mx-auto text-center">
            <Image src={kitten} alt="kitten" className="object-none h-[200px] mb-2 saturate-200" />
            <h1 className="text-2xl font-bold">saturation 200%</h1>
          </div>
        </div>

        {/* Transitions */}

        <div className="flex justify-center mt-4 space-x-4">
          <button className="transition-all duration-500 ease-in-out bg-green-500 hover:bg-red-500 rounded-lg p-4">Hover Me</button>

          <button className="hover:-translate-y-1 hover:shadow-xl transition rounded-lg p-4 bg-rose-600 text-white">Hover Me</button>
        </div>
        
        {/* Animation */}
        <div className="flex justify-center mt-4 space-x-4">
          <button className="hover:bg-green-500 hover:animate-spin hover:shadow-xl transition rounded-lg p-4 bg-rose-600 text-white mt-4">Spin!</button>

          <button className="hover:animate-ping transition rounded-lg p-4 bg-blue-500 text-white mt-4">Ping!</button>
        </div>
      
        {/* Animate a spinning svg */}
        <div className="relative rounded-xl overflow-auto p-8">
          <div className="flex items-center justify-center">
            <button type="button" className="inline-flex items-center px-4 py-2 font-semibold leading-6 text-sm shadow rounded-md text-white bg-indigo-500 hover:bg-indigo-400 transition ease-in-out duration-150 cursor-not-allowed">
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Processing...
            </button>
          </div>
        </div>

        {/* Animate a pulsing circle */}
        <div className="flex items-center justify-center">
          <span className="relative inline-flex">
            <button type="button" className="inline-flex items-center px-4 py-2 font-semibold leading-6 text-sm shadow rounded-md text-sky-500 bg-white dark:bg-slate-800 transition ease-in-out duration-150 cursor-not-allowed ring-1 ring-slate-900/10 dark:ring-slate-200/20">
              Transactions
            </button>
            <span className="flex absolute h-3 w-3 top-0 right-0 -mt-1 -mr-1">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
            </span>
          </span>
        </div>

        {/* Pulsing Card Animation */}
        <div className="relative rounded-xl overflow-auto p-8">
          <div className="flex items-center justify-center">
              <div className="bg-white dark:bg-slate-800 p-4 ring-1 ring-slate-900/5 rounded-lg shadow-lg max-w-xs w-full h-28">
                <div className="flex space-x-4 animate-pulse">
                  <div className="rounded-full bg-slate-200 dark:bg-slate-700 h-10 w-10"></div>
                  <div className="flex-1 space-y-6 py-1">
                    <div className="h-2 bg-slate-200 dark:bg-slate-700 rounded"></div>
                    <div className="space-y-3">
                      <div className="grid grid-cols-3 gap-4">
                        <div className="h-2 bg-slate-200 dark:bg-slate-700 rounded col-span-2"></div>
                        <div className="h-2 bg-slate-200 dark:bg-slate-700 rounded col-span-1"></div>
                      </div>
                      <div className="h-2 bg-slate-200 dark:bg-slate-700 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
          </div>
        </div>



      </div>
    </>
  )
}
