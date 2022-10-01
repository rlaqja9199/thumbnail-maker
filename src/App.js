import { useEffect, useRef, useState } from 'react';
import './App.css';

function App() {
  const canvasRef = useRef(null);
  const [bgColor, setBgColor] = useState();
  const [bgType, setBgType] = useState(1);
  const [thumbType, setThumbType] = useState("1");
  const [title, setTitle] = useState("제목을 입력하세요.");
  const [subTitle,setSubTitle] = useState("부제목을 입력하세요.");
  const [tag, setTag] = useState("태그를 입력하세요.");
  const [fontColor, setFontColor] = useState("#fff");
  const [textShadow, setTextShadow] = useState("");
  const [textSize, setTextSize] = useState("1");
  const gradientList = [
  "linear-gradient(45deg, #ff9a9e 0%, #fad0c4 99%, #fad0c4 100%)",
  "linear-gradient(to top, #a18cd1 0%, #fbc2eb 100%)",
  "linear-gradient(to top, #fad0c4 0%, #ffd1ff 100%)",
  "linear-gradient(to top, #fbc2eb 0%, #a6c1ee 100%)",
  "linear-gradient(to top, #fdcbf1 0%, #fdcbf1 1%, #e6dee9 100%)",
  "linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%)",
  "linear-gradient(120deg, #fccb90 0%, #d57eeb 100%)",
  "linear-gradient(120deg, #e0c3fc 0%, #8ec5fc 100%)",
  "linear-gradient(to right, #4facfe 0%, #00f2fe 100%)",
  "linear-gradient(to top, #a8edea 0%, #fed6e3 100%)",
  "linear-gradient(to top, #d299c2 0%, #fef9d7 100%)",
  "linear-gradient(to top, #fddb92 0%, #d1fdff 100%)",
  "linear-gradient(to top, #9890e3 0%, #b1f4cf 100%)",
  "linear-gradient(to top, #ebc0fd 0%, #d9ded8 100%)",
  "linear-gradient(to right, #e4afcb 0%, #b8cbb8 0%, #b8cbb8 0%, #e2c58b 30%, #c2ce9c 64%, #7edbdc 100%)",
  "linear-gradient(to right, #eea2a2 0%, #bbc1bf 19%, #57c6e1 42%, #b49fda 79%, #7ac5d8 100%)",
  "linear-gradient(to top, #fff1eb 0%, #ace0f9 100%)",
  "linear-gradient(to top, #feada6 0%, #f5efef 100%)",
  "linear-gradient(to top, #c1dfc4 0%, #deecdd 100%)",
  "linear-gradient(-20deg, #e9defa 0%, #fbfcdb 100%)",
  "linear-gradient(to right, #74ebd5 0%, #9face6 100%)",
  "linear-gradient(to top, #9795f0 0%, #fbc8d4 100%)",
  "linear-gradient(to top, #3f51b1 0%, #5a55ae 13%, #7b5fac 25%, #8f6aae 38%, #a86aa4 50%, #cc6b8e 62%, #f18271 75%, #f3a469 87%, #f7c978 100%)",
  "linear-gradient(to top, #d9afd9 0%, #97d9e1 100%)",
  "linear-gradient(to right, #92fe9d 0%, #00c9ff 100%)",
  "linear-gradient(to top, #dad4ec 0%, #dad4ec 1%, #f3e7e9 100%)"
  ]
  const colorList = [
    "#47B5FF",
    "#DFF6FF",
    "#FFD384",
    "#FFA1CF",
    "#D0B8A8",
    "#7D6E83",
    "#C7F2A4",
    "#AEBDCA",
    "#7895B2",
    "#FBF2CF",
    "#367E18",
    "#CC3636",
    "#5CB8E4",
    "#F2F2F2",
    "#BFACE0",
    "#EBC7E8",
    "#FA9494",
    "#42855B",
    "#90B77D",
    "#D2D79F",
    "#F5C7A9",
    "#FFB200",
    "#224B0C",
    "#820000",
    "#3B9AE1",
    "#FEC260",
  ]

  //썸네일 타입 버튼
  const typeThumbNail = (e)=>{
    setThumbType(
      e.target.value ==="1"? "1" : (e.target.value === "2"? "2" : "3")
      )
    console.log(thumbType);
    console.log(e.target.value)
  }

  //텍스트 스타일 버튼
  const textStyle = (e)=>{
    console.log(e.target)
    //버튼 색상변경
    if(e.target.className === 'unselected'){
      e.target.className = 'selected'
    }else{
      e.target.className = 'unselected'
    }
    //텍스트 섀도우
    if(e.target.value === "shadow"){
      if(e.target.className === 'selected'){
        setTextShadow("3px 3px 5px rgb(0,0,0,40%)")
      }else{
        setTextShadow("")
      }
    }
    //텍스트 컬러
    if(e.target.value === "color"){
      if(e.target.className === 'selected'){
        setFontColor("#333")
      }else {
        setFontColor("#fff")
      }
    }
    //글자크기
    if(e.target.value === "textSize"){
      if(e.target.className === 'selected'){
        setTextSize("0.85")
      }else{
        setTextSize("1");
      }
    }
  }
  //랜덤 그라디언트 버튼
  const randomGra = ()=>{
    setBgType(1);
    const ranNum = Math.random();
    const graNo = Math.ceil(ranNum*25);
    console.log(`그라디언트 넘버는 ${graNo}`)
    setBgColor(gradientList[graNo])
    console.log(bgType)
  }
  //랜덤 컬러 버튼
  const randomColor = ()=>{
    setBgType(2);
    const ranNum = Math.random();
    const colorNo = Math.ceil(ranNum*25);
    console.log(`컬러 넘버는 ${colorNo}`)
    setBgColor(colorList[colorNo])
    console.log(bgType)
  }
  const urlImg = ()=>{
    setBgType(3);
  }
  
  //인풋 값 받아와서 썸네일에 넣어주기
  const onChageText = (e)=>{
    console.log(e.target.id)
    if(e.target.id==="titleInput"){
      if(!e.target.value){
        setTitle("제목을 입력하세요.")
      }else{
        setTitle(e.target.value)
      }
    }else if(e.target.id==="subTitleInput"){
      if(!e.target.value){
        setSubTitle("부제목을 입력하세요.")
      }else{
        setSubTitle(e.target.value)
      }
    }else if(e.target.id==="tagInput"){
      if(!e.target.value){
        setTag("태그를 입력하세요.")
      }else{
        setTag(e.target.value)
      }
    }
  }
  //초기화 버튼
  const resetBtn = (e)=>{
    setTitle("제목을 입력하세요.");
    setSubTitle("부제목을 입력하세요.");
    setTag("태그를 입력하세요.");
    randomGra()
    typeThumbNail(e)
  }

  useEffect(()=>{
    // const canvas = canvasRef.current;
    // const context = canvas.getContext('2d',{preserveDrawingBuffer: true});
    // const width = 800;
    // const height = 400;
    // const saveBtn = document.getElementById("saveBtn");
    // const onSaveClick = ()=>{
    //   //배경이미지 나타내지않는 문제 발생
    //   const url = canvas.toDataURL();
    //   const a = document.createElement("a")
    //   a.href = url;
    //   a.download = "download.png"
    //   a.click();
    //   console.log(canvas.toDataURL());
    // }
    // saveBtn.addEventListener("click",onSaveClick);
    randomGra()
  },[])

  return (
    <div className="App" style={bgType===1? {backgroundImage:bgColor}: {backgroundColor:bgColor}}>
      <form>
      <div id='makeBox'>
        <div className='inner'>
          <div id='titleBox'>
            <h1 id='title'>Beom's Thumbnail Maker</h1>
            <p>project by beom9199</p>
          </div>
          <div id='captureBox' style={bgType===1? {backgroundImage:bgColor}: {backgroundColor:bgColor}}>
            <ul id='thumbnailText'>
              <li id='thumbTitle' style={{color:fontColor, textShadow:textShadow, transform:`translate(-50%,-50%) scale(${textSize})`}} >{title}</li>
              <li id='thumbSubTitle'  style={{display:thumbType==="1"? "block" : "none", color:fontColor, textShadow:textShadow, transform:`translate(-50%,-50%) scale(${textSize})`}}>
                <div id='subLine' style={{background:fontColor}}></div>
                {subTitle}
              </li>
              <li id='thumbTag'  style={{display:thumbType==="3"? "none" : "block", color:fontColor, textShadow:textShadow,  transform:`translateX(-50%) scale(${textSize})`}}>{tag}</li>
            </ul>
          </div>
          <div id='textBox'>
            <input type="text" onChange={onChageText} id="titleInput" placeholder='제목을 입력하세요.' />
            <input type="text" onChange={onChageText} id="subTitleInput" style={{display:thumbType==="1"? "block" : "none" }} placeholder='부제목을 입력하세요.' />
            <input type="text" onChange={onChageText} id="tagInput" style={{display:thumbType==="3"? "none" : "block"}} placeholder='태그를 입력하세요' />
          </div>
          <ul id='thumbnailType'>
            <li>
              <h3 className='ulTitle'>썸네일 타입</h3>
            </li>
            <li><button type='button' value="1" style={{background:thumbType==="1"? "#3b45ff" : "", color:thumbType==="1"? "#fff" : ""}} onClick={typeThumbNail}>제목/부제목/분류</button></li>
            <li><button type='button' value="2" style={{background:thumbType==="2"? "#3b45ff" : "", color:thumbType==="2"? "#fff" : ""}} onClick={typeThumbNail}>제목/분류</button></li>
            <li><button type='button' value="3" style={{background:thumbType==="3"? "#3b45ff" : "", color:thumbType==="3"? "#fff" : ""}} onClick={typeThumbNail}>제목</button></li>
          </ul>
          <ul id='bgType'>
            <li>
              <h3 className='ulTitle'>배경 타입</h3>
            </li>
            <li><button type='button' onClick={randomGra} style={{background:bgType===1? "#3b45ff" : "", color:bgType===1? "#fff" : ""}}>랜덤 그라디언트</button></li>
            <li><button type='button' onClick={randomColor} style={{background:bgType===2? "#3b45ff" : "",  color:bgType===2? "#fff" : ""}}>랜덤 단색</button></li>
            <li><button type='button' onClick={urlImg} style={{background:bgType===3? "#3b45ff" : "", color:bgType===3? "#fff" : ""}}>이미지 URL</button></li>
          </ul>
          <ul id='textType'>
            <li>
              <h3 className='ulTitle'>텍스트 스타일</h3>
            </li>
            <li><button type='button' value="shadow" className='unselected' onClick={textStyle}>텍스트 그림자</button></li>
            <li><button type='button' value="color" className='unselected' onClick={textStyle}>텍스트 색상 반전</button></li>
            <li><button type='button' value="textSize" className='unselected' onClick={textStyle}>제목 크기 작게</button></li>
          </ul>
          <div id='btnDiv'>
            <button value="1" type='reset' onClick={resetBtn}>초기화</button>
            <button type='button' id='saveBtn'>완료 및 이미지화</button>
          </div>
        </div>
      </div>
      </form>
    </div>
  );
}

export default App;
