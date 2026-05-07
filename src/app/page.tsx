import { VariantA } from "@/variants/VariantA";
import { VariantB } from "@/variants/VariantB";
import { VariantC } from "@/variants/VariantC";

const VARIANT = (process.env.NEXT_PUBLIC_LP_VARIANT || "c").toLowerCase();

export default function Page() {
  if (VARIANT === "a") return <VariantA />;
  if (VARIANT === "b") return <VariantB />;
  return <VariantC />;
}
