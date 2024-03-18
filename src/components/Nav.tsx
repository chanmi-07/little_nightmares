import React from "react";
import HeaderLinks from "../data/header_links.json";
import Logo from "../icons/icon.svg";

interface HeaderLink {
  name: string;
  link: string;
}

type Props = React.ComponentProps<"div">;

const headerLinks: HeaderLink[] = HeaderLinks;

export default function Header(props: Props) {
  const { children } = props;
  return <header className="fixed w-screen z-10">
    <nav className="w-[1600px] max-w-full mx-auto flex justify-between items-center py-2 px-4">
      {children}
    </nav>
  </header>;
}
