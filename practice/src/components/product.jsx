import "./css/product.css"

export default function product() {


  return(
    <div id="product-container">
      <div id="product-text-box">
        <h1>BEST PRODUCT</h1>
        <span></span>
        <p>언제 어디서나 생활 속에 함께하는 모나미</p>
      </div>
      <div id="product-tabs">
        <div className="tabs">프리미엄 펜</div>
        <div className="tabs">펜·펜슬</div>
        <div className="tabs">마카·컬러링</div>
        <div className="tabs">노트·사무용품</div>
      </div>
    </div>
  );
}