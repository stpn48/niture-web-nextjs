import { LoadingBar } from "@/components/LoadingBar";
import React from "react";

type Props = {};

export default function loading({}: Props) {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center gap-2 p-10">
      <h1>Niture</h1>
      <LoadingBar />
    </div>
  );
}
