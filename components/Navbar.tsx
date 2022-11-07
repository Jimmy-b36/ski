import Link from 'next/link';
import { SlMenu } from 'react-icons/sl';
import { AiFillHome } from 'react-icons/ai';

const Navbar = () => {
  return (
    <div>
      <nav
        aria-label="Site Nav"
        className="flex items-center justify-center w-3/4 h-16 p-4 mx-auto mt-5 rounded-md bg-primary"
      >
        <div className="flex justify-start w-full dropdown sm:hidden md:hidden lg:hidden xl:hidden">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <p className="text-xl text-black ">
              <SlMenu />
            </p>
          </label>
          <ul
            tabIndex={0}
            className="flex justify-center p-2 text-gray-800 shadow mt-14 menu menu-compact dropdown-content bg-primary rounded-box w-52"
          >
            <li className="">
              <Link href="/levels">Levels</Link>
            </li>
            <li className="">
              <Link href="/booking">Booking</Link>
            </li>
            <li className="">
              <Link href="/before">Before you go</Link>
            </li>
          </ul>
        </div>
        <div className="flex justify-end w-full sm:hidden md:hidden lg:hidden xl:hidden">
          <label
            tabIndex={0}
            className="text-2xl text-black btn btn-ghost btn-circle"
          >
            <Link href="/">
              <AiFillHome />
            </Link>
          </label>
        </div>
        <ul className="items-center justify-center hidden w-full gap-2 text-sm font-medium text-gray-800 sm:flex lg:flex md:flex xl:flex">
          <li className="mx-3">
            <Link href="/">Home</Link>
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
