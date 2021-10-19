import { Link } from "react-router-dom";


export const NotFound: React.FC = ()=> {
    return (
        <div>
            <div>404</div>
            <Link to={`/`}>go home</Link>
        </div>
    )
}