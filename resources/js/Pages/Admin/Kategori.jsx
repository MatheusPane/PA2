import { useState } from "react";
import { useForm } from "@inertiajs/react";

export default function AdminCategori({ categories = [] }) {
    const { data, setData, post, delete: destroy } = useForm({ name: "" });
    const [editing, setEditing] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (editing) {
            post(`/admin/categories/${editing}`, { method: "put" });
        } else {
            post("/admin/categories");
        }
        setEditing(null);
        setData("name", "");
    };

    return (
        <div className="p-6 bg-white shadow-md rounded-md">
            <h2 className="text-2xl font-bold mb-4">Kelola Kategori</h2>
            <form onSubmit={handleSubmit} className="mb-4 flex">
                <input 
                    type="text" 
                    value={data.name} 
                    onChange={(e) => setData("name", e.target.value)} 
                    className="border p-2 mr-2 flex-1" 
                    placeholder="Nama Kategori" 
                />
                <button type="submit" className="bg-blue-500 text-white p-2">
                    {editing ? "Update" : "Tambah"}
                </button>
            </form>
            <ul>
                {categories.length > 0 ? (
                    categories.map((cat) => (
                        <li key={cat.id} className="flex justify-between p-2 border-b">
                            {cat.name}
                            <div>
                                <button 
                                    onClick={() => { setEditing(cat.id); setData("name", cat.name); }} 
                                    className="text-blue-500"
                                >
                                    Edit
                                </button>
                                <button 
                                    onClick={() => destroy(`/admin/categories/${cat.id}`, { method: "delete" })} 
                                    className="text-red-500 ml-2"
                                >
                                    Hapus
                                </button>
                            </div>
                        </li>
                    ))
                ) : (
                    <p className="text-gray-500">Tidak ada kategori tersedia.</p>
                )}
            </ul>
        </div>
    );
}