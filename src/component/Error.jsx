import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div>
            <h1>This route doesn't exist.</h1>
            <Link to="/">
                Back to Home
            </Link>
        </div>
    );
};

export default ErrorPage;