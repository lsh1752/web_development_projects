import monami from "../assets/monami_video.mp4"
import "./css/video.css"

export default function VIDEO() {
  return(
    <div className="relative w-full h-screen overflow-hidden" id="video-content">
      {/* 🎥 배경 영상 */}
      <video
        autoPlay
        loop
        muted
        playsInline
        id="video"
      >
        <source src={monami} type="video/mp4" />
        브라우저가 비디오 태그를 지원하지 않아요.
      </video>
    </div>
  );
}