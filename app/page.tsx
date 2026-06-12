import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-stone-100 px-5 py-8">
      <div className="mx-auto max-w-md">
        <p className="mb-2 text-sm text-stone-500">초보자를 위한</p>

        <h1 className="mb-3 text-3xl font-bold text-stone-900">
          도자기 제작 도우미
        </h1>

        <p className="mb-8 text-stone-600">
          무엇을 만들지 고르면 필요한 양을 쉽게 알려드려요.
        </p>

        <div className="space-y-4">
  <Link
    href="/shrink"
    className="block rounded-3xl bg-white p-6 shadow-sm active:scale-[0.98]"
  >
    <div className="text-3xl">📏</div>
    <h2 className="mt-3 text-xl font-bold">수축률 계산</h2>
    <p className="mt-1 text-stone-500">
      완성 치수와 성형 치수를 계산해요.
    </p>
  </Link>

  <Link
    href="/plaster"
    className="block rounded-3xl bg-white p-6 shadow-sm active:scale-[0.98]"
  >
    <div className="text-3xl">🧱</div>
    <h2 className="mt-3 text-xl font-bold">석고/몰드 계산</h2>
    <p className="mt-1 text-stone-500">
      석고와 물 양을 계산해요.
    </p>
  </Link>
  <Link
  href="/machine"
  className="block rounded-3xl bg-white p-6 shadow-sm active:scale-[0.98]"
>
  <div className="text-3xl">⚙️</div>
  <h2 className="mt-3 text-xl font-bold">기계용 계산</h2>
  <p className="mt-1 text-stone-500">
    GR, CH, M-30 석고 물 양을 계산해요.
  </p>
</Link>

  <Link
    href="/clay"
    className="block rounded-3xl bg-white p-6 shadow-sm active:scale-[0.98]"
  >
    <div className="text-3xl">☕</div>
    <h2 className="mt-3 text-xl font-bold">흙량 계산</h2>
    <p className="mt-1 text-stone-500">
      작품 개수에 맞는 흙량을 계산해요.
    </p>
  </Link>

  <Link
  href="/slip"
  className="block rounded-3xl bg-white p-6 shadow-sm active:scale-[0.98]"
>
  <div className="text-3xl">💧</div>
  <h2 className="mt-3 text-xl font-bold">이장 계산</h2>
  <p className="mt-1 text-stone-500">
    몰드 개수에 맞는 이장량을 계산해요.
  </p>
</Link>

  <Link
  href="/glaze"
  className="block rounded-3xl bg-white p-6 shadow-sm active:scale-[0.98]"
>
  <div className="text-3xl">🧪</div>
  <h2 className="mt-3 text-xl font-bold">유약 계산</h2>
  <p className="mt-1 text-stone-500">
    작품 개수에 맞는 유약량을 계산해요.
  </p>
</Link>

  <Link
    href="/price"
    className="block rounded-3xl bg-white p-6 shadow-sm active:scale-[0.98]"
  >
    <div className="text-3xl">💰</div>
    <h2 className="mt-3 text-xl font-bold">원가/판매가 계산</h2>
    <p className="mt-1 text-stone-500">
      재료비와 작업시간으로 가격을 계산해요.
    </p>
  </Link>

</div>
      </div>
    </main>
  );
}