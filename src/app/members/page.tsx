import { Button, Link } from '@nextui-org/react';
// import Link from 'next/link';
import React from 'react';
import { RiHome2Line } from 'react-icons/ri';

const MembersAnything = () => {
  return (
    <div>
      <h3 className="text-3xl">This will be the memebers page.</h3>
      {/* <Link href="/"> */}
      <Button
        as={Link}
        href="/"
        className="mt-3 bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg"
        startContent={<RiHome2Line size={15} />}
      >
        Home
      </Button>
      {/* </Link> */}
    </div>
  );
};

export default MembersAnything;
