export const dynamic = "force-dynamic";
import { models } from "@/data/models";
import HomeClient from "@/components/HomeClient";

export default function HomePage() {
  const images = [...models, ...models, ...models];
  return <HomeClient images={images} />;
}
