
import Link from "next/link";
import "/styles/global.css";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
const header = (
 
  <header>
   <div className="text-center bg-slate-800 p-8 my-6 rounded-md">
    <Link href='/'>
    <h1 className="text-3xl text-white font-bold">
     Next JS Project
    </h1>
    </Link>
    <p className="text-slate-300">Next JS Tech Blog Demo</p>
  </div>
  </header>

);

const footer = (
 <footer>
  <div className="border-t border-slate-500 mt-6 text-center text-slate-400">
    <h3>
     Developed by Nick
    </h3>
  </div>
  </footer>

);

  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      
      <body>
        <div className="mx-auto max-w-2xl">
        {header}
        {children}
        {footer}

        </div>

        </body>
       
     
    </html>
  )
}
