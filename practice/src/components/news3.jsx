import shop from "../assets/shop.png"
import "./css/news2.css"

export default function news3() {
  return(
      <div id="news3-container">
        <div id="news-box2">
          <img src={shop} alt="" id="news3-img"/>
          <h3 id="news-title">모나미 네이버 브랜드 스토어</h3>
          <span id="news-span"></span>
          <div id="news-text">
            <p>모나미 공식 쇼핑몰입니다. </p>
            <p>공식몰만의 다양한 혜댁을 만나보세요.</p>
          </div>
        </div>
    </div>
  )
}