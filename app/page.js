'use client';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import CustomNavbar from './components/header';

export default function Home() {
  const cardsData = [
    { img: '/pexels-kampus-7289723.jpg', title: 'Learn Anywhere', desc: 'Access our resources from anywhere, anytime.' },
    { img: '/pexels-max-fischer-5872176.jpg', title: 'Expert Guidance', desc: 'Get mentorship from industry experts.' },
    { img: '/pexels-pavel-danilyuk-6407632.jpg', title: 'Community Support', desc: 'Join a network of like-minded learners.' },
    { img: '/pexels-kampus-7289723.jpg', title: 'Hands-on Projects', desc: 'Work on real-world challenges.' },
    { img: '/pexels-max-fischer-5872176.jpg', title: 'Career Growth', desc: 'Boost your career with our programs.' },
    { img: '/pexels-pavel-danilyuk-6407632.jpg', title: 'Flexible Learning', desc: 'Learn at your own pace with flexible schedules.' }
  ];

  return (
    <>
      <CustomNavbar />

      {/* Hero Section */}
      <section
        className="text-center text-light d-flex align-items-center"
        style={{
          height: '70vh',
          background: "url('/pexels-kampus-7289723.jpg') center/cover no-repeat",
        }}
      >
        <Container>
          <h1 className="display-4 fw-bold">Welcome to MyApp</h1>
          <p className="lead mb-4">
            Your one-stop solution for learning, networking, and growth.
          </p>
          <Button variant="primary" size="lg">Get Started</Button>
        </Container>
      </section>

      {/* Features Section */}
      <Container className="my-5">
        <h2 className="text-center fw-bold mb-4">Our Features</h2>
        <Row>
          {cardsData.map((card, idx) => (
            <Col key={idx} lg={4} md={6} sm={12} className="mb-4">
              <Card className="h-100 shadow-sm border-0">
                <Card.Img
                  variant="top"
                  src={card.img}
                  alt={card.title}
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                <Card.Body>
                  <Card.Title className="fw-bold">{card.title}</Card.Title>
                  <Card.Text>{card.desc}</Card.Text>
                  <Button variant="outline-primary" size="sm">Learn More</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Footer */}
      <footer className="bg-light text-center py-4 mt-5 border-top">
        <p className="mb-0">© {new Date().getFullYear()} MyApp. All rights reserved.</p>
      </footer>
    </>
  );
}
