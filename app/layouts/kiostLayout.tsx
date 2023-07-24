export default function KioskLayout({
  children, screenClassName
}) {
  return (
      <div className="w-full h-full bg-black max-w-[800px] p-3 pb-12 shadow-2xl m-auto">
        <div id="screen" className={`w-full h-full bg-white flex flex-col text-black p-4 ${screenClassName}`}>
          {children}
        </div>
    </div>
  )
}
