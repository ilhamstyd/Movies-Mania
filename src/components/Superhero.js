import { Card, Container, Row, Col, Image } from "react-bootstrap";
import antmen from "../assets/antmen.jpg";

export const SuperHero = () => {
  return (
    <div>
      <Container>
        <h1 className="text-white">SUPERHERO MOVIES</h1>
        <Row>
          <Col md={4} className="movieWrapper" id="superhero">
            <Card className="movieImg bg-dark">
              <Image src={antmen} alt="dune movies" className="images" />
              <div className="m-1 p-2 text-white">
                <Card.Title className="text-center">DUNE</Card.Title>
                <Card.Text className="text-left">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
                <Card.Text className="text-left">
                  Last updated 3 mins ago
                </Card.Text>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
