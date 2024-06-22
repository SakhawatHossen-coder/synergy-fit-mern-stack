import React from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
  Card,
  IconButton,
} from "@material-tailwind/react";
import { Cog6ToothIcon, PowerIcon, Bars2Icon } from "@heroicons/react/24/solid";
import { BiChevronDown, BiDownArrow, BiUser } from "react-icons/bi";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../hooks/useAuth";
// profile menu component
const profileMenuItems = [
  {
    label: "Dashboard",
    icon: Cog6ToothIcon,
  },

  {
    label: "Sign Out",
    icon: PowerIcon,
  },
];

function ProfileMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { user, logout } = useAuth();
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      {user ? (
        <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
          <MenuHandler>
            <Button
              variant="text"
              color="blue-gray"
              className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto"
            >
              <Avatar
                variant="circular"
                size="sm"
                alt="tania andrew"
                className="border border-gray-900 p-0.5"
                src={user?.photoURL}
              />
              <BiDownArrow
                strokeWidth={2.5}
                className={`h-3 w-3 transition-transform ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
            </Button>
          </MenuHandler>
          <MenuList className="p-1">
            <Typography className="flex items-center gap-2">
              <BiUser />
              {user?.displayName}
            </Typography>

            <>
              <MenuItem
                onClick={closeMenu}
                className={`flex items-center gap-2 rounded ${
                  user
                    ? "hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10"
                    : ""
                }`}
              >
                <Link to="/dashboard">
                  <Typography
                    as="span"
                    variant="small"
                    className="font-normal"
                    color={user ? "red" : "inherit"}
                  >
                    Dashboard
                  </Typography>
                </Link>
              </MenuItem>
              <MenuItem
                onClick={closeMenu}
                className={`flex items-center gap-2 rounded ${
                  user
                    ? "hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10"
                    : ""
                }`}
              >
                <Typography
                  as="span"
                  onClick={logout}
                  variant="small"
                  className="font-normal"
                  color={user ? "red" : "inherit"}
                >
                  Log Out
                </Typography>
              </MenuItem>
            </>
          </MenuList>
        </Menu>
      ) : (
        <NavLink to="/login">
          <Button>Log In</Button>
        </NavLink>
      )}
    </>
  );
}

// nav list menu
const navListMenuItems = [
  {
    title: "@material-tailwind/html",
    description:
      "Learn how to use @material-tailwind/html, packed with rich components and widgets.",
  },
  {
    title: "@material-tailwind/react",
    description:
      "Learn how to use @material-tailwind/react, packed with rich components for React.",
  },
  {
    title: "Material Tailwind PRO",
    description:
      "A complete set of UI Elements for building faster websites in less time.",
  },
];

function NavListMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const MENUU = (
    <>
      <NavLink to="/">
        <MenuItem className="flex flex-col items-center gap-2 font-medium text-blue-gray-900 lg:hidden">
          <li>
            <Button color="teal">Home</Button>
          </li>
        </MenuItem>
      </NavLink>
      <NavLink to="/all-trainers">
        <MenuItem className="flex flex-col items-center gap-2 font-medium text-blue-gray-900 lg:hidden">
          <li>
            <Button color="teal">All Trainer</Button>
          </li>
        </MenuItem>
      </NavLink>
      <NavLink to="/all-class">
        <MenuItem className="flex flex-col items-center gap-2 font-medium text-blue-gray-900 lg:hidden">
          {" "}
          <li>
            {" "}
            <Button color="teal">All Classes</Button>
          </li>
        </MenuItem>
      </NavLink>
      <NavLink to="/all-forum-post">
        <MenuItem className="flex flex-col items-center gap-2 font-medium text-blue-gray-900 lg:hidden">
          <li>
            {" "}
            <Button color="teal">Forums</Button>
          </li>
        </MenuItem>
      </NavLink>
    </>
  );

  return (
    <React.Fragment>
      <Menu>
        <MenuHandler>
          <Typography variant="small" className="font-normal">
            <MenuItem className="hidden items-center gap-2 font-medium text-blue-gray-900 lg:flex lg:rounded-full">
              <NavLink to="/">HOME</NavLink>
            </MenuItem>
          </Typography>
        </MenuHandler>
        <MenuHandler>
          <Typography variant="small" className="font-normal">
            <MenuItem className="hidden items-center gap-2 font-medium text-blue-gray-900 lg:flex lg:rounded-full">
              <NavLink to="/all-trainers">All Trainers</NavLink>
            </MenuItem>
          </Typography>
        </MenuHandler>
        <MenuHandler>
          <Typography variant="small" className="font-normal">
            <MenuItem className="hidden items-center gap-2 font-medium text-blue-gray-900 lg:flex lg:rounded-full">
              <NavLink to="/all-class">All Class</NavLink>
            </MenuItem>
          </Typography>
        </MenuHandler>
        <MenuHandler>
          <Typography variant="small" className="font-normal">
            <MenuItem className="hidden items-center gap-2 font-medium text-blue-gray-900 lg:flex lg:rounded-full">
              <NavLink to="/all-forum-post">Forum</NavLink>
            </MenuItem>
          </Typography>
        </MenuHandler>
      </Menu>
      {MENUU}
    </React.Fragment>
  );
}

// nav list component
const navListItems = [
  //   {
  //     label: "Account",
  //     icon: UserCircleIcon,
  //   },
  //   {
  //     label: "Blocks",
  //     icon: CubeTransparentIcon,
  //   },
  //   {
  //     label: "Docs",
  //     icon: CodeBracketSquareIcon,
  //   },
];

function NavList() {
  return (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center">
      <NavListMenu />
      {navListItems.map(({ label, icon }, key) => (
        <Typography
          key={label}
          as="a"
          href="#"
          variant="small"
          color="gray"
          className="font-medium text-blue-gray-500"
        >
          <MenuItem className="flex items-center gap-2 lg:rounded-full">
            {React.createElement(icon, { className: "h-[18px] w-[18px]" })}{" "}
            <span className="text-gray-900"> {label}</span>
          </MenuItem>
        </Typography>
      ))}
    </ul>
  );
}
const NavbarNavbar = () => {
  const [isNavOpen, setIsNavOpen] = React.useState(false);

  const toggleIsNavOpen = () => setIsNavOpen((cur) => !cur);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setIsNavOpen(false)
    );
  }, []);

  return (
    <Navbar className="mx-auto max-w-screen-xl p-2 lg:rounded-full lg:pl-6">
      <div className="relative mx-auto flex items-center justify-between text-blue-gray-900">
        <NavLink to="/">
          <Typography className="mr-4 ml-2 cursor-pointer py-1.5 font-medium">
            Synergy Fit
          </Typography>
        </NavLink>
        <div className="hidden lg:block">
          <NavList />
        </div>
        <IconButton
          size="sm"
          color="blue-gray"
          variant="text"
          onClick={toggleIsNavOpen}
          className="ml-auto mr-2 lg:hidden"
        >
          <Bars2Icon className="h-6 w-6" />
        </IconButton>

        <ProfileMenu />
      </div>
      <MobileNav open={isNavOpen} className="overflow-scroll">
        <NavList />
      </MobileNav>
    </Navbar>
  );
};

export default NavbarNavbar;
