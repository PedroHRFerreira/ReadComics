import Discover from "@/components/Discover/Index";
import RootLayout from "@/layouts/RootLayout";

export default function Home() {
  return (
    <RootLayout>
      <article>
        <Discover />
      </article>
    </RootLayout>
  );
}
