import { Link } from "react-router-dom";
import Section from "../../components/Section/Section";
import Container from "../../components/Container/Container";

export default function NotFoundPage() {
  return (
    <Section>
      <div>
        <Container>
          <div>
            <h1>404</h1>
            <p>Oops! Page not found.</p>
            <p>The page you’re looking for doesn’t exist or was moved.</p>
            <Link to="/">Go Home</Link>
          </div>
        </Container>
      </div>
    </Section>
  );
}
