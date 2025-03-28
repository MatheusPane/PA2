import { Link } from "@inertiajs/react";

export default function AdminLayout({ children }) {
    return (
        <div className="flex h-screen bg-gray-100">
            {/* Sidebar */}
            <aside className="w-64 bg-gray-800 text-white p-4 flex flex-col">
                <h2 className="text-xl font-bold mb-4">Admin Panel</h2>
                
                <nav className="flex-1">
                    <ul className="space-y-2">
                        <li>
                            <Link 
                                href="/admin/dashboard" 
                                className="block p-2 rounded hover:bg-gray-700 transition"
                            >
                                Dashboard
                            </Link>
                        </li>
                        <li>
                            <Link 
                                href="/admin/produk" 
                                className="block p-2 rounded hover:bg-gray-700 transition"
                            >
                                Produk
                            </Link>
                        </li>
                    </ul>
                </nav>

                {/* Logout Button */}
                <div className="mt-auto">
                    <Link 
                        href="/logout" 
                        method="post" 
                        as="button" 
                        className="w-full p-2 bg-red-600 hover:bg-red-700 rounded text-center transition"
                    >
                        Logout
                    </Link>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-6">
                <div className="bg-white p-6 rounded shadow-md">
                    {children}
                </div>
            </main>
        </div>
    );
}
