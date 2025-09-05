import Discover from "@/components/Discover/Index";
import Top from "@/components/Top/Index";
import RootLayout from "@/layouts/RootLayout";

export default function Home() {
  return (
    <RootLayout>
      <article>
        <Discover />
        <Top />
      </article>
    </RootLayout>
  );
}
