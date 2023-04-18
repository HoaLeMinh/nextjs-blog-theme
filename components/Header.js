import Link from 'next/link';
import Image from 'next/image'
import headerNavLinks from '../data/headerNavLinks'

export default function Header({ name, siteLogo }) {
/*   return (
    <header className="pt-20 pb-12">
      <p className="text-2xl dark:text-white text-center">
        <Link href="/">
          <Image src={siteLogo} width={113} height={55} objectFit='contain'></Image>
        </Link>
      </p>
    </header>
  ); */

  return (
    <header className={"w-full"}>
      <div className='flex p-4 justify-between items-center'>
        <Link href="/" aria-label={name}>
            <div className="mr-3">
              {/* <Logo /> */}
                <Image
                  src={siteLogo}
                  alt="Logo"
                  width={113}
                  height={55}
                  objectFit='contain'
                />
            </div>
        </Link>
          <nav className="flex flex-row gap-4 text-sm leading-6 font-semibold text-slate-700 dark:text-slate-200">
            {headerNavLinks.map((link, index) => (
              <ul key={index} className='flex space-x-8'>
                <li>
                  <Link
                    key={link.title}
                    href={link.href}
                    className="pt-1 pb-1 pl-4 pr-4 font-medium text-gray-900 dark:text-gray-100 sm:p-4 no-underline"
                  >
                    {link.title}
                  </Link>
                </li>
              </ul>
            ))}
          </nav>
      </div>
    </header>
  );
}
