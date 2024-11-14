import { Input } from "@/components/ui/input";
import { Bell } from "lucide-react";
import React from "react";

const page = (props: Props) => {
  return (
    <div>
      {" "}
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
      Quy Can
    </div>
  );
};

export default page;
