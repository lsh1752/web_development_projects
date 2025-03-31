import './css/header.css'
import Logo from '../assets/logo.png'
import bar from '../assets/tm_bar.gif'

export default function HEADER() {

  return(
    <div id="container">
      <div id='top-head'>
        <div id='ulDiv'>
          <ul>
            <li>
              kor
              <a href="/en" id="Lang"></a>
            </li>
          </ul>
          <img src="" alt="" id="SImg"/>
          <img src="" alt="" id="SImg"/>
          <img src="" alt="" id="SImg"/>
        </div>
        <div id='right-button-box'>
          <a href="">HOME</a>
          <img src={bar} alt="" id='bar'/>
          <a href="">SITE MAP</a>
          <img src={bar} alt="" id='bar'/>
          <a href="">CONTACT US</a>
        </div>
      </div>
        <img src={bar} alt="" width="100%" height="0.1px"/>
      <div id='low-head'>
        <img src={Logo} alt="LOGO" />
        <p>모나미소개</p>
        <p>모나미제품</p>
        <strong>NEWS & VIDEO</strong>
        <p>모나미 미술대회</p>
        <p>고객지원</p>
        <p>기업 구매 / 개발</p>
        <img src="" alt="serch" />
        <img src="" alt="hamberger" />
      </div>
    </div>
  );
}