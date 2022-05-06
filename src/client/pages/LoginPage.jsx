import { React, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import './login.css';

export default function LoginPage() {
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const idHandler = (e) => setUserName(e.target.value);

  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };

  function validateFormFields() {
    return username.length > 0 && password.length > 0;
  }
  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div className="App">
      <Form onSubmit={handleSubmit}>
        <h1> Login </h1>

        <Form.Group controlId="Username">
          <Form.Label>Username</Form.Label>
          <Form.Control
            autoFocus
            type="text"
            value={username}
            placeholder="Enter"
            onChange={idHandler}
          />
        </Form.Group>
        <Form.Group controlId="password" bsSize="large">
          <Form.Label>password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            placeholder="pasword"
            // the listener belongs to the initial render and
            // is not updated on subsequent rerenders.
            onChange={passwordHandler}
          />
        </Form.Group>
        <Button
          block
          bsSize="large"
          disabled={!validateFormFields()}
          type="submit"
        >
          Login
        </Button>
      </Form>
      {username}
    </div>
  );
}
