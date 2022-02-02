import { ImageItems } from "../components/imageItem/item";
import { Nav } from "../components/nav/nav";

export const MainPage = ({ setDetail }) => {
  return (
    <div className="main-page">
      <Nav />
      <main>
        <h1 className="main-text">OUR SECTORS</h1>
        <div className="cprx">
          <ImageItems setDetail={setDetail} />
        </div>
      </main>
    </div>
  );
};
