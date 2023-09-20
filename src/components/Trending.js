import { Card, Container, Row, Col, Image } from "react-bootstrap";
import dune from "../assets/duene.jpg";
import everything from "../assets/everything.jpg";
import john from "../assets/john.jpeg";
import lightyear from "../assets/lightyear.jpeg";
import tokosebelah from "../assets/toko-sebelah.jpg";
import morbius from "../assets/morbius.jpg";
import axios from "axios";
import { useState, useEffect } from "react";

export const Trending = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/discover/movie`, {
        params: {
          api_key: process.env.REACT_APP_TMDB_KEY,
        },
      })
      .then((response) => {
        setMovies(response.data.results);
      });
  }, []);
  return (
    <div>
      <Container>
        <h1 className="text-white">TRENDING MOVIES</h1>
        <Row>
          {movies.map((result, index) => {
            return (
              <Col md={4} className="movieWrapper" id="trending" key={index}>
                <Card className="movieImg">
                  <Image
                    src={`${process.env.REACT_APP_IMG_URL}/${result.poster_path}`}
                    alt="image movies"
                    className="images"
                  />
                  <div className="bg-dark">
                    <div className="m-1 p-2 text-white">
                      <Card.Title className="text-center">
                        {result.title}
                      </Card.Title>
                      <Card.Text className="text-left">
                        {result.overview}
                      </Card.Text>
                      <Card.Text className="text-left">
                        {result.release_date}
                      </Card.Text>
                    </div>
                  </div>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};
