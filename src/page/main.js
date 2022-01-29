import { ImageItems } from "../components/imageItem/item";
import { Nav } from "../components/nav/nav";

export const MainPage = () => {
  return (
    <>
      <Nav />
      <main>
        <h1 className="main-text">OUR SECTORS</h1>
        <div className="cprx">
          <ImageItems />
        </div>
      </main>
    </>
  );
};
