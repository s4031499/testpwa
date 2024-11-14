import { Button } from "@/components/ui/button";

const filters = ["Tất cả", "Mở bán", "Chưa mở bán", "Hết hàng"];

export function ProjectFilter() {
  return (
    <div className="flex space-x-2 overflow-x-auto pb-2 mb-4">
      {filters.map((filter) => (
        <Button
          key={filter}
          variant={filter === "Tất cả" ? "default" : "outline"}
          className="whitespace-nowrap"
        >
          {filter}
        </Button>
      ))}
    </div>
  );
}
