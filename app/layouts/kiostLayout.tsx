export default function KioskLayout({
  children, screenClassName
}: {
    children: React.ReactNode,
    screenClassName: String,
}) {
  return (
    <div id="wrap" className='w-screen h-screen flex justify-center items-center bg-slate-100 pt-[20px]'>
      <div id="device" className="w-full h-full bg-black max-w-[800px] p-3 pb-12 shadow-2xl m-auto rounded-t-2xl">
        <div id="screen" className={`relative w-full h-full bg-white flex flex-col text-black shadow-inner rounded-md ${screenClassName}`}>
          {children}
        </div>
      </div>
    </div>
  )
}

    