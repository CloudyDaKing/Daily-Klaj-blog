import Link from "next/link";

export default function Navbar() {
  return (
    <div className="">
      <nav className="container py-2 mx-auto">
        <ul className="flex space-x-6 text-lg justify-center">
          <li>
            <NavLink href="/">Home</NavLink>
          </li>
          <li>
            <NavLink href="/blog">Blog</NavLink>
          </li>
          <li>
            <NavLink href="">
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

type NavLink = {
  href: string;
  children: React.ReactNode;
};

const NavLink = ({ href, children }: NavLink) => {
  return (
    <Link className="hover:underline" href={href}>
      {children}
    </Link>
  );
};
