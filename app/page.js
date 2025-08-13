'use client';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Card } from 'react-bootstrap';
import CustomNavbar from './components/header';

export default function Home() {
  const cardsData = [
    { img: '/pexels-kampus-7289723.jpg', title: 'Card Title 1', desc: 'This is a short description for card 1.' },
    { img: '/pexels-max-fischer-5872176.jpg', title: 'Card Title 2', desc: 'This is a short description for card 2.' },
    { img: '/pexels-pavel-danilyuk-6407632.jpg', title: 'Card Title 3', desc: 'This is a short description for card 3.' },
    { img: '/pexels-kampus-7289723.jpg', title: 'Card Title 4', desc: 'This is a short description for card 4.' },
    { img: '/pexels-max-fischer-5872176.jpg', title: 'Card Title 5', desc: 'This is a short description for card 5.' },
    { img: '/pexels-pavel-danilyuk-6407632.jpg', title: 'Card Title 6', desc: 'This is a short description for card 6.' },
    { img: '/pexels-kampus-7289723.jpg', title: 'Card Title 7', desc: 'This is a short description for card 7.' },
    { img: '/pexels-max-fischer-5872176.jpg', title: 'Card Title 8', desc: 'This is a short description for card 8.' },
    { img: '/pexels-pavel-danilyuk-6407632.jpg', title: 'Card Title 9', desc: 'This is a short description for card 9.' }
  ];

  return (
    <>
      <CustomNavbar />
      <Container className="my-5" style={{ paddingTop: '80px' }}>
        <Row>
          {cardsData.map((card, idx) => (
            <Col key={idx} lg={4} md={6} sm={12} className="mb-4">
              <Card className="h-100 shadow-sm">
                <Card.Img
                  variant="top"
                  src={card.img}
                  alt={card.title}
                  style={{ height: '150px', objectFit: 'cover' }}
                />
                <Card.Body>
                  <Card.Title>{card.title}</Card.Title>
                  <Card.Text>{card.desc}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

