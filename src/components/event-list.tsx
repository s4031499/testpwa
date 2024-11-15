import Image from "next/image";
import { cn } from "@/lib/utils";

interface EventListProps {
  title: string;
  project: {
    name: string;
    image: string;
  };
  time: string;
  date: string;
  type: string;
  status: "completed" | "pending" | "registered";
}

export function EventList({
  title,
  project,
  time,
  date,
  type,
  status,
}: EventListProps) {
  const statusConfig = {
    completed: {
      text: "Kết thúc",
      color: "bg-gray-100 text-gray-600",
    },
    pending: {
      text: "Chưa diễn ra",
      color: "bg-orange-100 text-orange-600",
    },
    registered: {
      text: "Đã đăng ký",
      color: "bg-green-100 text-green-600",
    },
  };

  return (
    <div
      className={cn(
        "bg-white rounded-lg overflow-hidden",
        status === "registered" && "ring-1 ring-green-100"
      )}
    >
      <div className="p-4">
        <div className="flex justify-between items-start mb-3">
          <span
            className={cn(
              "text-xs px-3 py-1 rounded-full",
              statusConfig[status].color
            )}
          >
            {statusConfig[status].text}
          </span>
          <span className="text-xs text-gray-500">{type}</span>
        </div>

        <div className="flex gap-3">
          <div className="relative w-16 h-16 flex-shrink-0">
            <Image
              src={project.image}
              alt={project.name}
              fill
              className="rounded-lg object-cover"
              sizes="64px"
            />
          </div>
          <div>
            <p className="text-sm text-gray-500">Dự án: {project.name}</p>
            <h3 className="font-medium mt-1 line-clamp-2">{title}</h3>
          </div>
        </div>

        <div className="flex items-center space-x-2 mt-3">
          <svg
            className="h-4 w-4 text-gray-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span className="text-sm text-gray-500">
            {time} {date}
          </span>
        </div>
      </div>

      {status === "registered" && (
        <div className="bg-green-50 p-2 flex items-center justify-center space-x-2">
          <svg
            className="h-4 w-4 text-green-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
          <span className="text-sm text-green-600">Đã đăng ký</span>
        </div>
      )}
    </div>
  );
}
