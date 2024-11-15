import { Bell, Filter, ShoppingBag } from "lucide-react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TransactionCard } from "@/components/transaction-card";
import { BottomNav } from "@/components/bottom-nav";

const transactions = [
  {
    id: "1",
    date: "20:30, 18/07/2020",
    price: "4,890,650,000",
    deposit: "50,000,000",
    commission: "650,000",
    customer: {
      name: "Trần Anh Dũng",
      hasZalo: true,
      hasPhone: true,
    },
    project: {
      name: "VH Ocean Park 3",
      logo: "https://images.unsplash.com/photo-1664575601711-67110e027b9b?w=64&h=64&fit=crop",
    },
    unit: {
      code: "#VH12345",
      block: "OCP1",
      number: "1216",
      area: "Nam",
    },
    status: "pending" as const,
  },
  {
    id: "2",
    date: "20:30, 18/07/2020",
    price: "5,890,123,000",
    deposit: "50,000,000",
    commission: "650,000",
    customer: {
      name: "Nguyễn Đức Yên",
      hasZalo: true,
      hasPhone: true,
    },
    project: {
      name: "VH Ocean Park 3",
      logo: "https://images.unsplash.com/photo-1664575601711-67110e027b9b?w=64&h=64&fit=crop",
    },
    unit: {
      code: "#VH12345",
      block: "OCP1",
      number: "1216",
      area: "Nam",
    },
    status: "approved" as const,
  },
  {
    id: "3",
    date: "20:30, 18/07/2020",
    price: "4,890,650,000",
    deposit: "50,000,000",
    commission: "650,000",
    customer: {
      name: "Trần Anh Dũng",
      hasZalo: true,
      hasPhone: true,
    },
    project: {
      name: "VH Ocean Park 3",
      logo: "https://images.unsplash.com/photo-1664575601711-67110e027b9b?w=64&h=64&fit=crop",
    },
    unit: {
      code: "#VH12345",
      block: "OCP1",
      number: "1216",
      area: "Nam",
    },
    status: "completed" as const,
  },
];

export default function TransactionsPage() {
  return (
    <>
      {/* Header */}
      <div className="bg-blue-600 text-white p-4">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center space-x-4">
            <h1 className="text-2xl font-bold">Giao dịch</h1>
            <Filter className="h-5 w-5" />
          </div>
          <div className="flex items-center space-x-4">
            <ShoppingBag className="h-6 w-6" />
            <Bell className="h-6 w-6" />
          </div>
        </div>

        {/* Tabs */}
        <div className="flex space-x-4 text-sm">
          <button className="font-medium border-b-2 border-white pb-4">
            Giao dịch của tôi
          </button>
          <button className="text-white/60 pb-4">Danh sách hệ thống</button>
        </div>
      </div>

      {/* Status Tabs */}
      <div className="p-4">
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="w-full h-auto flex flex-wrap gap-2 bg-transparent">
            <TabsTrigger
              value="all"
              className="data-[state=active]:bg-blue-600 data-[state=active]:text-white rounded-full"
            >
              Tất cả (120)
            </TabsTrigger>
            <TabsTrigger
              value="pending"
              className="data-[state=active]:bg-blue-600 data-[state=active]:text-white rounded-full"
            >
              Chờ duyệt (20)
            </TabsTrigger>
            <TabsTrigger
              value="approved"
              className="data-[state=active]:bg-blue-600 data-[state=active]:text-white rounded-full"
            >
              Đã cọc (50)
            </TabsTrigger>
            <TabsTrigger
              value="cancelled"
              className="data-[state=active]:bg-blue-600 data-[state=active]:text-white rounded-full"
            >
              Hủy cọc (10)
            </TabsTrigger>
            <TabsTrigger
              value="contract"
              className="data-[state=active]:bg-blue-600 data-[state=active]:text-white rounded-full"
            >
              Ký HĐMB (20)
            </TabsTrigger>
            <TabsTrigger
              value="completed"
              className="data-[state=active]:bg-blue-600 data-[state=active]:text-white rounded-full"
            >
              Hoàn tất (10)
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      {/* Transaction List */}
      <div className="p-4 pb-24">
        <div className="space-y-4">
          {transactions.map((transaction) => (
            <TransactionCard key={transaction.id} {...transaction} />
          ))}
        </div>
      </div>

      <BottomNav />
    </>
  );
}
