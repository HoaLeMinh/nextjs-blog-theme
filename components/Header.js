import Link from 'next/link';

export default function Header({ name, siteLogo }) {
  return (
    <header className="pt-20 pb-12">
      <p className="text-2xl dark:text-white text-center">
        <Link href="/">
          <img src={siteLogo} width='64' height='31' />
        </Link>
      </p>
    </header>
  );
}
