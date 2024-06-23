
export default function Layout ({children}){
    return(
    <div className="flex">
      <div className="h-screen hidden lg:flex w-1/6 justify-center items-center overflow-hidden bg-gray-50">
        <SideNav />
      </div>
      <div className="min-h-min w-full lg:w-5/6 p-8 bg-blue-50">
        {children}
      </div>
    </div>

  )
}

export function SideNav(){
    return(
        <div>navigation bar</div>
    )
}