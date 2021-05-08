import React from 'react';
import './Home.scss';
import Drinks1 from '../data/Drinks1.jpg';
import Drinks2 from '../data/Drinks2.jpg';
import Drinks3 from '../data/Drinks3.jpg';
import Drinks4 from '../data/Drinks4.jpg';
import Drinks5 from '../data/Drinks5.jpg';

console.clear();

const slides = [
  {
    image: Drinks1
  },
  {
    image: Drinks2
  },
  {
    image: Drinks3
  },
  {
    image: Drinks4
  },
  {
    image: Drinks5
  }
];

const useTilt = (active) => {
  const ref = React.useRef(null);

  React.useEffect(() => {
    if (!ref.current || !active) {
      return;
    }

    const state = {
      rect: undefined,
      mouseX: undefined,
      mouseY: undefined
    };

    let el = ref.current;

    const handleMouseMove = (e) => {
      if (!el) {
        return;
      }
      if (!state.rect) {
        state.rect = el.getBoundingClientRect();
      }
      state.mouseX = e.clientX;
      state.mouseY = e.clientY;
      const px = (state.mouseX - state.rect.left) / state.rect.width;
      const py = (state.mouseY - state.rect.top) / state.rect.height;

      el.style.setProperty("--px", px);
      el.style.setProperty("--py", py);
    };

    el.addEventListener("mousemove", handleMouseMove);

    return () => {
      el.removeEventListener("mousemove", handleMouseMove);
    };
  }, [active]);

  return ref;
}

const initialState = {
  slideIndex: 0
};

const slidesReducer = (state, event) => {
  if (event.type === "NEXT") {
    return {
      ...state,
      slideIndex: (state.slideIndex + 1) % slides.length
    };
  }
  if (event.type === "PREV") {
    return {
      ...state,
      slideIndex:
        state.slideIndex === 0 ? slides.length - 1 : state.slideIndex - 1
    };
  }
};

const Slide = ({ slide, offset }) => {
  const active = offset === 0 ? true : null;
  const ref = useTilt(active);

  return (
    <div
      ref={ref}
      className="slide"
      data-active={active}
      style={{
        "--offset": offset,
        "--dir": offset === 0 ? 0 : offset > 0 ? 1 : -1
      }}
    >
      <div
        className="slideBackground"
        style={{
          backgroundImage: `url('${slide.image}')`
        }}
      />
      <img style={{ width: "900px", height: "700px" }} src={slide.image}></img>
    </div>
  );
}

const Home = () => {
  const [state, dispatch] = React.useReducer(slidesReducer, initialState);

  return (
    <div className="slides">
      <button onClick={() => dispatch({ type: "PREV" })}>PREV</button>

      {[...slides, ...slides, ...slides].map((slide, i) => {
        let offset = slides.length + (state.slideIndex - i);
        return <Slide slide={slide} offset={offset} key={i} />;
      })}
      <button onClick={() => dispatch({ type: "NEXT" })}>NEXT</button>
    </div>
  );
}

export default Home;