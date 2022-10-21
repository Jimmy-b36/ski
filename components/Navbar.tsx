import Link from 'next/link';

const Navbar = () => {
  return (
    <div>
      <nav
        aria-label="Site Nav"
        className="mx-auto mt-5 flex max-w-4xl items-center justify-center p-4 bg-primary h-16 rounded-md"
      >
        <ul className="flex items-center justify-center gap-2 text-sm font-medium text-gray-500 w-full">
          <li className="hidden lg:block">
            <Link href="/about">Home</Link>
          </li>

          <li className="mx-3">
            <Link href="/levels">Levels</Link>
          </li>
          <li className="mx-3">
            <Link href="/booking">Booking</Link>
          </li>
          <li className="mx-3">
            <Link href="/before">Before you go</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
