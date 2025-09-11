import { Link } from "@/i18n/navigation";
import { FolderCodeIcon } from "lucide-react";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2 text-primary">
      <FolderCodeIcon /> <span className="text-2xl font-medium">Examy</span>
    </Link>
  );
}
