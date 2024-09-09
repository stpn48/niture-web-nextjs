import { LoadingBar } from "@/components/LoadingBar";
import React from "react";

type Props = {};

export default function loading({}: Props) {
  return (
    <div className="w-screen gap-2 h-screen flex flex-col justify-center items-center p-10">
      <h1>Niture</h1>
      <LoadingBar />
    </div>
  );
}
