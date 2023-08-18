import { Card, Container, Row, Col, Image } from "react-bootstrap";
import dune from "../assets/duene.jpg";
import everything from "../assets/everything.jpg";
import john from "../assets/john.jpeg";
import lightyear from "../assets/lightyear.jpeg";
import tokosebelah from "../assets/toko-sebelah.jpg";
import morbius from "../assets/morbius.jpg";

export const Trending = () => {
  return (
    <div>
      <Container>
        <h1 className="text-white">TRENDING MOVIES</h1>
        <Row>
          <Col md={4} className="movieWrapper" id="trending">
            <Card className="movieImg">
              <Image src={dune} alt="dune movies" className="images"/>
              <div className="bg-dark">
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
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
