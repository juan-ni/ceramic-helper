"use client";

import { useState } from "react";
import Link from "next/link";

export default function SlipPage() {
  const [slipPerMold, setSlipPerMold] = useState(500);
  const [count, setCount] = useState(10);
  const [extraRate, setExtraRate] = useState(20);

  const baseSlip = slipPerMold * count;
  const totalSlip = baseSlip * (1 + extraRate / 100);

  const presets = [
    { name: "작은 컵", ml: 300 },
    { name: "머그컵", ml: 500 },
    { name: "밥공기", ml: 450 },
    { name: "면기", ml: 800 },
    { name: "작은 화병", ml: 900 },
    { name: "큰 화병", ml: 1500 },
  ];

  return (
    <main className="min-h-screen bg-stone-100 p-5">
      <div className="mx-auto max-w-md">
        <Link href="/" className="mb-4 inline-block text-stone-500">
          ← 처음으로
        </Link>

        <h1 className="mb-2 text-2xl font-bold">💧 이장 계산</h1>

        <p className="mb-6 text-stone-600">
          몰드 1개당 이장량과 개수를 넣으면 총 필요한 이장량을 계산해요.
        </p>

        <div className="mb-6 rounded-3xl bg-amber-50 p-5">
          <h2 className="mb-3 font-bold">참고용 이장량 기준</h2>

          <div className="space-y-2 text-sm">
            <p>☕ 작은 컵 : 250~350ml</p>
            <p>☕ 머그컵 : 400~600ml</p>
            <p>🍚 밥공기 : 350~550ml</p>
            <p>🥣 면기 : 700~1000ml</p>
            <p>🏺 작은 화병 : 700~1100ml</p>
            <p>🏺 큰 화병 : 1200~2000ml</p>
          </div>
        </div>

        <div className="mb-6">
          <p className="mb-3 font-semibold">빠른 선택</p>

          <div className="grid grid-cols-2 gap-3">
            {presets.map((item) => (
              <button
                key={item.name}
                onClick={() => setSlipPerMold(item.ml)}
                className="rounded-2xl bg-white p-4 text-left shadow-sm active:scale-[0.98]"
              >
                <p className="font-bold">{item.name}</p>
                <p className="text-sm text-stone-500">{item.ml}ml</p>
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <Input
            label="몰드 1개당 이장량(ml)"
            value={slipPerMold}
            onChange={setSlipPerMold}
          />

          <Input label="몰드 개수" value={count} onChange={setCount} />

          <Input label="여유분(%)" value={extraRate} onChange={setExtraRate} />
        </div>

        <div className="mt-6 rounded-3xl bg-white p-6 shadow">
          <h2 className="mb-4 text-xl font-bold">필요한 이장량</h2>

          <div className="mb-4 rounded-2xl bg-stone-100 p-4">
            <p className="text-stone-500">기본 이장량</p>
            <p className="text-2xl font-bold">
              {(baseSlip / 1000).toFixed(1)}L
            </p>
          </div>

          <div className="rounded-2xl bg-stone-100 p-4">
            <p className="text-stone-500">여유분 포함</p>
            <p className="text-3xl font-bold">
              {(totalSlip / 1000).toFixed(1)}L
            </p>
          </div>

          <p className="mt-5 text-sm text-stone-500">
            실제 사용량은 몰드 흡수율, 주입 시간, 배출량에 따라 달라질 수 있어요.
          </p>
        </div>
      </div>
    </main>
  );
}

function Input({
  label,
  value,
  onChange,
}: {
  label: string;
  value: number;
  onChange: (value: number) => void;
}) {
  return (
    <label className="block">
      <p className="mb-2 font-semibold">{label}</p>

      <input
        type="number"
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full rounded-2xl border p-4 text-lg"
      />
    </label>
  );
}