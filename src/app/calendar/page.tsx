import { ChevronLeft, ChevronRight } from "lucide-react";
import { EventCalendar } from "@/components/event-calendar";
import { EventList } from "@/components/event-list";
import { BottomNav } from "@/components/bottom-nav";

type EventStatus = "registered" | "completed" | "pending";

interface Event {
  id: string;
  title: string;
  project: {
    name: string;
    image: string;
  };
  time: string;
  date: string;
  type: string;
  status: EventStatus;
}

const events: Event[] = [
  {
    id: "1",
    title: 'Hội thảo "Khám phá Melbourne" - Cơ hội vàng dành cho nhà đầu tư',
    project: {
      name: "Vinhome Smart City",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400",
    },
    time: "10:30",
    date: "08 tháng 10, 2024",
    type: "Sự kiện Lock căn",
    status: "completed",
  },
  {
    id: "2",
    title: 'Hội thảo "Khám phá Melbourne" - Cơ hội vàng dành cho nhà đầu tư',
    project: {
      name: "Vinhome Smart City",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400",
    },
    time: "10:30",
    date: "08 tháng 10, 2024",
    type: "Sự kiện Lock căn",
    status: "pending",
  },
  {
    id: "3",
    title: 'Hội thảo "Khám phá Melbourne" - Cơ hội vàng dành cho nhà đầu tư',
    project: {
      name: "Vinhome Smart City",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400",
    },
    time: "10:30",
    date: "08 tháng 10, 2024",
    type: "Sự kiện Lock căn",
    status: "registered",
  },
];

export default function CalendarPage() {
  return (
    <>
      {/* Header */}
      <div className="bg-blue-600 text-white">
        <div className="p-4 flex items-center space-x-4">
          <ChevronLeft className="h-6 w-6" />
          <h1 className="text-2xl font-bold">Sự kiện</h1>
        </div>

        {/* Month Selector */}
        <div className="px-4 pb-4 flex items-center justify-between">
          <ChevronLeft className="h-5 w-5" />
          <span className="text-lg font-medium">Tháng 10/2024</span>
          <ChevronRight className="h-5 w-5" />
        </div>
      </div>

      {/* Calendar */}
      <EventCalendar />

      {/* Event List */}
      <div className="p-4 pb-24">
        <div className="mb-6">
          <h2 className="text-lg font-medium mb-4">8 thg 10, hôm nay</h2>
          <div className="space-y-4">
            {events.map((event) => (
              <EventList key={event.id} {...event} />
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-lg font-medium mb-4">9 thg 10</h2>
          <div className="space-y-4">
            {events.slice(1).map((event) => (
              <EventList key={event.id} {...event} />
            ))}
          </div>
        </div>
      </div>

      <BottomNav />
    </>
  );
}
