import "./css/home.css"
import bar from '../assets/tm_bar.gif'

export default function home() {

  return(
    <div id="home-container">
      <div id="imgDiv">
        <img src={bar} id="bar"/>
        <h3>
          어쩌면 삶은<br />
          인생이라는 종이 위에<br />
          써 내려가는<br />
          펜의 기록 같습니다.
        </h3>
      </div>
    </div>
  );
}