import {
  Button,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from '@nextui-org/react';
import Link from 'next/link';
import React from 'react';
import { BsHeart } from 'react-icons/bs';
import NavLink from './NavLink';

export const TopNav = () => {
  return (
    <Navbar
      maxWidth="xl"
      className="bg-gradient-to-r from-purple-400 to-purple-700"
      classNames={{
        item: [
          'text-xl',
          'text-white',
          'uppercaes',
          'data-[active=true]:text-orange-300',
        ],
      }}
    >
      <NavbarBrand as={Link} href={'/'}>
        <BsHeart size={40} className="text-gray-200" />
        <div className="font-bold text-3xl flex ">
          <span className="text-gray-900">Soul</span>
          <span className="text-gray-200">Sync</span>
        </div>
      </NavbarBrand>
      <NavbarContent justify="center">
        <NavLink href="/members" label="Matches" />
        <NavLink href="/lists" label="Lists" />
        <NavLink href="/messages" label="Messages" />
      </NavbarContent>
      <NavbarContent justify="end">
        <Button
          as={Link}
          href="/login"
          variant="bordered"
          className="text-white"
        >
          Login
        </Button>
        <Button
          as={Link}
          href="/register"
          variant="bordered"
          className="text-white"
        >
          Register
        </Button>
      </NavbarContent>
    </Navbar>
  );
};
