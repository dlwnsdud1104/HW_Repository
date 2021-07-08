const $ulElement = document.querySelector('ul');
//ul tag 를 가진 애를 찾는 것

//target 들이 다 const 인 이유는, target 이라는 변수가 다른 코드가 할당될 일이 없기 때문에, 다시 변경되지 않도록 const 로 설정
$ulElement.addEventListener("click", (event) => { //arrow function
    const $target = event.target;
    if ($target.classList.contains('close')) {
        const $parentTarget = $target.parentElement;
        $parentTarget.style.display = "none";

    } //x 를 누르면 ul tag 전체를 없애라
    $target.classList.toggle('checked');
}) //클릭을 하면 줄이 생겼다가 다시 클릭하면 줄이 없어짐 - checked 가 있으면 만들고, 없으면 안만든다

//생성하는 함수. add 를 하는 함수가 newElement
function newElement() {
    const inputValue = document.getElementById("myInput").value;

    if (inputValue === '') {
        alert("You must write something!");
    } else {
        $ulElement.insertAdjacentHTML('beforeend', `
            <li>
                <span>${inputValue}</span>
                <span class="close">&#215;</span>
            </li>
        `)
    }
    document.getElementById("myInput").value = "";
}


// 두번째 실습

//로컬 스토리지 확인 -> 데이터가 있으면 for 문을 돌리면서 -> li 객체들을 만들어주기
function init() {
    const todoList = getTodoList('todoList')
    for (let i = 0; i < todoList.length; i++) {
        $ulElement.insertAdjacentHTML('beforeend', `
            <li>
                <span>${todoList[i]}</span>
                <span class="close">&#215;</span>
            </li>
        `)
    }
}

// 로컬 스토리지에 key 값을 통해 value 를 리턴해주는 함수 (getItem 함수 이용)
function getTodoList(key) {
    if (localStorage.getItem(key)) {
        return localStorage.getItem(key).split(',')
    }
    return []
}


// return 값은 추가된 새 배열
// ex - key='todo' value='과제하기'
//['1','2','3']
// return ['1'.'2','3','과제하기']

function addTodoList(key, value) {
    const todoList = getTodoList(key);
    todoList.push(value); //123에 과제가 추가된 상태를 만듦
    localStorage.setItem(key, todoList);

}

// function addTodoList(key, value) {
//     const todoList = getTodoList(key);
//     //spread operator
//     return localStorage.setItem(key, [...todoList,value])
// }


function deleteTodoList(key, value) {
    const todoList = getTodoList(key);
    return localStorage.setItem(key, todoList.filter(todo => todo !== value))
}

init()


// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function () {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

