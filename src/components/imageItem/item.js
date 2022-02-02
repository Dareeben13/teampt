import { useEffect, useRef } from "react";
import leaf from "../../assets/leaf.jpg";
import dog from "../../assets/dog.jpg";
import hibiscus from "../../assets/hibiscus.jpg";
import man from "../../assets/man.jpg";
import burger from "../../assets/burger.jpg";
import "./item.css";
import { gsap } from "gsap";
import { useHistory } from "react-router-dom";

export const ImageItem = ({ image, top, btm, setDetail }) => {
  const history = useHistory();
  const imageRef = useRef(null);
  const boxRef = useRef(null);
  const overlayRef = useRef(null);
  const sliceRef = useRef(null);
  const topRef = useRef(null);
  const bottomRef = useRef(null);
  const cursorRef = useRef(null);

  let tl = gsap.timeline();
  let g = gsap.timeline();

  useEffect(() => {
    tl.from(boxRef.current, { width: "100px", duration: 1 }, 0.2).to(boxRef.current, { width: "400px", duration: 1 }, 0.2);
    tl.from(sliceRef.current, { duration: 0 }, 0).to(sliceRef.current, { display: "flex", ease: "Power0.easeNone" }, 0.5);
    tl.to(overlayRef.current, { opacity: "0", duration: 0.1 }, 0.1);
    tl.to(imageRef.current, { duration: 0.5, filter: "grayscale(0)" }, 0);

    tl.reverse();
  }, []);

  let posX = 0,
    posY = 0;

  let mouseX = 0,
    mouseY = 0;

  useEffect(() => {
    gsap.to(
      {},
      {
        repeat: -1,
        duration: 0.016,
        onRepeat: function () {
          posX += (mouseX - posX) / 9;
          posY += (mouseY - posY) / 9;

          gsap.set(cursorRef.current, {
            css: {
              left: mouseX,
              top: mouseY,
            },
          });
        },
      }
    );
  });

  return (
    <div
      onClick={() => {
        setDetail(() => ({ text: btm, image }));
        // setTimeout(() => {
        history.push("/details");
        // }, 500);
      }}
      onMouseLeave={() => {
        // tl.to(sliceRef.current, { display: "none", duration: 0 }, 0.1);
        tl.reverse();
      }}
      ref={boxRef}
      onMouseEnter={(e) => {
        gsap.timeline().from(topRef.current, {
          duration: 1,
          y: 30,
          ease: "power4",
          // stagger: 0.1,
        });
        gsap.timeline().from(bottomRef.current, {
          duration: 1,
          y: -10,
          ease: "power4",
          // stagger: 0.1,
        });

        tl.play();
      }}
      onMouseMove={(e) => (mouseX === e.clientX && mouseY === e.clientY ? null : ((mouseX = e.clientX), (mouseY = e.clientY)))}
      className="box c-pointer"
      id={top}
    >
      <div ref={imageRef} className="hov-img fill" style={{ backgroundImage: `url(${image})` }} />
      <div className="uncover">
        <div ref={overlayRef} className="gradOverlay"></div>
        <div ref={sliceRef} className="image-text-wrap">
          <h1 ref={topRef} className="image-text-top">
            {top}
          </h1>
          <p ref={bottomRef} className="image-text-btm">
            AX <br /> {btm}
          </p>
        </div>
      </div>
      <div ref={cursorRef} className="view-pointer">
        View
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
    image: dog,
    top: "06",
    btm: "SPACE",
  },
];

export const ImageItems = ({ setDetail }) => {
  const el = useRef();
  const q = gsap.utils.selector(el);
  const cursorRef = useRef(null);

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
          duration: 1.3,
          stagger: { amount: 0.8 },
          ease: "expo.in",
        },
      })
      .add("in")
      .from(".box", {
        yPercent: 100,
        transformOrigin: "top",
        opacity: "0",
      })
      .to(".box", {
        yPercent: 0,
        transformOrigin: "bottom",
        opacity: "1",
      });
    setTimeout(() => {
      r.play("in");
    }, 1000);
  }, []);
  return (
    <div className="d-flex photo-flex" ref={el}>
      {_Items.map((item, index) => (
        <ImageItem setDetail={setDetail} key={index} {...item} />
      ))}
    </div>
  );
};
