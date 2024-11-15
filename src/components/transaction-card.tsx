import Image from "next/image";
import { Phone, MessageCircle } from "lucide-react";

interface TransactionCardProps {
  date: string;
  price: string;
  deposit: string;
  commission?: string;
  customer: {
    name: string;
    hasZalo: boolean;
    hasPhone: boolean;
  };
  project: {
    name: string;
    logo: string;
  };
  unit: {
    code: string;
    block: string;
    number: string;
    area: string;
  };
  status: "pending" | "approved" | "completed";
}

export function TransactionCard({
  date,
  price,
  deposit,
  commission,
  customer,
  project,
  unit,
  status,
}: TransactionCardProps) {
  const statusConfig = {
    pending: {
      text: "Chờ duyệt",
      color: "bg-orange-500",
    },
    approved: {
      text: "Đã cọc",
      color: "bg-blue-600",
    },
    completed: {
      text: "Hoàn tất",
      color: "bg-green-500",
    },
  };

  return (
    <div className="bg-white rounded-lg p-4 shadow-sm">
      <div className="flex justify-between items-start mb-4">
        <span className="text-gray-500 text-sm">{date}</span>
        <span
          className={`text-white text-sm px-3 py-1 rounded-full ${statusConfig[status].color}`}
        >
          {statusConfig[status].text}
        </span>
      </div>

      <div className="space-y-3">
        <div className="flex justify-between">
          <span className="text-gray-500">Giá trị (vnđ)</span>
          <span className="font-medium">{price}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-500">Tiền cọc (vnđ)</span>
          <span className="font-medium">{deposit}</span>
        </div>
        {commission && (
          <div className="flex justify-between">
            <span className="text-gray-500">Hoa hồng (vnđ)</span>
            <span className="font-medium">{commission}</span>
          </div>
        )}
      </div>

      <div className="mt-4 pt-4 border-t">
        <div className="flex justify-between items-center mb-3">
          <div className="flex items-center space-x-2">
            <span className="text-gray-500">Khách hàng</span>
            <span className="font-medium">{customer.name}</span>
          </div>
          <div className="flex space-x-2">
            {customer.hasPhone && (
              <button className="p-1.5 bg-blue-50 text-blue-600 rounded-full">
                <Phone className="h-4 w-4" />
              </button>
            )}
            {customer.hasZalo && (
              <button className="p-1.5 bg-blue-50 text-blue-600 rounded-full">
                <MessageCircle className="h-4 w-4" />
              </button>
            )}
          </div>
        </div>

        <div className="flex justify-between items-center mb-3">
          <span className="text-gray-500">Dự án</span>
          <div className="flex items-center space-x-2">
            <div className="relative w-5 h-5">
              <Image
                src={project.logo}
                alt={project.name}
                fill
                className="rounded-full object-cover"
                sizes="20px"
              />
            </div>
            <span className="font-medium">{project.name}</span>
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between">
            <span className="text-gray-500">Mã căn</span>
            <span className="font-medium text-blue-600">{unit.code}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">Phân khu</span>
            <span className="font-medium">{unit.area}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">Tòa</span>
            <span className="font-medium">{unit.block}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">Căn hộ</span>
            <span className="font-medium">{unit.number}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
