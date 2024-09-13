import { FadeAnimationWrapper } from "@/components/FadeAnimationWrapper";
import { SearchBar } from "@/app/store/components/SearchBar";
import { StoreItems } from "@/app/store/components/StoreItems";
import { FilterBar } from "@/app/store/components/FilterBar";
import { fetchStoreItems } from "../utils/fetchStoreItems";

export default async function Store() {

  const initialItems = await fetchStoreItems("page=1");

  return (
    <FadeAnimationWrapper>
      <div className="bg-[#ffffff] px-10 pt-16">
        <div className="flex flex-col items-center">
          <SearchBar/>
          <FilterBar />
          <StoreItems initialItems={initialItems.items} />
        </div>
      </div>
    </FadeAnimationWrapper>
  );
}
