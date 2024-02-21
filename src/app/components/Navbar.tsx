import Image from "next/image";
import Link from "next/link";
import { NAV_LINKS } from "../constains";
import Button from "./Button";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center max-container padding-container relative z-30 py-5">
      <Link href="/">
        <Image src="/hilink-logo.svg" alt="logo" width={74} height={29} />
      </Link>

      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className="text-gray-500  flex pb-1.5 transition-all hover:font-bold"
          >
            {" "}
            {link.label}
          </Link>
        ))}
      </ul>
      <div className="lg:flex justify-center hidden">
        <Button
          type="button"
          title="Login"
          icon="/user.svg"
          varient="btn_dark_green"
        />
      </div>
      <Image
        src="menu.svg"
        alt="menu"
        width={32}
        height={32}
        className="inline-block cursor-pointer lg:hidden"
      />
    </nav>
  );
};

export default Navbar;
