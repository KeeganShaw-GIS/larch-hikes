"use client";
import Button from "@/components/Button";
import { useRouter } from "next/navigation";

const MAPBOX_TOKEN =
  process.env.NEXT_PUBLIC_MAPBOX_TOKEN &&
  process.env.NEXT_PUBLIC_MAPBOX_TOKEN.replaceAll('"', "");

export default function Home() {
  const { push } = useRouter();
  const handleGoToMap = () => {
    push("/map");
  };
  return (
    <main className="flex flex-col items-center">
      <h1>Larch Finder Page</h1>
      <Button onClick={handleGoToMap}>Go To Map</Button>
    </main>
  );
}
