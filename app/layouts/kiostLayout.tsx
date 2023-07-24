export default function KioskLayout({
  children, screenClassName
}: {
    children: React.ReactNode,
    screenClassName: String,
}) {
  return (
      <div className="w-full h-full bg-black max-w-[800px] p-3 pb-12 shadow-2xl m-auto rounded-t-2xl">
        <div id="screen" className={`w-full h-full bg-white flex flex-col text-black p-4 shadow-inner rounded-md ${screenClassName}`}>
          {children}
        </div>
    </div>
  )
}
