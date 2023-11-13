//DOM
const playground = document.querySelector(".playground > ul")

//setting
const GAME_ROWS =20;
const GAME_COLS =10;


//variables
let score =0;
let duration = 500;  //블록이 떨어지는 시간
let downInterval;
let tempMovingItem; //movingIem을 실행하기전에 잠깐 담아두는 용도

const BLOCKS ={
    tree:[      // ㅗ 모양  , 돌릴떄마다 다른모양 총 4가지 배열
    [[2,1],[0,1],[1,0],[1,1]], //총4개칸으로 구성된  1개의 블럭 
    [],
    [],
    [],
]
}

const movingItem={  //다음블럭의 타입과 좌표정보등을 가짐
    type:"tree",   //블럭의 형태를 가져옴
    direction:0,   //화살표 윗방향키를 눌렀을때 좌우로 돌리는 역할
    top:0,
    left:0,
}


init() //게임판 실행

//functions
function init(){  
    tempMovingItem ={...movingItem};   //spread 연산자로 넣는 이유는 movingItem 의 값만 
                                        //넣어줌으로써 movingItem이 변경되어도 tempmovingItem은 변경되지 않도록
    for(let i =0; i< GAME_ROWS; i++){
        prependNewLine()
    }
    renderBlocks()
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

function renderBlocks(){    
    const{type,direction,top,left} = tempMovingItem; //tempMovingItem 안에 들어있는 각각의 프로퍼티들을 변수로 사용

    BLOCKS[type][direction].forEach(block =>{  //type은 tree와 같은 블럭의 형태
        const x= block[0]
        const y= block[1]
        const target = playground.childNodes[y].childNodes[0].childNodes[x] //li
        target.classList.add(type)  // li에 tree라는 클래스를 부여  , css 에서도 .class 만들어주기
    })
}