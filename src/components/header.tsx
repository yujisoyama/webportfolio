import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from '@/components/ui/navigation-menu';
import { MenuIcon } from '@/assets/icons/Menu';
import { NAV_SECTIONS } from '../utils/constants';
import { scrollToSection } from '@/utils/scrollToSection';
import { Button } from './ui/button';

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between py-3 px-4 fixed left-0 top-0 w-full bg-background-secondary z-10">
      <p className="text-primary text-2xl font-bold">My web portfolio</p>
      <DropdownMenu>
        <DropdownMenuTrigger className="border-none hover:cursor-pointer md:hidden">
          <MenuIcon className="text-primary" />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="flex flex-col gap-2 bg-background-secondary border-transparent text-primary font-bold mt-2 p-2 md:hidden">
          {NAV_SECTIONS.map((s) => (
            <Button
              key={s}
              className="transition hover:text-secondary hover:cursor-pointer bg-background-secondary hover:bg-background-secondary border-none shadow-none h-6"
              onClick={() => scrollToSection(s)}
            >
              {s}
            </Button>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
      <NavigationMenu className="hidden md:block">
        <NavigationMenuList className="flex items-center justify-between gap-3">
          {NAV_SECTIONS.map((s) => (
            <NavigationMenuItem
              key={s}
              className="transition text-primary font-bold hover:text-secondary hover:cursor-pointer"
              onClick={() => scrollToSection(s)}
            >
              {s}
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </nav>
  );
}
