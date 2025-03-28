import { Head, useForm } from "@inertiajs/react";
import AdminLayout from "@/Layouts/AdminLayout";

export default function Dashboard({ categories, products }) {
    return (
        <AdminLayout>
            <AdminProduk products={products} categories={categories} />
        </AdminLayout>
    );
}

function AdminProduk({ products = [], categories = [] }) {
    const { data, setData, post, reset } = useForm({
        title: "",
        description: "",
        price: "",
        status: "available",
        category_id: categories.length > 0 ? categories[0]?.id : "",
        image: null,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("admin.products.store"), {
            onSuccess: () => reset(),
        });
    };

    return (
        <div className="p-6 bg-white shadow-md rounded-md">
            <h2 className="text-2xl font-bold mb-4">Kelola Produk</h2>

            {/* Form Tambah Produk */}
            <form onSubmit={handleSubmit} className="mb-6 p-4 border rounded-md">
                <h3 className="text-lg font-semibold mb-2">Tambah Produk</h3>
                <div className="grid grid-cols-2 gap-4">
                    <input 
                        type="text" 
                        placeholder="Nama Produk" 
                        className="border p-2 rounded w-full" 
                        value={data.title}
                        onChange={(e) => setData("title", e.target.value)}
                        required
                    />
                    <input 
                        type="number" 
                        placeholder="Harga" 
                        className="border p-2 rounded w-full" 
                        value={data.price}
                        onChange={(e) => setData("price", e.target.value)}
                        required
                    />
                </div>
                <div className="mt-2">
                    <textarea 
                        placeholder="Deskripsi" 
                        className="border p-2 rounded w-full"
                        value={data.description}
                        onChange={(e) => setData("description", e.target.value)}
                        required
                    />
                </div>
                <div className="mt-2">
                    <select 
                        className="border p-2 rounded w-full" 
                        value={data.category_id} 
                        onChange={(e) => setData("category_id", e.target.value)}
                    >
                        {categories.length > 0 ? (
                            categories.map((category) => (
                                <option key={category.id} value={category.id}>{category.name}</option>
                            ))
                        ) : (
                            <option value="">Tidak ada kategori</option>
                        )}
                    </select>
                </div>
                <div className="mt-2">
                    <select 
                        className="border p-2 rounded w-full" 
                        value={data.status} 
                        onChange={(e) => setData("status", e.target.value)}
                    >
                        <option value="available">Tersedia</option>
                        <option value="unavailable">Tidak Tersedia</option>
                    </select>
                </div>
                <div className="mt-2">
                    <input 
                        type="file" 
                        className="border p-2 rounded w-full" 
                        onChange={(e) => setData("image", e.target.files[0])}
                        required
                    />
                </div>
                <button 
                    type="submit" 
                    className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                    Tambah Produk
                </button>
            </form>

            {/* Tabel Produk */}
            {products.length === 0 ? (
                <p className="text-gray-500">Tidak ada produk tersedia.</p>
            ) : (
                <table className="w-full border mt-4">
                    <thead>
                        <tr className="bg-gray-200">
                            <th className="p-2">Gambar</th>
                            <th className="p-2">Nama</th>
                            <th className="p-2">Deskripsi</th>
                            <th className="p-2">Harga</th>
                            <th className="p-2">Status</th>
                            <th className="p-2">Kategori</th>
                            <th className="p-2">Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product) => (
                            <tr key={product.id} className="border-t">
                                <td className="p-2">
                                    <img 
                                        src={product.image} 
                                        alt={product.title} 
                                        className="w-12 h-12 object-cover rounded" 
                                    />
                                </td>
                                <td className="p-2">{product.title}</td>
                                <td className="p-2">{product.description}</td>
                                <td className="p-2">Rp {product.price.toLocaleString()}</td>
                                <td className="p-2">{product.status === "available" ? "Tersedia" : "Tidak Tersedia"}</td>
                                <td className="p-2">{product.category?.name || 'Tidak ada kategori'}</td>
                                <td className="p-2">
                                    <button className="bg-yellow-500 text-white px-2 py-1 rounded mr-2 hover:bg-yellow-600">
                                        Edit
                                    </button>
                                    <button className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600">
                                        Hapus
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
}
