// Import necessary hooks from next-auth
import { signOut } from "next-auth/react";

export default function LogOutButton() {
  // Function to handle sign-out
  const handleLogout = async () => {
    await signOut();
  };

  return (
    <div className="flex justify-center">
      <button
        onClick={handleLogout}
        className="flex w-32 items-center justify-center space-x-2 rounded rounded-xl border border-gray-600 bg-gray-800 bg-opacity-50 py-2 shadow-sm transition duration-150 hover:translate-y-0.5 hover:bg-red-400 hover:shadow-lg"
      >
        <span className="font-thin text-white">Log Out</span>
      </button>
    </div>
  );
}
