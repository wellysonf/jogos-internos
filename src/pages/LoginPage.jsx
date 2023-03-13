import { useRef } from 'react';

import { useNavigate } from "react-router-dom";

function LoginPage() {
  const user = useRef();
  const pass = useRef();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Submit: User=>${user.current.value}, Senha=>${pass.current.value}`);
    navigate("/");
  }
  return (
    <div className='w-screen h-screen flex flex-col justify-center items-center gap-4 bg_olimpiadas'>
      {/* <div className='bg-white/60 p-8 rounded-xl'>
        <div className='flex flex-col items-center'>
          <img
            alt="Logo IFPE"
            src="img/android-chrome-192x192.png"
            width="80"
            className="d-inline-block align-top"
          />
          <h1>Jogos Internos</h1>
          <h5>IFPE Campus Pesqueira</h5>
        </div>
        <Form className='border-2 rounded-md p-4 bg-white drop-shadow-xl' onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Usuário</Form.Label>
            <Form.Control type="text" placeholder="CPF ou SIAPE" ref={user} required />
            <Form.Text className="text-muted">
              Apenas dígitos, sem pontuação.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Senha</Form.Label>
            <Form.Control type="password" placeholder="Senha" ref={pass} required />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
          <Button variant="primary" type="submit" className='w-full'>
            Entrar
          </Button> 
        </Form>
      </div> */}
    </div>
  );
}

export default LoginPage;