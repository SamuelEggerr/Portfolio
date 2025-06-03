
import CoinOnClick from "@/components/coinOnClick";

export default function Home() {
  return (
    <main className="min-h-screen p-10 bg-gray-50 text-center">
      <CoinOnClick />
      <h1 className="text-4xl font-bold text-blue-600">Hi, I'm Samuel</h1>
      <p className="text-lg mt-4 text-gray-700">Welcome to my portfolio!</p>
      <button className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
        View Projects
      </button>
    </main>
  );
}
