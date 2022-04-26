import { Link } from "react-router-dom";

export default function App() {
  return (
    <div className="nav-links">
        <Link to="/shows">Shows</Link>
        <Link to="/people">People</Link>
        <Link to="/network">Network</Link>
        <Link to="/expenses">Web Channels</Link>
        <Link to="/expenses">Articles</Link>
        <Link to="/expenses">Schedule</Link>
        <Link to="/expenses">Calendar</Link>
        <Link to="/expenses">Countdown</Link>
        <Link to="/expenses">Forums</Link>
    </div>
  );
}