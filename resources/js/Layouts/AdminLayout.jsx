import { Link } from "@inertiajs/react";
import { FiLogOut, FiGrid, FiShoppingCart, FiFolder, FiClipboard, FiPlusSquare } from 'react-icons/fi';

export default function AdminLayout({ children }) {
    return (
        <div className="flex h-screen bg-gradient-to-br from-[#fdfaf6] to-[#f5eee5]">
            {/* Sidebar */}
            <aside className="w-64 bg-[#3e2f23] text-white flex flex-col p-6 shadow-xl">
                <h2 className="text-3xl font-bold mb-10 tracking-wider text-center">Cafe Del</h2>

                <nav className="flex-1">
                    <ul className="space-y-4">
                        <li>
                            <Link 
                                href="/admin/dashboard" 
                                className="flex items-center gap-3 p-3 rounded-lg hover:bg-[#5a4233] transition font-medium"
                            >
                                <FiGrid /> Dashboard
                            </Link>
                        </li>
                        <li>
                            <Link 
                                href="/admin/produk" 
                                className="flex items-center gap-3 p-3 rounded-lg hover:bg-[#5a4233] transition font-medium"
                            >
                                <FiShoppingCart /> Produk
                            </Link>
                        </li>
                        <li>
                            <Link 
                                href="/admin/kategori" 
                                className="flex items-center gap-3 p-3 rounded-lg hover:bg-[#5a4233] transition font-medium"
                            >
                                <FiFolder /> Kategori
                            </Link>
                        </li>
                        <li>
                            <Link 
                                href="/admin/orders" 
                                className="flex items-center gap-3 p-3 rounded-lg hover:bg-[#5a4233] transition font-medium"
                            >
                                <FiClipboard /> Pesanan
                            </Link>
                        </li>
                        <li>
                            <Link
                                href={route('admin.order.create')}
                                className="flex items-center gap-3 p-3 rounded-lg hover:bg-[#5a4233] transition font-medium"
                            >
                                <FiPlusSquare /> Manual Order
                            </Link>
                        </li>
                    </ul>
                </nav>

                {/* Logout Button */}
                <div className="mt-10">
                    <Link 
                        href="/logout" 
                        method="post" 
                        as="button" 
                        className="w-full flex items-center justify-center gap-2 p-3 bg-red-500 hover:bg-red-600 rounded-lg text-center transition font-semibold"
                    >
                        <FiLogOut /> Logout
                    </Link>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-8 overflow-auto">
                <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200 min-h-full">
                    {children}
                </div>
            </main>
        </div>
    );
}
