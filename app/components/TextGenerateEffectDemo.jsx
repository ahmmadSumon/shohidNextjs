"use client";
import { TextGenerateEffect } from "../../components/ui/text-generate-effect";

const words = `Our heroes' sacrifices inspire us to stand for justice, freedom, and unity. Their courage lives on in our hearts, reminding us to honor their legacy through our actions and commitment to a better Bangladesh. `;

export function TextGenerateEffectDemo() {
  return <TextGenerateEffect words={words} />;
}
