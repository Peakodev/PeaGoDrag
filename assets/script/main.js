const fills = document.querySelectorAll('.fill');
const boxs = document.querySelectorAll('.box');

let cur, nxt

for(let fill of fills) {
  fill.addEventListener('dragstart', dragStart);
  fill.addEventListener('dragend', dragEnd);
}

for(let box of boxs) {
  box.addEventListener('dragover',dragOver) 
  box.addEventListener('dragenter',dragEnter) 
  box.addEventListener('dragleave',dragLeave) 
  box.addEventListener('drop',drop) 
}

function dragStart(e) {
  cur = this
  this.className += ' hold'
  setTimeout(() =>{ this.className = 'invisible' },0)
}

function dragEnd() {
  this.className = 'fill'
}

function dragOver(e) {
  e.preventDefault()
}

function dragEnter() {
  this.className += ' hovered'
  nxt = this.querySelector('.fill')
  if(nxt) cur.parentNode.append(nxt)
  this.append(cur)

}

function dragLeave() {
  this.className = 'box'
}

function drop(e) {
  this.className = 'box'
}