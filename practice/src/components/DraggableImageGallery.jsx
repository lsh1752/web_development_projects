import { useRef } from "react";
import img1 from "../assets/red_pen.jpg"
import img2 from "../assets/black_pen.jpg"
import img3 from "../assets/blackbol_pen.jpg"
import img4 from "../assets/blue_pen.jpg"
import img5 from "../assets/bluebol_pen.jpg"
import img6 from "../assets/golden_pen.jpg"
import img7 from "../assets/gray_pen.jpg"
import img8 from "../assets/graybol_pen.jpg"
import img9 from "../assets/red_pen.jpg"
import img10 from "../assets/silver_pen.jpg"
import img11 from "../assets/skyblue_pen.jpg"
import img12 from "../assets/yellow_pen.jpg"

const DragScrollGallery = () => {
  const containerRef = useRef(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollStart = useRef(0);

  const imgs = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
    img12,
  ];

  const handleMouseDown = (e) => {
    isDragging.current = true;
    startX.current = e.clientX;
    scrollStart.current = containerRef.current.scrollLeft;
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;
    const x = e.clientX;
    const walk = x - startX.current;
    containerRef.current.scrollLeft = scrollStart.current - walk;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  const handleMouseLeave = () => {
    isDragging.current = false;
  };

  return (
    // <div
    //   className="w-full overflow-hidden flex-shrink-0"
    //   onMouseDown={handleMouseDown}
    //   onMouseMove={handleMouseMove}
    //   onMouseUp={handleMouseUp}
    //   onMouseLeave={handleMouseLeave}
    // >
    //   <div
    //     ref={containerRef}
    //     className="flex gap-4 overflow-x-scroll cursor-grab active:cursor-grabbing select-none flex-shrink-0"
    //     style={{width: "266px", height: "500px", display: "flex", flexDirection: "row", overflowX: "hidden", marginTop: "11px"}}
    //   >
    //     {imgs.map((img, index) => (
    //       <img
    //         key={index}
    //         src={img}
    //         alt={`img-${index + 1}`}
    //         className="rounded-lg flex-shrink-0 object-cover"
    //         style={{ width: "290px", height: "390px", borderRadius: "20px", marginRight: "20px"}}
    //         draggable={false}
    //       />
    //     ))}
    //   </div>
    // </div>
    <div
    className="w-full overflow-hidden flex-shrink-0"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}>

    </div>
  );
};

export default DragScrollGallery;
