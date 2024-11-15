import { cn } from "@/lib/utils";

const weekDays = ["T2", "T3", "T4", "T5", "T6", "T7", "CN"];
const days = Array.from({ length: 31 }, (_, i) => i + 1);

const events = {
  8: { count: 3, type: "primary" },
  10: { count: 2, type: "secondary" },
  11: { count: 1, type: "danger" },
};

export function EventCalendar() {
  return (
    <div className="bg-white p-4">
      {/* Week days */}
      <div className="grid grid-cols-7 mb-2">
        {weekDays.map((day) => (
          <div key={day} className="text-center text-sm text-gray-500">
            {day}
          </div>
        ))}
      </div>

      {/* Calendar days */}
      <div className="grid grid-cols-7 gap-2">
        {/* Empty cells for alignment */}
        <div className="aspect-square" />
        <div className="aspect-square" />
        <div className="aspect-square" />
        <div className="aspect-square" />

        {days.slice(0, 15).map((day) => {
          const hasEvent = day in events;
          const event = events[day as keyof typeof events];

          return (
            <div
              key={day}
              className={cn(
                "aspect-square rounded-full flex items-center justify-center relative",
                day === 8 && "bg-blue-600 text-white",
                hasEvent && day !== 8 && "bg-blue-50"
              )}
            >
              <span className={cn("text-sm", day === 8 && "font-medium")}>
                {day}
              </span>
              {hasEvent && (
                <span
                  className={cn(
                    "absolute -top-1 -right-1 w-4 h-4 rounded-full flex items-center justify-center text-[10px] text-white",
                    event.type === "primary" && "bg-red-500",
                    event.type === "secondary" && "bg-orange-500",
                    event.type === "danger" && "bg-red-500"
                  )}
                >
                  {event.count}
                </span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
