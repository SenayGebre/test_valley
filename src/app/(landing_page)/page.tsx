import ProductList from "@/components/product/ProductList";
import ShortcutList from "@/components/shortcut/ShortcutList";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between md:px-24">
      <ShortcutList />
      <ProductList />
    </main>
  );
}
