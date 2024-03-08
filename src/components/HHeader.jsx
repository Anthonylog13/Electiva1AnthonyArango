

 export const HHeader = () => {
  return (
    <>
     <header className="bg-gray-800 text-white p-4">
       <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">Git Search</div>
          <button className="bg-slate-900">
           Change theme
           </button>
       </div>
    </header>
  <div className="container mx-auto mt-4">
    <img src="./imagen.jpg" alt="" className="w-full max-h-96 object-contain"/>
  </div>
    
    </>
  
  )
}
