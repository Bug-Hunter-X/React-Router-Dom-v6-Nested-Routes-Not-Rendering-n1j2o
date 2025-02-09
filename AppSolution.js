import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Link to="/users/1">User 1</Link>
    </div>
  );
}

function User() {
  const { id } = useParams();
  return (
    <div>
      <h1>User {id}</h1>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users/:id" element={<User />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;