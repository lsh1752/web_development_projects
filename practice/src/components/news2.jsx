import note from "../assets/note.png"
import "./css/news2.css"

export default function news2() {
  return(
      <div id="news2-container">
        <div id="news-box2">
          <img src={note} alt="" id="news2-img"/>
          <h3 id="news-title">INQUIRY</h3>
          <span id="news-span"></span>
          <div id="news-text">
            <p>언제나 소중한 의견에 귀 기울이겠습니다. </p>
            <p>궁금한 사항은 문의하세요.</p>
          </div>
        </div>
    </div>
  )
}