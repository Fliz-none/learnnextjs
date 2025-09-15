import Image from "next/image";

export default function Logo() {
  return (
    <div className="flex items-center gap-2">
      <Image src="/next.svg" alt="Logo" width={32} height={32} />
      <span className="font-bold text-lg text-gray-900">MySite</span>
    </div>
  );
}
