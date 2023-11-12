//DOM
const playground = document.querySelector(".playground > ul")

//setting
const GAME_ROWS =20;
const GAME_COLS =10;

init() //게임판 실행

//variables
let score =0;
let duration = 500;  //블록이 떨어지는 시간
let downInterval;
let tempMovingItem; //movingIem을 실행하기전에 잠깐 담아두는 용도

const BLOCKS ={
    tree:[      // ㅗ 모양
        [],
        [],
        [],
        [],
    ]
}

const movingItem={  //다음블럭의 타입과 좌표정보등을 가짐
    type:"",
    direction:0,   //화살표 윗방향키를 눌렀을때 좌우로 돌리는 역할
    top:0,
    left:0,
}

//functions
function init(){
    for(let i =0; i< GAME_ROWS; i++){
        prependNewLine()
    }
}



function prependNewLine(){
    const li =document.createElement("li")
    const ul = document.createElement("ul")
    for(let j=0; j< GAME_COLS ; j++){
        const matrix = document.createElement("li")  //하나의 작은 네모
        ul.prepend(matrix)  //prepend 명령어로 ul 안에 matrix를 집어넣는다
    }
    li.prepend(ul)
    playground.prepend(li)
}