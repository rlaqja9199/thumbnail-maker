import { useEffect, useRef, useState } from 'react';
import './App.css';

function App() {
  const canvasRef = useRef(null);
  const [canvasTag, setCanvasTag] = useState([]);

  useEffect(()=>{
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

  },[])

  return (
    <div className="App">
      <div id='makeBox'>
        <div className='inner'>
          <div id='titleBox'>
            <h1 id='title'>Beom's Thumbnail Maker</h1>
            <p>project by beom9199</p>
          </div>
          <canvas style={{background:"black"}} id='canvasBox' ref={canvasRef}></canvas>
          <div id='textBox'>
            <input placeholder='제목을 입력하세요.' />
            <input placeholder='부제목을 입력하세요.' />
            <input placeholder='태그를 입력하세요' />
          </div>
          <ul id='thumbnailType'>
            <li>
              <h3 className='ulTitle'>썸네일 타입</h3>
            </li>
            <li><button>제목/부제목/분류</button></li>
            <li><button>제목/분류</button></li>
            <li><button>제목</button></li>
          </ul>
          <ul id='bgType'>
            <li>
              <h3 className='ulTitle'>배경 타입</h3>
            </li>
            <li><button>랜덤 그라디언트</button></li>
            <li><button>랜덤 단색</button></li>
            <li><button>이미지 URL</button></li>
          </ul>
          <ul id='textType'>
            <li>
              <h3 className='ulTitle'>텍스트 스타일</h3>
            </li>
            <li><button>텍스트 그림자</button></li>
            <li><button>텍스트 색상 반전</button></li>
            <li><button>제목 크기 작게</button></li>
          </ul>
          <div id='btnDiv'>
            <button>초기화</button>
            <button>완료 및 이미지화</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
