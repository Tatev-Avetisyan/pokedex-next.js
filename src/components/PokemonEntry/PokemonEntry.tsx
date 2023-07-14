import usePokemon from "@/hooks/usePokemon";
import Link from "next/link";
import React from "react";
import styles from "@/styles/PokemonEntry.module.css";
import Image from "next/image";

const PokemonEntry = ({ name }: { name: string }) => {
  const { pokemon, pokemonLoading } = usePokemon(name);

  return (
    <Link href={"/" + name}>
      <div className={styles.entry}>
        {pokemonLoading && <p>...Loadaing</p>}
        {pokemon && (
          <div className={styles.card}>
            <h1>{pokemon.name}</h1>
            <Image
              src={pokemon.sprites.other["official-artwork"].front_default}
              alt={"Pokemon:" + pokemon.name}
              width={200}
              height={200}
            />
          </div>
        )}
      </div>
    </Link>
  );
};

export default PokemonEntry;
