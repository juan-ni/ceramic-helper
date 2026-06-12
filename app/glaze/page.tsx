"use client";

import { useState } from "react";
import Link from "next/link";

export default function GlazePage() {
  const [glazePerPiece, setGlazePerPiece] = useState(150);
  const [count, setCount] = useState(10);
  const [extraRate, setExtraRate] = useState(20);

  const baseGlaze = glazePerPiece * count;
  const totalGlaze = baseGlaze * (1 + extraRate / 100);

  const presets = [
    { name: "머그컵", gram: 150 },
    { name: "밥공기", gram: 120 },
    { name: "면기", gram: 250 },
    { name: "20cm 접시", gram: 220 },
    { name: "25cm 접시", gram: 350 },
    { name: "작은 화병", gram: 300 },
  ];

  return (
    <main className="min-h-screen bg-stone-100 p-5">
      <div className="mx-auto max-w-md">
        <Link href="/" className="mb-4 inline-block text-stone-500">
          ← 처음으로
        </Link>

        <h1 className="mb-2 text-2xl font-bold">🧪 유약 계산</h1>

        <p className="mb-6 text-stone-600">
          작품 1개당 유약량과 개수를 넣으면 필요한 유약량을 계산해요.
        </p>

        <div className="mb-6 rounded-3xl bg-amber-50 p-5">
          <h2 className="mb-3 font-bold">참고용 유약량 기준</h2>

          <div className="space-y-2 text-sm">
            <p>☕ 머그컵 : 120~180g</p>
            <p>🍚 밥공기 : 100~150g</p>
            <p>🥣 면기 : 200~300g</p>
            <p>🍽 20cm 접시 : 180~260g</p>
            <p>🍽 25cm 접시 : 300~400g</p>
            <p>🏺 작은 화병 : 250~400g</p>
          </div>

          <p className="mt-3 text-xs text-stone-500">
            담금, 분무, 붓칠 방식에 따라 달라질 수 있습니다.
          </p>
        </div>

        <div className="mb-6">
          <p className="mb-3 font-semibold">빠른 선택</p>

          <div className="grid grid-cols-2 gap-3">
            {presets.map((item) => (
              <button
                key={item.name}
                onClick={() => setGlazePerPiece(item.gram)}
                className="rounded-2xl bg-white p-4 text-left shadow-sm active:scale-[0.98]"
              >
                <p className="font-bold">{item.name}</p>
                <p className="text-sm text-stone-500">{item.gram}g</p>
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <Input
            label="작품 1개당 유약량(g)"
            value={glazePerPiece}
            onChange={setGlazePerPiece}
          />

          <Input label="작품 개수" value={count} onChange={setCount} />

          <Input label="여유분(%)" value={extraRate} onChange={setExtraRate} />
        </div>

        <div className="mt-6 rounded-3xl bg-white p-6 shadow">
          <h2 className="mb-4 text-xl font-bold">필요한 유약량</h2>

          <div className="mb-4 rounded-2xl bg-stone-100 p-4">
            <p className="text-stone-500">기본 유약량</p>
            <p className="text-2xl font-bold">
              {(baseGlaze / 1000).toFixed(1)}kg
            </p>
          </div>

          <div className="rounded-2xl bg-stone-100 p-4">
            <p className="text-stone-500">여유분 포함</p>
            <p className="text-3xl font-bold">
              {(totalGlaze / 1000).toFixed(1)}kg
            </p>
          </div>

          <p className="mt-5 text-sm text-stone-500">
            실제 사용량은 유약 농도, 시유 방식, 작품 흡수율에 따라 달라질 수 있어요.
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