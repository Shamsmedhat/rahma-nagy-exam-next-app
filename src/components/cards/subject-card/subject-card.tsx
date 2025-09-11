import Image from "next/image";
import { Link } from "@/i18n/navigation";
import type { Subject } from "@/types/api";

interface Subject_Card_Props {
  subject: Subject;
}

export default function Subject_Card({ subject }: Subject_Card_Props) {
  const { _id, name, icon } = subject;

  return (
    <Link href={"/subjects/" + _id} className="relative block aspect-[336/448] [&:hover>img]:scale-110 overflow-hidden">
      <Image src={icon} alt="Subject" className="size-full object-cover transition-[scale]" width={336} height={448} />
      <h3 className="absolute inset-2 top-auto p-2 bg-primary/50 text-background text-2xl">{name}</h3>
    </Link>
  );
}
