import Link from "next/link";
import { Bill } from "@/lib/bills";

export default function BillList({ bills }: { bills: Bill[] }) {
  return (
    <ul>
      {bills.map((bill) => (
        <li key={bill.id} className="p-2 border-b">
          <Link href={`/bill-details/${bill.id}`}>
            <strong>{bill.title}</strong> - ${bill.amount}
          </Link>
        </li>
      ))}
    </ul>
  );
}
