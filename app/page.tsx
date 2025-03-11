"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Bill } from "@/lib/bills";

export default function HomePage() {
  const [bills, setBills] = useState<Bill[]>([]);

  useEffect(() => {
    const storedBills = JSON.parse(localStorage.getItem("bills") || "[]");
    setBills(storedBills);
  }, []);

  return (
    <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md">
      <h1 className="text-xl font-bold mb-4">SplitPay: Group Bill Splitter</h1>
      <Link
        href="/create-bill"
        className="bg-blue-500 text-white px-4 py-2 rounded mb-4 inline-block"
      >
        ➕ Create a Bill
      </Link>
      <ul>
        {bills.map((bill) => (
          <li key={bill.id} className="p-2 border-b">
            <Link href={`/bill-details/${bill.id}`}>
              <strong>{bill.title}</strong> - ${bill.amount}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
