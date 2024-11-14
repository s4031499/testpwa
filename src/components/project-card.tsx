import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  name: string;
  image: string;
  status: "Mở bán" | "Chưa mở bán" | "Hết hàng";
  logo: string;
}

export function ProjectCard({ name, image, status, logo }: ProjectCardProps) {
  const statusColor = {
    "Mở bán": "bg-green-500",
    "Chưa mở bán": "bg-yellow-500",
    "Hết hàng": "bg-red-500",
  };

  return (
    <div className="relative rounded-lg overflow-hidden shadow-md">
      <div className="relative w-full h-48">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
          sizes="(max-width: 480px) 100vw"
        />
      </div>
      <div className="absolute top-4 right-4">
        <Badge className={cn("text-white", statusColor[status])}>
          {status === "Mở bán" && "✓ "}
          {status === "Chưa mở bán" && "@ "}
          {status === "Hết hàng" && "✕ "}
          {status}
        </Badge>
      </div>
      <div className="absolute bottom-4 left-4 flex items-center space-x-3">
        <div className="relative w-8 h-8">
          <Image
            src={logo}
            alt={`${name} logo`}
            fill
            className="rounded-full bg-white p-1"
            sizes="32px"
          />
        </div>
        <h3 className="text-white font-semibold text-lg">{name}</h3>
      </div>
    </div>
  );
}
