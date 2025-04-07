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
        <p>
          그중에서도 지우고 싶지 않은 기록이 있습니다. <br />
          모나미는 언제나 당신의 행복한 기록과 함께 합니다.
        </p>
      </div>
    </div>
  );
}