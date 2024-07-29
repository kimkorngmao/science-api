import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <div className='max-w-screen-lg mx-auto flex flex-col min-h-screen'>
      <Head>
        <title>Korng&apos;s Science Blog API</title>
      </Head>

      <main className="max-w-screen-sm w-full px-5 py-20 flex-grow">
        <Link href="/">
          <h1 className="text-2xl mb-5">Korng&apos;s Science Blog API!</h1>
        </Link>

        <Link href="#free-to-use" id='free-to-use' className="mt-8 flex items-center gap-2 text-xl mb-3 text-red-500 hover:text-red-400 duration-200">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-5">
            <path fillRule="evenodd" d="M7.487 2.89a.75.75 0 1 0-1.474-.28l-.455 2.388H3.61a.75.75 0 0 0 0 1.5h1.663l-.571 2.998H2.75a.75.75 0 0 0 0 1.5h1.666l-.403 2.114a.75.75 0 0 0 1.474.28l.456-2.394h2.973l-.403 2.114a.75.75 0 0 0 1.474.28l.456-2.394h1.947a.75.75 0 0 0 0-1.5h-1.661l.57-2.998h1.95a.75.75 0 0 0 0-1.5h-1.664l.402-2.108a.75.75 0 0 0-1.474-.28l-.455 2.388H7.085l.402-2.108ZM6.8 6.498l-.571 2.998h2.973l.57-2.998H6.8Z" clipRule="evenodd" />
          </svg>
          <h2>Free For Your Project!</h2>
        </Link>

        <p className='mt-3'>Feel free to integrate this API into your own projects or use it for testing and development purposes.</p>
        
        <Link href="#routes" id='routes' className="mt-8 flex items-center gap-2 text-xl mb-3 text-red-500 hover:text-red-400 duration-200">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-5">
            <path fillRule="evenodd" d="M7.487 2.89a.75.75 0 1 0-1.474-.28l-.455 2.388H3.61a.75.75 0 0 0 0 1.5h1.663l-.571 2.998H2.75a.75.75 0 0 0 0 1.5h1.666l-.403 2.114a.75.75 0 0 0 1.474.28l.456-2.394h2.973l-.403 2.114a.75.75 0 0 0 1.474.28l.456-2.394h1.947a.75.75 0 0 0 0-1.5h-1.661l.57-2.998h1.95a.75.75 0 0 0 0-1.5h-1.664l.402-2.108a.75.75 0 0 0-1.474-.28l-.455 2.388H7.085l.402-2.108ZM6.8 6.498l-.571 2.998h2.973l.57-2.998H6.8Z" clipRule="evenodd" />
          </svg>
          <h2>Routes</h2>
        </Link>
        <p className='mt-3'>Only <span className='text-red-400'>GET</span> methods are supported</p>
        <ul className='mt-3 max-w-md'>
          <li className='mt-2 flex items-center justify-between'><span>GET</span><Link href="/api/posts" className='text-blue-400'>/api/posts</Link></li>
          <li className='mt-2 flex items-center justify-between'><span>GET</span><Link href="/api/posts/why-cant-we-see-the-wind" className='text-blue-400'>/api/posts/:id</Link></li>
        </ul>
      </main>

      <footer className="w-full p-5 text-xs">
        <p>© Kimkorng Mao, 2024. Source on <a href='https://github.com/kimkorngmao/science-api' target='_blank' rel="noopener noreferrer" className='text-blue-300'>GitHub</a>.</p>
      </footer>
    </div>
  );
}
