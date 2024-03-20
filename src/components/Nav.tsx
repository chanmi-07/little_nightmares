import React from "react";

type Props = React.ComponentProps<"div">;

export default function Header(props: Props) {
  const { children } = props;
  return <header className="fixed w-screen z-10">
    <nav className="w-[1600px] max-w-full mx-auto flex justify-between items-center py-2 px-4">
      {children}
    </nav>
  </header>;
}
