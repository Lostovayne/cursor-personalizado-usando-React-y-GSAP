"use client";
import { useEffect, useReducer, useRef } from "react";
import gsap from "gsap";

const Cursor = () => {
  const size = 30;
  const mouse = useRef({
    x: 0,
    y: 0,
  });

  const circle = useRef();

  const manageMouseMove = (e) => {
    const { clientX, clientY } = e;
    mouse.current = {
      x: clientX,
      y: clientY,
    };
  };

  const larp = (x,y,a) => x * (1 - a) + y * a

  const moveCircle = (x, y) => {
    gsap.set(circle.current, { x, y, xPercent: -50, yPercent: -50 });
  };

  const animate = () => {
    moveCircle(mouse.current.x, mouse.current.y);

    window.requestAnimationFrame(animate);
  };

  useEffect(() => {
    animate();
    window.addEventListener("mousemove", manageMouseMove);
    return () => {
      window.removeEventListener("mousemove", manageMouseMove);
    };
  }, []);

  return (
    <div
      ref={circle}
      className="top-0 left-0 fixed bg-[#BCE4F2] rounded-full"
      style={{
        width: size,
        height: size,
      }}
    ></div>
  );
};
export default Cursor;
