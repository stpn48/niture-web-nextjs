import { storeItem } from "@/app/types";

export async function fetchStoreItems(
  query: string,
  tags: string[],
): Promise<storeItem[]> {
  const queryParams = new URLSearchParams();

  if (query) queryParams.append("q", query);
  if (tags.length > 0) queryParams.append("tags", JSON.stringify(tags));

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/storeItems?${queryParams.toString()}`,
  );

  if (!res.ok) throw new Error("Failed to fetch items");

  return res.json();
}
