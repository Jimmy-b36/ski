import Link from 'next/link';

const Navbar = () => {
  return (
    <div>
      <nav
        aria-label="Site Nav"
        className="flex items-center justify-center w-3/4 h-16 p-4 mx-auto mt-5 rounded-md bg-primary"
      >
        <ul className="flex items-center justify-center w-full gap-2 text-sm font-medium text-gray-800">
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
