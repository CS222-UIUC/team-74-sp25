import Image from "next/image";
import Link from "next/link";
import HoverComponent from "./HoverComponent";

export default function Quiz() {
  return (
    <div>
      <div className="grid justify-center p-7">
        <Image
            className="m-auto"
            src="/skintype.webp"
            alt="Skin type"
            width={300}
            height={300}
            priority
          />
        <h1 className="font-bold text-4xl p-4 text-center">What is your skin type?</h1>
        <HoverComponent name='Oily' />
        <HoverComponent name='Dry' />
        <HoverComponent name='Combination' />
        <HoverComponent name='Sensitive' />
      </div>
    </div>
  );
}