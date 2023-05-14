import RootLayout from "./layout";

export default async function Home() {
  const res = await fetch(
    "http://worldtimeapi.org/api/timezone/America/Chicago",
    {
      next: { revalidate: 5 },
    }
  );
  const data = await res.json();

  return (
    <RootLayout>
      <main>{data.datetime}</main>
    </RootLayout>
  );
}
