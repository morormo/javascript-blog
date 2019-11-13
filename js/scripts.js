const titleClickHandler = function(event){
  console.log('Link was clicked!');
  console.log(event);

  /* remove class 'active' from all article links  */

  /* add class 'active' to the clicked link */

  /* remove class 'active' from all articles */

  /* get 'href' attribute from the clicked link */

  /* find the correct article using the selector (value of 'href' attribute) */

  /* add class 'active' to the correct article */
}

const links = document.querySelectorAll('.titles a');

for(let link of links){
  link.addEventListener('click', titleClickHandler);
}

Link was clicked!
scripts.js (2,3)




[object PointerEvent]: {altKey: false, bubbles: true, button: 0, buttons: 0, cancelable: true...}
altKey: false
bubbles: true
button: 0
buttons: 0
cancelable: true
cancelBubble: false
clientX: 92
clientY: 225
ctrlKey: false

currentTarget: HTMLAnchorElement
defaultPrevented: false
detail: 1
eventPhase: 3
fromElement: null
height: 1
isPrimary: true
isTrusted: true
layerX: 92
layerY: 225
metaKey: false
movementX: 0
movementY: 0
offsetX: 33
offsetY: 23
pageX: 92
pageY: 463
pointerId: 1
pointerType: "mouse"
pressure: 0
relatedTarget: null
returnValue: true
screenX: 124
screenY: 376
shiftKey: false

srcElement: HTMLSpanElement

target: HTMLSpanElement
tiltX: 0
tiltY: 0
timeStamp: 2568.5819
toElement: null
twist: 0
type: "click"

view: Window
which: 1
width: 1
x: 92
y: 225

__proto__: PointerEventPrototype