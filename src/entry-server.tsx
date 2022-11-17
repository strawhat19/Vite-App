import Router from './Router';
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";

declare global {
  interface IRenderProps {
    path: string;
  }
}

export const render = ({ path }: IRenderProps) => {
  return ReactDOMServer.renderToString(
    <StaticRouter location={path}>
      <Router />
    </StaticRouter>
  );
};