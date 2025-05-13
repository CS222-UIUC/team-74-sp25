import Link from "next/link";

export default function Home() {
  const getAssetPath = (path: string) => {
    const basePath = process.env.NODE_ENV === 'production' ? '/TEAM-74-SP25' : '';
    return `${basePath}${path}`;
  };

  return (
    <div>
      <div className="grid justify-center p-7">
        <img
          className="m-auto"
          src={getAssetPath('/happygif.webp')}
          alt="Happy guy dancing cuz his skin is GLOWING :)"
          width={300}
          height={300}
        />

        <h1 className="font-bold text-5xl text-sky-600 drop-shadow-md p-4">Skincare Project</h1>
        <p className="p-2 text-xl">Figure out your ideal skincare products with our quiz!</p>
        <Link href="/quiz" className="font-bold text-center bg-sky-600 text-white p-2 m-5 rounded-full transition duration-150 ease-in-out hover:bg-sky-800 hover:drop-shadow-md">Try Our Quiz!</Link>
      </div>
    </div>
  );
}