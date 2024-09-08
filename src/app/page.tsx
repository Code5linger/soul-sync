import { Button } from '@nextui-org/react';
import { GiGhost } from 'react-icons/gi';

export default function Home() {
  return (
    <div className="">
      <h1 className="">Hello World!</h1>
      <Button
        className="mt-3 bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg"
        startContent={<GiGhost size={20} />}
      >
        Click Me!
      </Button>
    </div>
  );
}
