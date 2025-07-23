import Grid from "../Grid/Grid";
import GridItem from "../GridItem/GridItem";
import style from "./ActorsCast.module.css";

export default function ActorsCast({ actorsList }) {
  return (
    <Grid>
      {actorsList
        .filter((actor) => actor.profile_path !== null)
        .map((actor) => (
          <GridItem key={actor.id}>
            <img
              className={style.image}
              src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
              alt={actor.name}
            />
            <p>{actor.name}</p>
            <p>Character: {actor.character}</p>
          </GridItem>
        ))}
    </Grid>
  );
}
