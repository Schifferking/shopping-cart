import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <div>
      <h1>Oops, this page doesn&apos;t exist</h1>
      <Link to="/">Click here to return to home</Link>
    </div>
  );
}

export default ErrorPage;
