import { Link } from "@inertiajs/react";
import AdminLayout from "@/Layouts/AdminLayout";

export default function Index({ orders = [] }) {
    return (
        <AdminLayout>
            <div className="p-6 bg-white shadow-md rounded-md">
                <h2 className="text-2xl font-bold mb-4">Daftar Pesanan</h2>

                <table className="w-full border mt-4">
                    <thead>
                        <tr className="bg-gray-200">
                            <th className="p-2">Nomor Pesanan</th>
                            <th className="p-2">Pelanggan</th>
                            <th className="p-2">Total</th>
                            <th className="p-2">Status</th>
                            <th className="p-2">Produk</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.length > 0 ? (
                            orders.map((order) => (
                                <tr key={order.id} className="border-t">
                                    <td className="p-2">{order.order_number}</td>
                                    <td className="p-2">{order.user?.name || "Tidak diketahui"}</td>
                                    <td className="p-2">Rp {Number(order.total_amount).toLocaleString('id-ID')}</td>
                                    <td className="p-2">{order.status}</td>
                                    <td className="p-2">
                                        <ul className="list-disc pl-4">
                                            {order.items.map((item) => (
                                                <li key={item.id}>
                                                    {item.product?.name || "Produk tidak diketahui"} ({item.quantity} x Rp {Number(item.unit_price).toLocaleString('id-ID')})
                                                </li>
                                            ))}
                                        </ul>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="5" className="p-2 text-center">
                                    Belum ada pesanan.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </AdminLayout>
    );
}