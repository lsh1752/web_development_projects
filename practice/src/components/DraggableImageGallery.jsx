import { useRef } from "react";
import "./css/DraggableImageGallery.css";
import img1 from "../assets/red_pen.jpg";
import img2 from "../assets/black_pen.jpg";
import img3 from "../assets/blackbol_pen.jpg";
import img4 from "../assets/blue_pen.jpg";
import img5 from "../assets/bluebol_pen.jpg";
import img6 from "../assets/golden_pen.jpg";
import img7 from "../assets/gray_pen.jpg";
import img8 from "../assets/graybol_pen.jpg";
import img9 from "../assets/red_pen.jpg";
import img10 from "../assets/silver_pen.jpg";
import img11 from "../assets/skyblue_pen.jpg";
import cursur from "../assets/cursur.gif";
import left from "../assets/left_arr.gif"
import right from "../assets/right_arr.gif"

const DragScrollGallery = () => {
  const containerRef = useRef(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollStart = useRef(0);

  const imgs = [
    { src: img1, title: "프리미엄 펜", content: "프러스펜 3000 프라임" },
    { src: img2, title: "프리미엄펜", content: "153 리스펙트 리파인" },
    { src: img3, title: "만년필", content: "153 아이디 만년필" },
    { src: img4, title: "만년필", content: "153 네오 만년필 EF" },
    { src: img5, title: "프리미엄펜", content: "153 블랙 & 화이트" },
    { src: img6, title: "프리미엄펜", content: "153 골드" },
    { src: img7, title: "프리미엄펜", content: "153 아이디" },
    { src: img8, title: "프리미엄펜", content: "60주년 프러스펜 3000 데스크펜 스페셜 에디션" },
    { src: img9, title: "고급샤프", content: "153 아이디 샤프" },
    { src: img10, title: "프리미엄펜", content: "153 네오" },
    { src: img11, title: "프리미엄펜", content: "153 리스펙트" },
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
<div
  className="w-full overflow-hidden flex-shrink-0 select-none"
  onMouseDown={handleMouseDown}
  onMouseMove={handleMouseMove}
  onMouseUp={handleMouseUp}
  onMouseLeave={handleMouseLeave}
>
  <div
    ref={containerRef}
    className="flex gap-4 cursor-grab active:cursor-grabbing  flex-shrink-0 hide-scrollbar"
    style={{
      width: "100%",
      marginTop: "11px",
      display: "flex",
      flexDirection: "row",
      overflow: "scroll"
    }}
  >
    {imgs.map((item, index) => (
      <div
        key={index}
        className="relative flex-shrink-0"
        style={{
          width: "266px",
          height: "505px",
          marginRight: "18px",
          display: "flex",
          flexDirection: "column"
        }}
      >
        <img
          src={item.src}
          alt={`img-${index + 1}`}
          className="object-cover"
          id="Drag-img"
          width="266"
          height="390"
          draggable={false}
          onDragStart={(e) => e.preventDefault()}
        />
        <div
          className="absolute bottom-0 left-0 w-full text-white text-sm p-2"
          id="Drag-text-div"
        >
          <p id="Drag-title">{item.title}</p>
          <p id="Drag-content">{item.content}</p>
        </div>
      </div>
    ))}
  </div>
    <div id="span-div">
      <span id="dotted-span"></span>
      <img src={left} alt="" id="left"/>
      <span id="dotted-span"></span>
      <img src={cursur} alt="cursur-img" id="cursur"/>
      <span id="dotted-span"></span>
      <img src={right} alt="" id="right"/>
      <span id="dotted-span"></span>
    </div>
    <div id="Drag-under-text">
      <p>DRAG & SCROLL</p>
    </div>
</div>
  );
};

export default DragScrollGallery;
