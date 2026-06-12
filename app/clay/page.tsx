"use client";

import { useState } from "react";
import Link from "next/link";

export default function ClayPage() {
  const [clayPerPiece, setClayPerPiece] = useState(600);
  const [count, setCount] = useState(10);
  const [extraRate, setExtraRate] = useState(15);
  const presets = [
  { name: "카페 머그컵", gram: 600 },
  { name: "대형 머그컵", gram: 850 },
  { name: "밥공기", gram: 400 },
  { name: "면기", gram: 900 },
  { name: "20cm 접시", gram: 800 },
  { name: "25cm 접시", gram: 1100 },
];

  const baseClay = clayPerPiece * count;
  const extraClay = baseClay * (extraRate / 100);
  const totalClay = baseClay + extraClay;

  return (
    <main className="min-h-screen bg-stone-100 p-5">
      <div className="mx-auto max-w-md">
        <Link href="/" className="mb-4 inline-block text-stone-500">
          ← 처음으로
        </Link>

        <h1 className="mb-2 text-2xl font-bold">☕ 흙량 계산</h1>

        <p className="mb-6 text-stone-600">
          작품 1개당 흙량과 개수를 넣으면 총 필요한 흙량을 계산해요.
        </p>
        <div className="mb-6 rounded-3xl bg-amber-50 p-5">
  <h2 className="mb-3 font-bold">
    참고용 흙량 기준
  </h2>

  <div className="space-y-2 text-sm">
    <p>☕ 카페 머그컵 (300ml) : 500~700g</p>
    <p>☕ 대형 머그컵 (500ml) : 700~1000g</p>
    <p>🍚 밥공기 : 300~500g</p>
    <p>🥣 면기 : 700~1200g</p>
    <p>🍽 20cm 접시 : 600~900g</p>
    <p>🍽 25cm 접시 : 900~1400g</p>
    <p>🏺 작은 화병 : 700~1200g</p>
  </div>

  <p className="mt-3 text-xs text-stone-500">
    작업 방식과 두께에 따라 달라질 수 있습니다.
  </p>
</div>
<div className="mb-6">
  <p className="mb-3 font-semibold">빠른 선택</p>

  <div className="grid grid-cols-2 gap-3">
    {presets.map((item) => (
      <button
        key={item.name}
        onClick={() => setClayPerPiece(item.gram)}
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
            label="작품 1개당 흙량(g)"
            value={clayPerPiece}
            onChange={setClayPerPiece}
          />

          <Input
            label="작품 개수"
            value={count}
            onChange={setCount}
          />

          <Input
            label="여유분(%)"
            value={extraRate}
            onChange={setExtraRate}
          />
        </div>

        <div className="mt-6 rounded-3xl bg-white p-6 shadow">
          <h2 className="mb-4 text-xl font-bold">필요한 흙량</h2>

          <div className="mb-4 rounded-2xl bg-stone-100 p-4">
            <p className="text-stone-500">기본 흙량</p>
            <p className="text-2xl font-bold">
              {(baseClay / 1000).toFixed(1)}kg
            </p>
          </div>

          <div className="mb-4 rounded-2xl bg-stone-100 p-4">
            <p className="text-stone-500">여유분 포함</p>
            <p className="text-3xl font-bold">
              {(totalClay / 1000).toFixed(1)}kg
            </p>
            <p className="mt-2 text-sm text-stone-500">
  약 {Math.ceil(totalClay / 10000)}덩이 기준
</p>
          </div>

          <p className="text-sm text-stone-500">
            건조 중 손실, 실패분, 다듬기 손실을 고려해 여유분을 넣어 계산합니다.
          </p>
        </div>
        <div className="mt-6 rounded-3xl bg-white p-6 shadow">
  <h2 className="mb-4 text-xl font-bold">
    생산 가능 수량
  </h2>

  <div className="space-y-3">
    <div className="rounded-2xl bg-stone-100 p-4">
      <p className="text-stone-500">10kg 흙 1덩이</p>

      <p className="text-2xl font-bold">
        {Math.floor(10000 / clayPerPiece)}개
      </p>
    </div>
  </div>
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