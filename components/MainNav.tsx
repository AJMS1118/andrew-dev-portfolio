import { NavLinks } from "./NavLinks";

export const MainNav = () => {
  return (
    <nav className="flex justify-center items-center">
      <NavLinks containerStyles="flex flex-col gap-6 bg-blue-100/10" />
    </nav>
  );
};
