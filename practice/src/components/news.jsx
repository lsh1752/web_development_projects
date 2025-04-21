import "./css/news.css"
import NEWS1 from "./news1";
import NEWS2 from "./news2";
import NEWS3 from "./news3";

export default function news() {
  return(
    <div id="news-container">
      <div id="news-box">
          <NEWS1 />
          <NEWS2 />
          <NEWS3 />
      </div>
    </div>
  );
}