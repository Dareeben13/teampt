import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Nav } from "../components/nav/nav";
import { useHistory } from "react-router-dom";
import leaf from "../assets/leaf.jpg";

export const DetailsPage = ({ detail }) => {
  console.log(detail);
  const svgRef = useRef(null);
  const rtRef = useRef(null);
  const detailRef = useRef(null);
  const imgRef = useRef(null);
  const history = useHistory();

  useEffect(() => {
    const tl = gsap.timeline();
    tl.from(svgRef.current, {
      duration: 1,
      opacity: 1,
      ease: "power3.inOut",
      xPercent: 0,
    })
      .to(svgRef.current, {
        xPercent: 200,
        ease: "power3.inOut",
      })
      .to(svgRef.current, {
        xPercent: -100,
      })
      .to(svgRef.current, {
        xPercent: 0,
      });

    tl.play();
  }, []);

  useEffect(() => {
    const tl = gsap.timeline();
    tl.from(rtRef.current, {
      duration: 2,
      yPercent: 40,
      ease: "power3.inOut",
    })
      .to(rtRef.current, {
        duration: 0.1,
        yPercent: 0,
        ease: "power3.inOut",
      })
      .to(rtRef.current, {
        duration: 1,
        xPercent: 40,
      })
      .to(imgRef.current, {
        duration: 2,
        width: "300px",
        objectFit: "cover",
        height: "100vh",
      })
      .to(rtRef.current, {
        display: "none",
      });

    tl.play();
  }, []);

  useEffect(() => {
    const tl = gsap.timeline();
    tl.from(
      detailRef.current,
      {
        duration: 2,
        width: "40%",
        // opacity: 0,
        display: "none",
        ease: "expo.inOut",
      },
      4.99
    ).to(detailRef.current, {
      duration: 1,
      width: "-webkit-fill-available",
      display: "block",
      //   opacity: 1,
    });
    tl.play();
  }, []);

  return (
    <>
      <div ref={rtRef} style={{ display: "flex", height: "100vh", justifyContent: "center", alignItems: "center" }}>
        <img ref={imgRef} style={{ height: "350px", width: "350px" }} src={detail?.image} />
      </div>
      <div ref={detailRef} className="details-page">
        <Nav inverted={true} />
        <div className="d-flex d-b">
          <div className="d-flex upo">
            <span onClick={() => history.push("/")} className="span">
              x
            </span>
            <h3 className="d-h">03</h3>
          </div>
          <div className="d-flex d-pi">
            <h1 className="dp-h">
              AX <br /> {detail?.text}
            </h1>
            <div className="d-flex bot-dp">
              <p className="dp-p">Emerging stronger</p>
              <div className="d-flex ytt">
                <svg className="svg" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd">
                  <path ref={svgRef} d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z" />
                </svg>
                <h3 className="typ">DISCOVER</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="d-im" style={{ backgroundImage: `url(${detail?.image})` }} />
      </div>
    </>
  );
};
