import "./css/news1.css"
import pens from "../assets/pens.png"

export default function news1() {
  return(
    <div id="news-content1">
    <div id="news-content1-title">
      <h3>MONAMI NEWS</h3>
      <a id="more" href="">MORE</a>
    </div>
    <span id="news-title-span"></span>
    <div id="news-content1-content">
      <img src={pens} alt="" />
      <div id="news-content1-content-text">
        <h3>보드마카 시리즈 3종으로 라인업 확대 모나미..</h3>
        <p id="news-text">보드마카 시리즈 3종으로 라인업 확대모나미, 화이트보드마카 와이드.<br />트윈 신제품 출시■ 11mm 사각닙으로...기존..</p>
        <p id="hwd">2025-03-20</p>
      </div>
    </div>
    <span id="news-under-span"></span>
    <div className="news-content1-text" id="news-content1-text">
    <p>- 카톡 이모티콘을 모나미 볼펜으로 만나보세요! 모나미, 인기 캐릭터..</p>
      <p>2025-03-17</p>
    </div>
    <div className="news-content1-text">
    <p>- 모나미와 함께 신학기 준비하세요! 55종 최대 50% 할인 프로모션 진행</p>
      <p>2025-02-17</p>
    </div>
    <div className="news-content1-text">
    <p>- 모나미, 설맞이 네이버 브랜드스토어 프로모션 진행</p>
      <p>2025-01-20</p>
    </div>
  </div>
  )
}