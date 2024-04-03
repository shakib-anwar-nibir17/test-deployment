import Image from "next/image";

export const Loading = () => {
  return (
    <div className="h-full w-full flex justify-center items-center flex-col">
      <Image
        src="/logo.svg"
        alt="logo"
        width={120}
        height={120}
        className="animate-pulse duration-700"
      />
    </div>
  );
};
