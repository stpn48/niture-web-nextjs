import { storeItem } from "../types";

export async function fetchStoreItems(
  params: string,
): Promise<{ items: storeItem[]; nextCursor: number | null }> {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/storeItems?${params}`,
    );

    await new Promise((resolve) => setTimeout(resolve, 1000));

    if (!res.ok) {
      throw new Error("Failed to fetch items");
    }
    const data = await res.json();
    return data;

  } catch (error) {
    console.error(error);
    return { items: [], nextCursor: null };
  }
}
