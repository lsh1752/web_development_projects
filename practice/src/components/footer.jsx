import "./css/footer.css"
import foot from "../assets/footer_monami.jpg"

export default function footer() {
  return(
    <div id="footer-container">
      <div id="footer-box">
        <div id="foot-top">
          <img src={foot} alt="" />
          <div id="foot-top-right">
            <a href="">회사소개</a>
            <span></span>
            <a href="">개인정보처리방침</a>
            <span></span>
            <a href="">이메일무단수집거부</a>
          </div>
        </div>
        <span></span>
        <div id="info">
          <p></p>
          <div id="info-text">
            <p></p>
            <p></p>
          </div>
        </div>
        <div id="customer">
          <p></p>
          <p></p>
          <button></button>
        </div>
        <div id="SITE">
          <p>FAMILY SITE</p>
        </div>
      </div>
    </div>
  );
}