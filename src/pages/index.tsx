
import { useRouter } from "next/router";
import useSWR from "swr";
import * as PokemonAPI from "@/network/pokemon-api";
import PokemonEntry from "@/components/PokemonEntry/PokemonEntry";

export default function Home() {
  const router = useRouter();
  console.log(router);
  const page = parseInt(router.query.page?.toString() || "1");

  const { data, isLoading } = useSWR(
    ["getPokemonPage", page], // we can pass as a key  string or array?the page will be changeable, so we will add a string before that as well
    () => {
      // here we can give the array as an argument ([key,page]) but as we already have page we don't need it
      return PokemonAPI.getPokemonPage(page);
    }
  );
  if (isLoading) {
    return <p>...Loading</p>;
  }
  return (
    <div>
      <h1>Gotta cache &apos;em all</h1>
      <div>
        {data?.results.map((pokemonEntry: any) => (
          <PokemonEntry key={pokemonEntry.name} name={pokemonEntry.name} />
        ))}
      </div>
      <div>
        {data?.previous && (
          <button
            onClick={() =>
              router.push({ query: { ...router.query, page: page - 1 } })
            }
          >
            Previous page
          </button>
        )}
        {data?.next && (
          <button
            onClick={() =>
              router.push({ query: { ...router.query, page: page +1 } })
            }
          >
            Next page
          </button>
        )}
      </div>
    </div>
  );
}
