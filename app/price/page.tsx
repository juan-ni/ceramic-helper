"use client";

import { useState } from "react";
import Link from "next/link";

export default function PricePage() {
  const [materialCost, setMaterialCost] = useState(5000);
  const [firingCost, setFiringCost] = useState(3000);
  const [hours, setHours] = useState(2);
  const [hourlyWage, setHourlyWage] = useState(10000);
  const [marginRate, setMarginRate] = useState(30);

  const baseCost = materialCost + firingCost + hours * hourlyWage;
  const price = baseCost * (1 + marginRate / 100);

  return (
    <main className="min-h-screen bg-stone-100 p-5">
      <div className="mx-auto max-w-md">
        <Link href="/" className="mb-4 inline-block text-stone-500">
          ← 처음으로
        </Link>

        <h1 className="mb-2 text-2xl font-bold">💰 판매가 정하기</h1>
        <p className="mb-6 text-stone-600">
          재료비와 작업시간을 넣으면 추천 판매가를 알려드려요.
        </p>

        <div className="space-y-4">
          <Input label="재료비" value={materialCost} onChange={setMaterialCost} />
          <Input label="가마비" value={firingCost} onChange={setFiringCost} />
          <Input label="작업시간" value={hours} onChange={setHours} />
          <Input label="시간당 인건비" value={hourlyWage} onChange={setHourlyWage} />
          <Input label="마진율" value={marginRate} onChange={setMarginRate} />
        </div>

        <div className="mt-6 rounded-3xl bg-white p-6 shadow">
          <p className="text-stone-500">추천 판매가</p>
          <p className="mt-2 text-4xl font-bold">
            {Math.round(price).toLocaleString()}원
          </p>

          <p className="mt-5 text-sm text-stone-500">
            실제 판매가는 브랜드, 완성도, 시장 가격에 따라 조정하세요.
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