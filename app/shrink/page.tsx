"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { clayShrinkPresets } from "@/data/shrink";
import ResultCard from "@/components/ResultCard";

export default function ShrinkPage() {
  const [selected, setSelected] = useState(clayShrinkPresets[3]);
  const [finalSize, setFinalSize] = useState(10);
  const [history, setHistory] = useState<string[]>([]);

  const makingSize = finalSize / (1 - selected.shrinkRate / 100);

  useEffect(() => {
    const saved = localStorage.getItem("shrink-history");

    if (saved) {
      setHistory(JSON.parse(saved));
    }
  }, []);

  function saveHistory() {
    const newItem = `${selected.name} / 완성 ${finalSize}cm → 성형 ${makingSize.toFixed(
      1
    )}cm`;

    const nextHistory = [newItem, ...history].slice(0, 5);

    setHistory(nextHistory);
    localStorage.setItem("shrink-history", JSON.stringify(nextHistory));
  }
  function clearHistory() {
  setHistory([]);
  localStorage.removeItem("shrink-history");
}

  return (
    <main className="min-h-screen bg-stone-100 p-5">
      <div className="mx-auto max-w-md">
        <Link href="/" className="mb-4 inline-block text-stone-500">
          ← 처음으로
        </Link>

        <h1 className="mb-2 text-2xl font-bold">📏 수축률 계산</h1>

        <p className="mb-6 text-stone-600">
          완성하고 싶은 크기를 넣으면 처음 만들 크기를 알려드려요.
        </p>

        <p className="mb-3 font-semibold">어떤 흙인가요?</p>

        <div className="mb-6 space-y-3">
          {clayShrinkPresets.map((item) => (
            <button
              key={item.id}
              onClick={() => setSelected(item)}
              className={`w-full rounded-3xl p-5 text-left shadow-sm ${
                selected.id === item.id ? "bg-amber-200" : "bg-white"
              }`}
            >
              <div className="text-lg font-bold">{item.name}</div>
              <div className="mt-1 text-sm text-stone-600">
                예상 수축률 {item.shrinkRate}%
              </div>
            </button>
          ))}
        </div>

        <div className="mb-6">
          <p className="mb-2 font-semibold">완성하고 싶은 크기(cm)</p>

          <input
            type="number"
            value={finalSize}
            onChange={(e) => setFinalSize(Number(e.target.value))}
            className="w-full rounded-2xl border p-4 text-lg"
          />
        </div>

        <ResultCard>
          <h2 className="mb-4 text-xl font-bold">처음에는 이렇게 만들어요</h2>

          <div className="rounded-2xl bg-stone-100 p-4">
            <p className="text-stone-500">성형 크기</p>
            <p className="text-3xl font-bold">{makingSize.toFixed(1)}cm</p>
          </div>

          <p className="mt-5 text-sm text-stone-500">
            실제 수축률은 흙, 건조, 소성 온도에 따라 달라질 수 있어요.
          </p>

          <button
            onClick={saveHistory}
            className="mt-5 w-full rounded-2xl bg-stone-900 p-4 font-bold text-white"
          >
            기록 저장하기
          </button>
        </ResultCard>

        {history.length > 0 && (
          <div className="mt-6 rounded-3xl bg-white p-6 shadow">
            <div className="mb-3 flex items-center justify-between">
  <h2 className="text-lg font-bold">최근 계산 기록</h2>

  <button
    onClick={clearHistory}
    className="text-sm text-stone-500"
  >
    삭제
  </button>
</div>

            <div className="space-y-2">
              {history.map((item, index) => (
                <p key={index} className="rounded-xl bg-stone-100 p-3 text-sm">
                  {item}
                </p>
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}