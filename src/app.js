const canvas = document.querySelector("canvas");

const ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 800;

ctx.lineWidth = 1; //선 굵기

/*const colors = ["#348888", "#22BABB", "#9EF8EE", "#FA7F08", "#F24405"]; //색상

function onMove(event) {
  ctx.beginPath(); //새로운 레이어. 이코드가 없으면 이미 생성해놓은 선들의 색들도 함께 바뀐다.
  ctx.moveTo(0, 0); //시작점
  const color = colors[Math.floor(Math.random() * colors.length)]; //colors에서 랜덤한 색을 고른다.
  ctx.strokeStyle = color;
  ctx.lineTo(event.offsetX, event.offsetY);
  ctx.stroke();
}

canvas.addEventListener("mousemove", onMove);
 */

let isPainting = false;
//기본값으로 false를 주어야 moveTo에서 아무런 일도 일어나지 않는다.
//let을 쓴 이유는 isPainting의 값이 바뀌어야하기 때문이다.

function onMove(event) {
  if (isPainting) {
    ctx.lineTo(event.offsetX, event.offsetY);
    ctx.stroke();
    return;
  }
  //마우스가 눌려 있을 때는 선을 그리지만 누르고 있지 않을 때는 아무런 일도 일어나지 않는다.
  ctx.moveTo(event.offsetX, event.offsetY);
}

function startPainting() {
  isPainting = true;
} //마우스를 누를 때 활성화===

function cancelPainting() {
  isPainting = false;
} //마우스를 땠을 때 활성화___

canvas.addEventListener("mousemove", onMove);
canvas.addEventListener("mousedown", startPainting); //마우스를 누를 때 활성화===
canvas.addEventListener("mouseup", cancelPainting); //마우스를 땠을 때 활성화___
canvas.addEventListener("mouseleave", cancelPainting);
//마우스가 화면 밖으로 나가면 mouseup판정이 되지 않아서 넣었다.
