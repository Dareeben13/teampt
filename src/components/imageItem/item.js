import { useEffect, useRef } from "react";
import leaf from "../../assets/leaf.jpg";
import dog from "../../assets/dog.jpg";
import hibiscus from "../../assets/hibiscus.jpg";
import man from "../../assets/man.jpg";
import moon from "../../assets/moon.jpg";
import burger from "../../assets/burger.jpg";
import "./item.css";
import { gsap } from "gsap";

export const ImageItem = ({ image, top, btm }) => {
  return (
    <div className="image-item-wrapper c-pointer">
      <div className="image-text-wrap">
        <h1 className="image-text-top">{top}</h1>
        <p className="image-text-btm">
          AX <br /> {btm}
        </p>
      </div>
      <div className="xre">
        <div className="image-overlay" />
        <span className="view-pointer">View</span>
        <div className="hov-img" style={{ backgroundImage: `url(${image})` }} />
      </div>
    </div>
  );
};

const _Items = [
  {
    image: leaf,
    top: "01",
    btm: "CARE",
  },
  {
    image: dog,
    top: "02",
    btm: "HOTELS",
  },
  {
    image: hibiscus,
    top: "03",
    btm: "MALLS",
  },
  {
    image: man,
    top: "04",
    btm: "STORES",
  },
  {
    image: burger,
    top: "05",
    btm: "FOODS",
  },
  {
    image: moon,
    top: "06",
    btm: "SPACE",
  },
];

export const ImageItems = () => {
  const el = useRef();
  const q = gsap.utils.selector(el);

  useEffect(() => {
    // gsap.from(q(".image-item-wrapper"), {
    //   stagger: {
    //     amount: 0.2,
    //   },
    //   height: 10,
    //   duration: 1,
    //   repeat: 0,
    //   yoyo: true,
    // });
    let r = gsap
      .timeline({
        paused: true,
        defaults: {
          duration: 1,
          stagger: { amount: 2 },
          ease: "expo.in",
        },
      })
      .add("in")
      .from(".image-item-wrapper", {
        height: 100,
        transformOrigin: "top",
      })
      .addPause()
      .add("out")
      .to(".image-item-wrapper", {
        yPercent: 0,
        height: 0,
        transformOrigin: "bottom",
      });
    setTimeout(() => {
      r.play("in");
    }, 1000);
  }, []);
  return (
    <div className="d-flex photo-flex" ref={el}>
      {_Items.map((item, index) => (
        <ImageItem key={index} {...item} />
      ))}
    </div>
  );
};
