import { Component, useState } from "react";
import Header from "./components/Header/Header2.jsx";
// import 이미지변수명 from "경로";
import reactImg from './assets/react-core-concepts.png';
import reactImgComponent from './assets/components.png';
import reactImgConfig from './assets/config.png';
import reactImgJsxUi from './assets/jsx-ui.png';
import reactImgState from './assets/State-mgmt.png';
import { CORE_CONCEPTS,EXAMPLES  } from './data_updated.js'
import Core from "./components/CoreConcepts.jsx";
import TabButton from "./components/TabButton.jsx";

function App() {
  const [ selectedTopic, setSelectedTopic ] = useState('');

  function handleSelect(selectredtopic) {
    console.log(selectredtopic);
    setSelectedTopic(selectredtopic);
  }
  // React에서는 변수의 데이터에 HTML 코드를 삽입할 수 있음.
  let tabContent = <p>Please, Select a Topic.</p>

  // 버튼을 클릭했을 때 해당 내용을 참조하여 내용이 출력되어야 함.

  if(selectedTopic){ //selectedTopic에 값이 무엇이라도 있기만 하면 이하의 코드가 실행됨
    tabContent = (
      <>
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>
          {EXAMPLES[selectedTopic].code}
          </code>
        </pre>
      </>
    );
  }

  return (
    <div>
      <Header />
      <main>
      <section id="core-concepts">
      <h2>핵심 개념들 of React</h2>
      <ul>
        <Core {...CORE_CONCEPTS[0]}/>
        <Core {...CORE_CONCEPTS[1]}/>
        <Core {...CORE_CONCEPTS[2]}/>
        <Core {...CORE_CONCEPTS[3]}/>
      </ul>
    </section>
    <section id="examples">
      <h2>예시들</h2>
      <menu>
        <TabButton onSelect={() => handleSelect('components')}>Components</TabButton>
        <TabButton onSelect={() => handleSelect('jsx')}>JSX</TabButton>
        <TabButton onSelect={() => handleSelect('props')}>Props</TabButton>
        <TabButton onSelect={() => handleSelect('state')}>State</TabButton>
      </menu>
      <div id="tab-content">
        {tabContent}  
      </div>
    </section>
      </main>
    </div>
  );
}

export default App;