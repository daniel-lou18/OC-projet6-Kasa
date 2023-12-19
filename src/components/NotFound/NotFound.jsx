import { Link } from "react-router-dom";
import Column from "../Column";
import "./notFound.scss";

function NotFound() {
  return (
    <Column className="column-404">
      <h1>404</h1>
      <h2>Oups! La page que vous demandez n'existe pas.</h2>
      <Link to="/">Retourner sur la page d'accueil</Link>
    </Column>
  );
}

export default NotFound;
