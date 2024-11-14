import {
  Building2,
  Calendar,
  Home,
  LayoutGrid,
  ScrollText,
} from "lucide-react";
import Link from "next/link";

export function BottomNav() {
  return (
    <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-[480px] bg-white border-t border-gray-200">
      <div className="flex justify-around items-center h-16">
        <Link href="/" className="flex flex-col items-center text-blue-600">
          <Building2 className="h-6 w-6" />
          <span className="text-xs mt-1">Dự án</span>
        </Link>
        <Link
          href="/quy-can"
          className="flex flex-col items-center text-gray-600"
        >
          <LayoutGrid className="h-6 w-6" />
          <span className="text-xs mt-1">Quỹ căn</span>
        </Link>
        <Link
          href="/transactions"
          className="flex flex-col items-center text-gray-600"
        >
          <ScrollText className="h-6 w-6" />
          <span className="text-xs mt-1">Giao dịch</span>
        </Link>
        <Link
          href="/calendar"
          className="flex flex-col items-center text-gray-600"
        >
          <Calendar className="h-6 w-6" />
          <span className="text-xs mt-1">Lịch</span>
        </Link>
      </div>
    </div>
  );
}
