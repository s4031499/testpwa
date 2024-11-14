import { Bell } from "lucide-react";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { ProjectFilter } from "@/components/project-filter";
import { ProjectCard } from "@/components/project-card";
import { BottomNav } from "@/components/bottom-nav";
const recentProjects = [
  {
    name: "Vinhomes Ocean Park",
    logo: "https://images.unsplash.com/photo-1664575601711-67110e027b9b?w=64&h=64&fit=crop",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800",
    status: "Mở bán" as const,
  },
  {
    name: "Vinhomes Golden Avenue",
    logo: "https://images.unsplash.com/photo-1664575601786-b00156752b61?w=64&h=64&fit=crop",
    image: "https://images.unsplash.com/photo-1531971589569-0d9370cbe1e5?w=800",
    status: "Chưa mở bán" as const,
  },
  {
    name: "Vinhomes The Empire",
    logo: "https://images.unsplash.com/photo-1664575601841-64cdb14c7aab?w=64&h=64&fit=crop",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800",
    status: "Hết hàng" as const,
  },
  {
    name: "Vinhomes Ocean Park 3",
    logo: "https://images.unsplash.com/photo-1664575601711-67110e027b9b?w=64&h=64&fit=crop",
    image: "https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?w=800",
    status: "Mở bán" as const,
  },
];

export default function Home() {
  return (
    <>
      {/* Header */}
      <div className="bg-blue-600 text-white p-4 pb-6">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">Dự án</h1>
          <button className="p-2">
            <Bell className="h-6 w-6" />
          </button>
        </div>
        <Input
          placeholder="Tìm kiếm dự án"
          className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
        />
      </div>

      {/* Recent Projects */}
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-4">Xem gần đây</h2>
        <div className="flex space-x-4 overflow-x-auto pb-4 scrollbar-hide">
          {recentProjects.map((project) => (
            <div key={project.name} className="flex-shrink-0">
              <div className="relative w-16 h-16">
                <Image
                  src={project.logo}
                  alt={project.name}
                  fill
                  className="rounded-lg object-cover"
                  sizes="64px"
                />
              </div>
              <p className="text-xs text-center mt-1 w-16 truncate">
                {project.name}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Project List */}
      <div className="p-4 pb-24">
        <h2 className="text-lg font-semibold mb-4">Toàn bộ dự án</h2>
        <ProjectFilter />
        <div className="grid gap-4">
          {recentProjects.map((project) => (
            <ProjectCard key={project.name} {...project} />
          ))}
        </div>
      </div>
    </>
  );
}
