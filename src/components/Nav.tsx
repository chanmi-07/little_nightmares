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
  return <header className="sticky top-0 flex justify-between items-center py-2">{children}</header>;
}
