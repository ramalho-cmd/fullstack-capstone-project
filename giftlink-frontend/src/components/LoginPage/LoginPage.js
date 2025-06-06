import React, { useState } from 'react';
import './LoginPage.css';

function LoginPage() {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
 
    const handleLogin = async () => {
        console.log("Dentro do handleLogin");
    }

        return (
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-4">
            <div className="login-card p-4 border rounded">
              <h2 className="text-center mb-4 font-weight-bold">Login</h2>

              <div className="mb-4">
                <label htmlFor="firstName" className="form label"> FirstName</label>
                <input
                id="firstName"
                type="text"
                className="form-control"
                placeholder="Enter your firstName"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                />
            </div>

            <button className="btn btn-primary w-100 mb-3" onClick={handleRegister}>Register</button>
                <p className="mt-4 text-center">
                    Novo aqui? <a href="/app/register" className="text-primary">Registre-se Aqui</a>
                </p>

            </div>
          </div>
        </div>
      </div>
    )
}

export default LoginPage;