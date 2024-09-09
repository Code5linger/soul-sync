import { Button } from '@nextui-org/react';
import Link from 'next/link';
import { GiGhost } from 'react-icons/gi';

export default function Home() {
  return (
    <div className="">
      <h1 className=" text-3xl">Hello World!</h1>
      <Button
        as={Link}
        href="/members"
        className="mt-3 bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg"
        startContent={<GiGhost size={15} />}
      >
        Members
      </Button>
    </div>
  );
}
