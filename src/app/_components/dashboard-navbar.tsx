export function DashboardNav() {
  return (
    <nav className="w-64 bg-gray-800 p-5 text-white">
      <h2 className="mb-6 text-2xl font-semibold">Navbar</h2>
      <ul className="space-y-4">
        <li>
          <a
            href="/home/profile"
            className="text-white transition duration-200 hover:text-gray-300"
          >
            Profile
          </a>
        </li>
        <li>
          <a
            href="/about"
            className="text-white transition duration-200 hover:text-gray-300"
          >
            About
          </a>
        </li>
        <li>
          <a
            href="/contact"
            className="text-white transition duration-200 hover:text-gray-300"
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}
