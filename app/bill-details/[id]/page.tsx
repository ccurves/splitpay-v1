"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";

export default function BillDetails() {
  const { id } = useParams();
  const router = useRouter();
  const [bill, setBill] = useState<{ title: string; amount: number } | null>(
    null
  );

  useEffect(() => {
    const bills = JSON.parse(localStorage.getItem("bills") || "[]");
    const foundBill = bills.find((b: { id: string }) => b.id === id);
    setBill(foundBill);
  }, [id]);

  const sendReminder = () => {
    if (typeof window !== "undefined" && window.Telegram?.WebApp) {
      window.Telegram.WebApp.showAlert(
        `Reminder sent to group for: ${bill?.title}`
      );
    } else {
      console.warn("Telegram WebApp not detected.");
    }
  };

  if (!bill) return <p>Loading...</p>;

  return (
    <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold">{bill.title}</h2>
      <p>Amount: ${bill.amount}</p>
      <button
        onClick={sendReminder}
        className="bg-red-500 text-white px-4 py-2 rounded"
      >
        🔔 Send Reminder
      </button>
      <button
        onClick={() => router.push("/")}
        className="bg-gray-500 text-white px-4 py-2 rounded ml-2"
      >
        🔙 Back
      </button>
    </div>
  );
}
