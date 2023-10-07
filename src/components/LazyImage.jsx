import React, { useEffect, useRef, useState } from "react";

function LazyImage(props) {
  const [inView, setInView] = useState(false);
  const ref = useRef();

  let callback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setInView(true);
      }
    });
  };

  console.log("Check Ref", ref.current);

  useEffect(() => {
    let observer = new IntersectionObserver(callback);

    if (ref?.current) {
      observer.observe(ref.current);
    }

    return () => {
      //   if (ref?.current) {
      //     observer.unobserve(ref.current);
      //   }

      observer.disconnect();
    };
  }, []);

  return inView ? (
    <img {...props} />
  ) : (
    <img
      ref={ref}
      style={{ width: "1000px", height: "1000px", backgroundColor: "#ddd" }}
    />
  );
}

export default LazyImage;
