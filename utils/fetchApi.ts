import NotFound from "@/app/not-found";

export async function getData(query: string) {
  const res = await fetch("https://thinkpro.vn/" + query, {
    cache: "no-store",
    next: { revalidate: 10 },
  });
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
