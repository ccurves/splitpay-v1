"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function CreateBill() {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const router = useRouter();

  const handleSubmit = () => {
    const newBill = {
      id: Date.now().toString(),
      title,
      amount: parseFloat(amount),
      paid: false,
    };
    const bills = JSON.parse(localStorage.getItem("bills") || "[]");
    localStorage.setItem("bills", JSON.stringify([...bills, newBill]));
    router.push("/");
  };

  return (
    <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Create a New Bill</h2>
      <input
        className="border p-2 w-full mb-2"
        placeholder="Bill Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        className="border p-2 w-full mb-2"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button
        onClick={handleSubmit}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        ✅ Save Bill
      </button>
    </div>
  );
}
