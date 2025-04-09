import "./css/home.css"
import img1 from "../assets/monami_content1.jpg"
import img2 from "../assets/monami_content2.jpg"
import img3 from "../assets/monami_content3.jpg"
import img4 from "../assets/monami_content4.jpg"
import img5 from "../assets/monami_content5.jpg"

export default function home() {

  return(
    <div>
      <div id="home-container">
        <div id="imgDiv">
          <span></span>
          <h3>
            어쩌면 삶은<br />
            인생이라는 종이 위에<br />
            써 내려가는<br />
            펜의 기록 같습니다.
          </h3>
          <p>
            그중에서도 지우고 싶지 않은 기록이 있습니다. <br />
            모나미는 언제나 당신의 행복한 기록과 함께 합니다.
          </p>
        </div>
      </div>
      <div id="contents-container">
        <div id="contents">
          <div id="text-area"> 
          <h2>NEW <br /> ARRIVALS</h2>
          <span></span>
          <p>가장 먼저 만나는 설레는 기다림</p>
            <div id="img1"><img src={img1} alt="" /></div>
          </div>
        <div id="img2"><img src={img2} alt="" /></div>
        <div id="img3"><img src={img3} alt="" /></div>
        <div id="img4"><img src={img4} alt="" /></div>
        <div id="img5"><img src={img5} alt="" /></div>
        </div>
      </div>
    </div>
  );
}