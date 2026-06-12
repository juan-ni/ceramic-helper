"use client";

import { useState } from "react";
import Link from "next/link";

const machinePlasters = [
  {
    id: "gr",
    name: "GR",
    label: "기계용",
    waterRatio: 58,
  },
  {
    id: "ch",
    name: "CH",
    label: "가압틀용",
    waterRatio: 73,
  },
  {
    id: "m30",
    name: "M-30",
    label: "케이스용",
    waterRatio: 45,
  },
];

const quickAmounts = [3, 3.5, 4, 4.5, 5, 5.5, 6, 7, 8, 10, 12, 14];

export default function MachinePage() {
  const [selected, setSelected] = useState(machinePlasters[0]);
  const [plasterKg, setPlasterKg] = useState(5);

  const waterKg = plasterKg * (selected.waterRatio / 100);

  return (
    <main className="min-h-screen bg-stone-100 p-5">
      <div className="mx-auto max-w-md">
        <Link href="/" className="mb-4 inline-block text-stone-500">
          ← 처음으로
        </Link>

        <h1 className="mb-2 text-2xl font-bold">⚙️ 기계용 계산</h1>

        <p className="mb-6 text-stone-600">
          기계용, 가압틀용, 케이스용 석고의 물 양을 계산해요.
        </p>

        <p className="mb-3 font-semibold">용도 선택</p>

        <div className="mb-6 space-y-3">
          {machinePlasters.map((item) => (
            <button
              key={item.id}
              onClick={() => setSelected(item)}
              className={`w-full rounded-3xl p-5 text-left shadow-sm ${
                selected.id === item.id ? "bg-amber-200" : "bg-white"
              }`}
            >
              <p className="text-lg font-bold">
                {item.label} ({item.name})
              </p>
              <p className="mt-1 text-sm text-stone-500">
                물비 {item.waterRatio}%
              </p>
            </button>
          ))}
        </div>

        <p className="mb-3 font-semibold">자주 쓰는 석고량</p>

        <div className="mb-6 grid grid-cols-4 gap-2">
          {quickAmounts.map((kg) => (
            <button
              key={kg}
              onClick={() => setPlasterKg(kg)}
              className={`rounded-2xl p-3 text-sm font-bold shadow-sm ${
                plasterKg === kg ? "bg-amber-200" : "bg-white"
              }`}
            >
              {kg}kg
            </button>
          ))}
        </div>

        <label className="block">
          <p className="mb-2 font-semibold">석고량 직접 입력(kg)</p>
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
            <p className="text-2xl font-bold">
              {selected.label} ({selected.name})
            </p>
          </div>

          <div className="mb-4 rounded-2xl bg-stone-100 p-4">
            <p className="text-stone-500">석고</p>
            <p className="text-3xl font-bold">{plasterKg.toFixed(1)}kg</p>
          </div>

          <div className="rounded-2xl bg-amber-100 p-4">
            <p className="text-stone-600">물</p>
            <p className="text-3xl font-bold">{waterKg.toFixed(1)}kg</p>
          </div>

          <p className="mt-5 text-sm text-stone-500">
            기준: {selected.name} 물비 {selected.waterRatio}%입니다.
          </p>
        </div>
      </div>
    </main>
  );
}