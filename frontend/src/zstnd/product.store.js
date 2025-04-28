import { create } from 'zustand'

const store = create((set) => ({
    products: [],
    addProduct: (item) => set((state) => ({products: [...state.products, item]})),
    setProduct: (item) => set({products: item}),
    updateProduct: (id, item) => set((state) => ({products: state.products.map((e) => e._id == id ? {...e, ...item} : e)})),
    deleteProduct: (id) => set((state) => ({products: state.products.filter((e) => e._id !== id)})),
}));

export default store;