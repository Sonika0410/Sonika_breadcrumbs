import React from "react";
import { Button, Card, CardDeck } from "react-bootstrap";
import { Link } from "react-router-dom";

export const Plans = () => (
  <CardDeck className="justify-content-center mt-50">
    <Card className="text-center" style={{ width: "18rem", flex: "none" }}>
      <Card.Header>
        <h4 className="my-0 font-weight-normal">Free</h4>
      </Card.Header>
      <Card.Body>
        <Card.Title as="h1">
          Rs.0 <small className="text-muted">/ mo</small>
        </Card.Title>
        <ul class="list-unstyled mt-3 mb-4">
          <li>10 users included</li>
          <li>2 GB of storage</li>
          <li>Email support</li>
          <li>Help center access</li>
        </ul>
        <Button as={Link} to="/pricing/checkout" variant="outline-primary">
          Sign up for free
        </Button>
      </Card.Body>
    </Card>
  </CardDeck>
);
