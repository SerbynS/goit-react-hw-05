import { Link, Outlet, useLocation, useParams } from "react-router";
import { getMovieDetails } from "../../services/API";
import { useState, useEffect, useRef } from "react";
import MovieInfo from "../../components/MovieInfo/MovieInfo";
import Section from "../../components/Section/Section";
import Loader from "../../components/Loader/Loader";
import Container from "../../components/Container/Container";

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const location = useLocation();
  const goBackLink = useRef(location.state || "/movies");

  useEffect(() => {
    const getMovieInfo = async () => {
      setLoading(true);
      try {
        const { data } = await getMovieDetails(movieId);
        setMovie(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    getMovieInfo();
  }, [movieId]);

  return (
    <Section>
      <Container>
        <Link to={goBackLink.current}>Go Back</Link>
        {movie && <MovieInfo movie={movie} />}
        {loading && <Loader />}
        {error && (
          <p>`Something went wrong! ${error}. Please try again later`</p>
        )}
        <div>
          <h2>Additional information</h2>
          <div>
            <Link to={"cast"}>Cast</Link>
            <Link to={"reviews"}>Reviews</Link>
          </div>
        </div>
        <Outlet />
      </Container>
    </Section>
  );
}
