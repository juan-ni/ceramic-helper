"use client";

import { useState } from "react";
import Link from "next/link";

export default function PlasterPage() {
  const [width, setWidth] = useState(15);
  const [depth, setDepth] = useState(12);
  const [height, setHeight] = useState(10);
  const [selectedPlaster, setSelectedPlaster] = useState(plasterTypes[0]);

  const volume = width * depth * height;

  const plasterGram = volume * selectedPlaster.density;
  const waterGram = plasterGram * (selectedPlaster.waterRatio / 100);
const safePlasterGram = plasterGram * 1.15;
const safeWaterGram = waterGram * 1.15;

  const presets = [
    { name: "머그컵 몰드", width: 15, depth: 12, height: 10 },
    { name: "밥공기 몰드", width: 16, depth: 16, height: 8 },
    { name: "20cm 접시 몰드", width: 25, depth: 25, height: 6 },
    { name: "작은 화병 몰드", width: 18, depth: 18, height: 18 },
  ];

  function applyPreset(item: {
    width: number;
    depth: number;
    height: number;
  }) {
    setWidth(item.width);
    setDepth(item.depth);
    setHeight(item.height);
  }

  return (
    <main className="min-h-screen bg-stone-100 p-5">
      <div className="mx-auto max-w-md">
        <Link href="/" className="mb-4 inline-block text-stone-500">
          ← 처음으로
        </Link>

        <h1 className="mb-2 text-2xl font-bold">🧱 석고/몰드 계산</h1>

        <p className="mb-6 text-stone-600">
          몰드 박스 크기와 석고 종류를 넣으면 필요한 석고와 물 양을 계산해요.
        </p>

        <div className="mb-6 rounded-3xl bg-amber-50 p-5">
          <h2 className="mb-3 font-bold">석고 종류 선택</h2>

          <div className="space-y-3">
            {plasterTypes.map((item) => (
              <button
                key={item.id}
                onClick={() => setSelectedPlaster(item)}
                className={`w-full rounded-2xl p-4 text-left shadow-sm ${
                  selectedPlaster.id === item.id ? "bg-amber-200" : "bg-white"
                }`}
              >
                <p className="font-bold">{item.name}</p>
                <p className="text-sm text-stone-500">
                  물비 {item.waterRatio}% · {item.description}
                </p>
              </button>
            ))}
          </div>
        </div>

        <div className="mb-6 rounded-3xl bg-amber-50 p-5">
          <h2 className="mb-3 font-bold">빠른 몰드 크기 선택</h2>

          <div className="grid grid-cols-2 gap-3">
            {presets.map((item) => (
              <button
                key={item.name}
                onClick={() => applyPreset(item)}
                className="rounded-2xl bg-white p-4 text-left shadow-sm active:scale-[0.98]"
              >
                <p className="font-bold">{item.name}</p>
                <p className="text-sm text-stone-500">
                  {item.width}×{item.depth}×{item.height}cm
                </p>
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <Input label="가로(cm)" value={width} onChange={setWidth} />
          <Input label="세로(cm)" value={depth} onChange={setDepth} />
          <Input label="높이(cm)" value={height} onChange={setHeight} />
        </div>

        <div className="mt-6 rounded-3xl bg-white p-6 shadow">
          <h2 className="mb-4 text-xl font-bold">준비량</h2>

          <div className="mb-4 rounded-2xl bg-stone-100 p-4">
            <p className="text-stone-500">선택한 석고</p>
            <p className="text-xl font-bold">{selectedPlaster.name}</p>
          </div>

          <div className="mb-4 rounded-2xl bg-stone-100 p-4">
            <p className="text-stone-500">몰드 박스 부피</p>
            <p className="text-2xl font-bold">{volume.toLocaleString()}㎤</p>
          </div>

          <div className="mb-4 rounded-2xl bg-stone-100 p-4">
            <p className="text-stone-500">석고</p>
            <p className="text-3xl font-bold">
              {(plasterGram / 1000).toFixed(1)}kg
            </p>
          </div>

          <div className="mb-4 rounded-2xl bg-stone-100 p-4">
            <p className="text-stone-500">물</p>
            <p className="text-3xl font-bold">
              {(waterGram / 1000).toFixed(1)}L
            </p>
          </div>
          <div className="rounded-2xl bg-amber-100 p-4">
  <p className="text-stone-600">15% 넉넉하게 준비</p>
  <p className="mt-2 text-xl font-bold">
    석고 {(safePlasterGram / 1000).toFixed(1)}kg · 물{" "}
    {(safeWaterGram / 1000).toFixed(1)}L
  </p>
</div>
<div className="mt-4 grid grid-cols-2 gap-3">
  <div className="rounded-2xl bg-stone-100 p-4">
    <p className="text-stone-500">작업 가능 시간</p>
    <p className="text-lg font-bold">{selectedPlaster.workingTime}</p>
  </div>

  <div className="rounded-2xl bg-stone-100 p-4">
    <p className="text-stone-500">탈형 가능 시간</p>
    <p className="text-lg font-bold">{selectedPlaster.demoldTime}</p>
  </div>
</div>
          <p className="text-sm text-stone-500">
            실제 필요량은 원형 크기, 여유 공간, 석고 제조사 기준에 따라 달라질 수 있어요.
            처음에는 10~20% 정도 넉넉하게 준비하세요.
          </p>
          
        </div>
        
      </div>
    </main>
  );
}

const plasterTypes = [
  {
    id: "ceramic",
    name: "도자기용 석고",
    waterRatio: 70,
    density: 1.25,
    description: "일반 몰드 제작에 무난",
    workingTime: "약 8~12분",
    demoldTime: "약 30~60분",
  },
  {
    id: "casting",
    name: "슬립캐스팅용 석고",
    waterRatio: 75,
    density: 1.2,
    description: "이장 주입 몰드용",
    workingTime: "약 8~15분",
    demoldTime: "약 40~90분",
  },
  {
    id: "hard",
    name: "경석고",
    waterRatio: 60,
    density: 1.35,
    description: "단단한 몰드나 원형 보강용",
    workingTime: "약 5~10분",
    demoldTime: "약 30~60분",
  },
  {
    id: "board",
    name: "석고판용",
    waterRatio: 65,
    density: 1.3,
    description: "석고판, 흙 건조판용",
    workingTime: "약 8~12분",
    demoldTime: "약 30~60분",
  },
];

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