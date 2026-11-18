
  //function 함수면(입력 매개변수){
  //입력매개변수를 사용한 처리문
  //}
 
  //내가 만든 처리함수 : 이벤트가 발생하면 실행될 함수
  function sayHello(){
   alert("안녕하세요");
  }
  //사용
  	//sayHello("안녕하세요");
	
  //이벤트를 만드는(이벤트를 생성하는) 태그
  // querySelector : html에서 selector(id,class,<태그>)를 문자열로 찾아옴
  // document : 자바스크립트언어로 변경
  // helloButton이라는 변수를 생성해서 집어넣음
  // const : helloButton의 값은 바뀌지않을 것이므로 const/ 바뀐다면 let
  const helloButton = document.querySelector("#hellobutton");

  //"click" : html객체에 어떤 행동(이벤트)을 하는지
  // sayHello : 이벤트가 발생하면 실행할 함수 
  helloButton.addEventListener("click",sayHello);

  //12. 배열과 객체
  //1)색상 배열 만들기
  const buttonColor = ["pink", "green", "yellow"];
  //2)HTML 태그 button1,button2,button3 찾기
  const button1 = document.querySelector("#button1");
  const button2 = document.querySelector("#button2");
  const button3 = document.querySelector("#button3");
  //3)버튼을 누르면 처리(실행)할 함수정의
  function runButton1(){
	alert("버튼1이 눌렸습니다." + buttonColor[0]);
  }
  function runButton2(){
  alert("버튼2이 눌렸습니다."+ buttonColor[1]);
  }
  function runButton3(){
  alert("버튼3이 눌렸습니다."+ buttonColor[2]);
  }
  //4) 이벤트(click)가 실행되면 처리할 함수가 실행되도록 모니터 예약등록
  button1.addEventListener("click",runButton1);
  button2.addEventListener("click",runButton2);
  button3.addEventListener("click",runButton3);
  //=================================================연습
  const buttonState = ["완료","미완료"];
  const checkButton = document.querySelector("#check");
  const resetButton = document.querySelector("#reset");
  
  function runCheck(){
	alert("할일이 "+buttonState[0]+"상태입니다.");
  }
  
  function runReset(){
	alert("할일이 "+buttonState[1]+"상태입니다.");
  }
  
  checkButton.addEventListener("click",runCheck);
  resetButton.addEventListener("click",runReset);
  
  const submitButton = document.querySelector("#submit");
  function runSubmit(){
	alert("입력이 "+buttonState[0]+"되었습니다.");
  }
  submitButton.addEventListener("click",runSubmit);
  
  //==========================================================
  //toList 제어하기
  //1. 추가버튼 찾기
  const addButton = document.querySelector("#addButton");
  
  //2.#addButton버튼을 눌렀는가 모니터링
  // function(){내용}: 익명클래스같은거
  addButton.addEventListener("click",function(){
	//alert("추가했어요");
	//3.입력창에서 글자 가져오기
	const input = document.querySelector("#taskInput");
	//alert("입력내용: "+input.value);
	
	//3.5 입력창에 값이 비었으면 li추가 취소
	if (input.value.trim()===""){
		alert("값을 입력하세요");
		return;
	}

	//4. ul에 추가할 내용을 등록하기 위해
	//li태그 필요. 자바스크립트로 새로 만들어야함
	const item = document.createElement("li");

	//5. li item에 input값을 저장
	item.textContent = input.value;
	//6. dom으로 "#taskList" ul요소를 찾기
	const taskList = document.querySelector("#taskList");
	//찾은 ul에 입력받은 item목록 넣기
	taskList.append(item);
	
	//6.5 추가된 할일을 완료표시 하기(취소선으로 완료)
	//아이템 리스트를 마우스로 클릭하는 경우
	item.addEventListener("click",function(){
		item.style.textDecoration = "line-through";
	});
	
	//7.li에 값이 추가되고 나면
	//input 태그값 초기화
	input.value = "";
  });
  
  //loadStorage을 이용한 행운뽑기
    /*<button onclick="drawFortune()" id="draw_fortune">행운 뽑기</button>
	const drawFortune = document.querySelector("#draw_fortue");
	drawFortune().addEventListener("click", function(){
		
	});*/
	
  //1.포춘종류 배열만들기
  const fortunes = [
	"오늘은 남아서 공부해!☘",
	"운동해야지 움직여!🌷",
	"오늘은 맛있는 걸 먹자 🍕",
	"집에가서 잠이나 자라!🏠🏠",
	"너는 충분히 잘하고 있어!"
  ];
  //2.선택된 포춘을 저장하는 포춘변수를 초기화
  let currentFortune = "";
  //3.실제 포운을 뽑는 함수 정의 drawFortuen()정의
  function drawFortune(){
		//1.포춘배열에서 난수로 인덱스 번호를 가져오면 됨
		//난수 만들기 -> 임의의 정수 생성
		//Math.floor(숫자의 범위):
		//수학라이브러리.주어진 범위에서 가장 작은 정수를 뽑는 함수
		//숫자의 범위는 난수를 발생시킨 값 * 배열의 갯수
		// 0 <= 난수 <= 배열의 갯수 사이의 실수
		//floor(3.5) : 3을 리턴
		//Math.random() : 0.0 <= 난수 < 1.0보다 작은 실수
		const index = Math.floor(
			Math.random() * fortunes.length
		)
		//현재 랜덤 행운 뽑기
		currentFortune = fortunes[index];
		//현재 운세의 내용을 result 태그에 출력 -document.querySelector("#result")
		currentFortne = document.querySelector("#result").textContent;
  }
  //4.포춘을 저장하는 함수 정의 saveFortuen()정의
  function saveFortune(){

  }
  //5. 저장된 포춘을 불러옵니다. 함수 정의 loadFortuen()정의
  function loadFortune(){

  }
  //6. 저장된 포춘정보를 삭제하기. 함수정의 deleteFortuen()정의
  function deleteFortune(){
	
  }
  
  
  
 
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  