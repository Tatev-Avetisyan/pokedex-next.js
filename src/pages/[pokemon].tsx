import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import usePokemon from "@/hooks/usePokemon";

export default function PokemonDetailsPage() {
  const router = useRouter();

  const pokemonName = router.query.pokemon?.toString() || "";

  //   const { data: pokemon, isLoading: pokemonLoading } = useSWR(
  //     pokemonName,
  //     PokemonApi.getPokemon
  //   );

  const { pokemon, pokemonLoading } = usePokemon(pokemonName);
  return (
    <>
      <Head>
        {pokemon && <title>{`${pokemon.name} - Next.js Pokédex`}</title>}
      </Head>
      <div>
        <p>
          <Link href="/"> Explore more Pokémon</Link>
        </p>
        {pokemonLoading && <p>...Loading need to be changed</p>}
        {pokemon == null && <p> Pokemon does not found</p>}
        {pokemon && (
          <>
            <h1>{pokemon.name}</h1>
            <Image
              src={pokemon.sprites.other["official-artwork"].front_default}
              alt={pokemon.name}
              width={400}
              height={400}
            />
            <div>
              <div>
                <strong>Types:</strong>
                {"  " + pokemon.types.map((type) => type.type.name).join(",")}
              </div>
              <div>
                <strong>Height:</strong>
                {"  " + pokemon.height * 10} cm
              </div>
              <div>
                <strong>Weight:</strong>
                {"  " + pokemon.weight / 10} kg
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}
