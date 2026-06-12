"use client";

import { useState } from "react";
import Link from "next/link";

const plasterTypes = [
  {
    id: "gm30",
    name: "GM-30",
    beginnerName: "케이스 만들 때",
    waterRatio: 45,
    description: "강도가 필요한 케이스 제작용",
  },
  {
    id: "ch",
    name: "CH",
    beginnerName: "압력주입틀 만들 때",
    waterRatio: 70,
    description: "위생도기, 압력주입틀 제작용",
  },
  {
    id: "a",
    name: "석고 A",
    beginnerName: "일반 주입틀 만들 때",
    waterRatio: 75,
    description: "일반 캐스팅 몰드 제작용",
  },
  {
    id: "b",
    name: "석고 B",
    beginnerName: "일반 석고 작업할 때",
    waterRatio: 78,
    description: "일반 작업형 석고",
  },
];

const sizePresets = [
  { label: "작은 것", detail: "소형 컵, 작은 부품", kg: 3 },
  { label: "보통 크기", detail: "머그컵, 밥공기 정도", kg: 5 },
  { label: "큰 것", detail: "큰 그릇, 작은 화병", kg: 8 },
  { label: "아주 큰 것", detail: "큰 화병, 큰 케이스", kg: 12 },
];

export default function PlasterPage() {
  const [selected, setSelected] = useState(plasterTypes[2]);
  const [selectedSize, setSelectedSize] = useState(sizePresets[1]);
  const [plasterKg, setPlasterKg] = useState(5);

  const waterKg = plasterKg * (selected.waterRatio / 100);

  function selectSize(size: (typeof sizePresets)[number]) {
    setSelectedSize(size);
    setPlasterKg(size.kg);
  }

  return (
    <main className="min-h-screen bg-stone-100 p-5">
      <div className="mx-auto max-w-md">
        <Link href="/" className="mb-4 inline-block text-stone-500">
          ← 처음으로
        </Link>

        <h1 className="mb-2 text-2xl font-bold">🧱 석고 계산</h1>

        <p className="mb-6 text-stone-600">
          작업 종류와 크기를 고르면 필요한 석고와 물 양을 계산해요.
        </p>

        <p className="mb-3 font-semibold">무엇을 만들 건가요?</p>

        <div className="mb-6 space-y-3">
          {plasterTypes.map((item) => (
            <button
              key={item.id}
              onClick={() => setSelected(item)}
              className={`w-full rounded-3xl p-5 text-left shadow-sm ${
                selected.id === item.id ? "bg-amber-200" : "bg-white"
              }`}
            >
              <p className="text-lg font-bold">{item.beginnerName}</p>
              <p className="mt-1 text-sm text-stone-600">
                {item.name} · 물비 {item.waterRatio}%
              </p>
              <p className="mt-1 text-xs text-stone-500">
                {item.description}
              </p>
            </button>
          ))}
        </div>

        <p className="mb-3 font-semibold">크기는 어느 정도인가요?</p>

        <div className="mb-6 grid grid-cols-2 gap-3">
          {sizePresets.map((size) => (
            <button
              key={size.label}
              onClick={() => selectSize(size)}
              className={`rounded-3xl p-5 text-left shadow-sm ${
                selectedSize.label === size.label ? "bg-amber-200" : "bg-white"
              }`}
            >
              <p className="font-bold">{size.label}</p>
              <p className="mt-1 text-xs text-stone-500">{size.detail}</p>
              <p className="mt-2 text-sm font-semibold">석고 {size.kg}kg</p>
            </button>
          ))}
        </div>

        <label className="block">
          <p className="mb-2 font-semibold">석고 무게 직접 수정(kg)</p>
          <input
            type="number"
            value={plasterKg}
            onChange={(e) => setPlasterKg(Number(e.target.value))}
            className="w-full rounded-2xl border p-4 text-lg"
          />
        </label>

        <div className="mt-6 rounded-3xl bg-white p-6 shadow">
          <h2 className="mb-4 text-xl font-bold">준비하세요</h2>

          <div className="mb-4 rounded-2xl bg-stone-100 p-4">
            <p className="text-stone-500">선택</p>
            <p className="text-2xl font-bold">{selected.name}</p>
            <p className="text-sm text-stone-500">
              {selected.beginnerName} · {selectedSize.label}
            </p>
          </div>

          <div className="mb-4 rounded-2xl bg-stone-100 p-4">
            <p className="text-stone-500">석고</p>
            <p className="text-3xl font-bold">{plasterKg.toFixed(1)}kg</p>
          </div>

          <div className="mb-4 rounded-2xl bg-amber-100 p-4">
            <p className="text-stone-600">물</p>
            <p className="text-3xl font-bold">{waterKg.toFixed(1)}kg</p>
          </div>

          <p className="text-sm text-stone-500">
            기준: 석고 100kg에 물 {selected.waterRatio}kg 비율입니다.
          </p>
        </div>
      </div>
    </main>
  );
}