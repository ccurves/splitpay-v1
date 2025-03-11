// export default function ReminderButton({ title }: { title: string }) {
//   const sendReminder = () => {
//     if (window.Telegram.WebApp) {
//       window.Telegram.WebApp.showAlert(`Reminder sent for: ${title}`);
//     }
//   };

//   return (
//     <button
//       onClick={sendReminder}
//       className="bg-red-500 text-white px-4 py-2 rounded"
//     >
//       🔔 Send Reminder
//     </button>
//   );
// }

export default function ReminderButton({ title }: { title: string }) {
  const sendReminder = () => {
    if (typeof window !== "undefined" && window.Telegram?.WebApp) {
      window.Telegram.WebApp.showAlert(`Reminder sent for: ${title}`);
    } else {
      console.warn("Telegram WebApp not detected.");
    }
  };

  return (
    <button
      onClick={sendReminder}
      className="bg-red-500 text-white px-4 py-2 rounded"
    >
      🔔 Send Reminder
    </button>
  );
}
