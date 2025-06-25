import Card from "@/components/Card";
import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Card
        name="Crunchy Butterscotch"
        descripcion="Buttercotch & Cashews"
        precio="18Bs"
      />
      <Card
        name="Supermans Secret"
        descripcion="Buttercotch & Cashews"
        precio="21Bs"
      />
      <Card
        name="Wonder Woman Shake"
        descripcion="Buttercotch & Cashews"
        precio="19Bs"
      />
    </div>
  );
}
