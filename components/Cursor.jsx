import gsap from "gsap";
import { useEffect, useRef } from "react";

/**
 * Generates a cursor that follows the mouse movement and updates its position accordingly.
 *
 * @param {object} isHovered - Indicates if the cursor is being hovered over
 * @return {JSX.Element} The JSX for the cursor component
 */
const Cursor = ({ isHovered }) => {
  const size = isHovered ? 200 : 30;
  const mouse = useRef({
    x: 0,
    y: 0,
  });

  const circle = useRef();
  const delayeMouse = useRef({
    x: 0,
    y: 0,
  });

  const manageMouseMove = (e) => {
    const { clientX, clientY } = e;
    mouse.current = {
      x: clientX,
      y: clientY,
    };
  };

  const lerp = (x, y, a) => x * (1 - a) + y * a;

  const moveCircle = (x, y) => {
    gsap.set(circle.current, { x, y, xPercent: -50, yPercent: -50 });
  };

  const animate = () => {
    const { x, y } = delayeMouse.current;

    delayeMouse.current = {
      x: lerp(x, mouse.current.x, 0.07),
      y: lerp(y, mouse.current.y, 0.07),
    };

    moveCircle(delayeMouse.current.x, delayeMouse.current.y);
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
      className="top-0 left-0 fixed bg-[#d2eef8e5] rounded-full pointer-events-none mix-blend-difference"
      style={{
        width: size,
        height: size,
        filter: `blur(${isHovered ? 3 : 0}px)`,
        transition: `height 0.3s, width 0.3s, filter 0.3s ease-out`,
      }}
    ></div>
  );
};
export default Cursor;
