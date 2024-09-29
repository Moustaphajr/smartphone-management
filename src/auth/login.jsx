import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
export default function Login() {
  const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    
      if (password == "admin123" && email=="admin@gmail.com") {
          localStorage.setItem('token', "welcome")
          navigate('/');
      } else {
          return;
          
      }
  
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="card shadow" style={{ width: '400px', borderRadius: '15px' }}>
        <div className="card-body">
          <h5 className="card-title text-center">Authentification</h5>
          <form onSubmit={handleLogin}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter votre email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Entrez votre mot de passe"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="d-flex justify-content-center">
              <button type="submit" className="btn btn-primary">Se connecter</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
