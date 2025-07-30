import { Link, Outlet } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h2>Home Page</h2>
      <nav>
        <Link to="counter">Go to Counter</Link>
      </nav>
      <Outlet />
    </div>
  );
}