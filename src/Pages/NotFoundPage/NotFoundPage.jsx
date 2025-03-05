import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <>
      <b>Sorry.. Not found page..</b>
      <p>
        please visit out <Link to="/">home page</Link>
      </p>
    </>
  );
}
