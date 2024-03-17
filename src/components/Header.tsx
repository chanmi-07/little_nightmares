import type { SVGProps } from "react";
import HeaderLinks from "../data/header_links.json";
import About from "../data/about.json";
import Icon from "../icons/icon.svg";

type IconProps = SVGProps<SVGSVGElement>;

interface HeaderLink {
  name: string;
  link: string;
}

interface About {
  name: string;
  description: string;
  official_site: string;
  official_store: string;
  by: string;
  portfolio: string;
}

const headerLinks: HeaderLink[] = HeaderLinks;

const about: About = About;

export default function Header() {
  return (
    <nav className="sticky flex justify-between">
      <div>{/* <Icon /> */}</div>
      <div className="flex gap-5">
        {headerLinks.map((link) => (
          <a href={link.link}>{link.name}</a>
        ))}
        <a href={about.official_site}>Official Site</a>
        <a href={about.official_store}>Buy Now</a>
      </div>
    </nav>
  );
}
