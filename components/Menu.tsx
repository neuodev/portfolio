import React, { useEffect, useRef, useState } from "react";

const Menu = () => {
  const [activeIdx, setActive] = useState<number>(1);
  const ref = useRef<HTMLElement>(null);
  const menuRef = useRef<HTMLElement>(null);
  const borderRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!ref.current || !menuRef.current || !borderRef.current) return;

    const offsetActiveItem = ref.current.getBoundingClientRect();
    const left =
      Math.floor(
        offsetActiveItem.top -
          menuRef.current.offsetTop -
          (borderRef.current.offsetHeight - offsetActiveItem.height) / 2
      ) + "px";

    borderRef.current.style.transform = `translate3d(0, ${left}, 0) rotate(90deg)`;
  }, [ref, activeIdx]);
  return (
    <div>
      <menu className="menu" ref={menuRef}>
        <button
          ref={activeIdx === 1 ? ref : null}
          className={`menu__item ${activeIdx === 1 && "active"}`}
          onClick={() => setActive(1)}
          style={{}}
        >
          <svg className="icon" viewBox="0 0 24 24">
            <path d="M3.8,6.6h16.4" />
            <path d="M20.2,12.1H3.8" />
            <path d="M3.8,17.5h16.4" />
          </svg>
        </button>

        <button
          ref={activeIdx === 2 ? ref : null}
          onClick={() => setActive(2)}
          className={`menu__item ${activeIdx === 2 && "active"}`}
        >
          <svg className="icon" viewBox="0 0 24 24">
            <path
              d="M6.7,4.8h10.7c0.3,0,0.6,0.2,0.7,0.5l2.8,7.3c0,0.1,0,0.2,0,0.3v5.6c0,0.4-0.4,0.8-0.8,0.8H3.8
        C3.4,19.3,3,19,3,18.5v-5.6c0-0.1,0-0.2,0.1-0.3L6,5.3C6.1,5,6.4,4.8,6.7,4.8z"
            />
            <path d="M3.4,12.9H8l1.6,2.8h4.9l1.5-2.8h4.6" />
          </svg>
        </button>

        <button
          ref={activeIdx === 3 ? ref : null}
          onClick={() => setActive(3)}
          className={`menu__item ${activeIdx === 3 && "active"}`}
        >
          <svg className="icon" viewBox="0 0 24 24">
            <path d="M3.4,11.9l8.8,4.4l8.4-4.4" />
            <path d="M3.4,16.2l8.8,4.5l8.4-4.5" />
            <path d="M3.7,7.8l8.6-4.5l8,4.5l-8,4.3L3.7,7.8z" />
          </svg>
        </button>

        <button className="menu__item">
          <svg className="icon" viewBox="0 0 24 24">
            <path
              d="M5.1,3.9h13.9c0.6,0,1.2,0.5,1.2,1.2v13.9c0,0.6-0.5,1.2-1.2,1.2H5.1c-0.6,0-1.2-0.5-1.2-1.2V5.1
          C3.9,4.4,4.4,3.9,5.1,3.9z"
            />
            <path d="M4.2,9.3h15.6" />
            <path d="M9.1,9.5v10.3" />
          </svg>
        </button>

        <button className="menu__item">
          <svg className="icon" viewBox="0 0 24 24">
            <path
              d="M5.1,3.9h13.9c0.6,0,1.2,0.5,1.2,1.2v13.9c0,0.6-0.5,1.2-1.2,1.2H5.1c-0.6,0-1.2-0.5-1.2-1.2V5.1
          C3.9,4.4,4.4,3.9,5.1,3.9z"
            />
            <path d="M5.5,20l9.9-9.9l4.7,4.7" />
            <path d="M10.4,8.8c0,0.9-0.7,1.6-1.6,1.6c-0.9,0-1.6-0.7-1.6-1.6C7.3,8,8,7.3,8.9,7.3C9.7,7.3,10.4,8,10.4,8.8z" />
          </svg>
        </button>

        <div className="menu__border" ref={borderRef}></div>
      </menu>

      <div className="svg-container">
        <svg viewBox="0 0 202.9 45.5">
          <clipPath
            id="menu"
            clipPathUnits="objectBoundingBox"
            transform="scale(0.0049285362247413 0.021978021978022)"
          >
            <path
              d="M6.7,45.5c5.7,0.1,14.1-0.4,23.3-4c5.7-2.3,9.9-5,18.1-10.5c10.7-7.1,11.8-9.2,20.6-14.3c5-2.9,9.2-5.2,15.2-7
          c7.1-2.1,13.3-2.3,17.6-2.1c4.2-0.2,10.5,0.1,17.6,2.1c6.1,1.8,10.2,4.1,15.2,7c8.8,5,9.9,7.1,20.6,14.3c8.3,5.5,12.4,8.2,18.1,10.5
          c9.2,3.6,17.6,4.2,23.3,4H6.7z"
            />
          </clipPath>
        </svg>
      </div>
    </div>
  );
};

export default Menu;
