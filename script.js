let mouse = document.querySelector("#circle");
let papa = document.querySelector("#main");
let takla = document.querySelector("#page1-subheading");
let taklu = document.querySelector(".takle");
let btn = document.querySelector("#rbutton");
let textcolor2 = document.querySelector(".page3-heading2");
let textcolor1 = document.querySelector(".page3-heading1");
let page4 = document.querySelector("#page4");
let bigmouse = document.querySelector("#cards1-i");
let bigmousemove = document.querySelector("#bigcircle");
let bigmouse1 = document.querySelector("#cards2-part1");
let bigmouse2 = document.querySelector("#cards3-part1");
let bigmouse3 = document.querySelector("#cards4-part1");
let bigmouse4 = document.querySelector("#cards5-part1");
let bigmouse5 = document.querySelector("#cards6-part1");
let bigmouse6 = document.querySelector("#cards7-part1");
let bigmouse7 = document.querySelector("#cards8-part1");
let bigmouse8 = document.querySelector("#cards9-part1");
let card1 = document.querySelector(".page8card1");
let card2 = document.querySelector(".page8card2");
let card3 = document.querySelector(".page8card3");
let card4 = document.querySelector(".page8card4");
let card5 = document.querySelector(".page8card5");
let card6 = document.querySelector(".page8card6");
let card7 = document.querySelector(".page8card7");
let card8 = document.querySelector(".page8card8");
let card9 = document.querySelector(".page8card9");
let page8 = document.querySelector("#page8");
let page7 = document.querySelector("#page7");
let page8h21 = document.querySelector(".page8-heading1");
let page8h22 = document.querySelector(".page8-heading2");
let page8btn = document.querySelector("#page8-button");
function horizontalLoop(items, config) {
  items = gsap.utils.toArray(items);
  config = config || {};
  let tl = gsap.timeline({repeat: config.repeat, paused: config.paused, defaults: {ease: "none"}, onReverseComplete: () => tl.totalTime(tl.rawTime() + tl.duration() * 100)}),
    length = items.length,
    startX = items[0].offsetLeft,
    times = [],
    widths = [],
    xPercents = [],
    curIndex = 0,
    pixelsPerSecond = (config.speed || 1) * 100,
    snap = config.snap === false ? v => v : gsap.utils.snap(config.snap || 1), // some browsers shift by a pixel to accommodate flex layouts, so for example if width is 20% the first element's width might be 242px, and the next 243px, alternating back and forth. So we snap to 5 percentage points to make things look more natural
    totalWidth, curX, distanceToStart, distanceToLoop, item, i;
  gsap.set(items, { // convert "x" to "xPercent" to make things responsive, and populate the widths/xPercents Arrays to make lookups faster.
    xPercent: (i, el) => {
      let w = widths[i] = parseFloat(gsap.getProperty(el, "width", "px"));
      xPercents[i] = snap(parseFloat(gsap.getProperty(el, "x", "px")) / w * 100 + gsap.getProperty(el, "xPercent"));
      return xPercents[i];
    }
  });
  gsap.set(items, {x: 0});
  totalWidth = items[length-1].offsetLeft + xPercents[length-1] / 100 * widths[length-1] - startX + items[length-1].offsetWidth * gsap.getProperty(items[length-1], "scaleX") + (parseFloat(config.paddingRight) || 0);
  for (i = 0; i < length; i++) {
    item = items[i];
    curX = xPercents[i] / 100 * widths[i];
    distanceToStart = item.offsetLeft + curX - startX;
    distanceToLoop = distanceToStart + widths[i] * gsap.getProperty(item, "scaleX");
    tl.to(item, {xPercent: snap((curX - distanceToLoop) / widths[i] * 100), duration: distanceToLoop / pixelsPerSecond}, 0)
      .fromTo(item, {xPercent: snap((curX - distanceToLoop + totalWidth) / widths[i] * 100)}, {xPercent: xPercents[i], duration: (curX - distanceToLoop + totalWidth - curX) / pixelsPerSecond, immediateRender: false}, distanceToLoop / pixelsPerSecond)
      .add("label" + i, distanceToStart / pixelsPerSecond);
    times[i] = distanceToStart / pixelsPerSecond;
  }
  function toIndex(index, vars) {
    vars = vars || {};
    (Math.abs(index - curIndex) > length / 2) && (index += index > curIndex ? -length : length); // always go in the shortest direction
    let newIndex = gsap.utils.wrap(0, length, index),
      time = times[newIndex];
    if (time > tl.time() !== index > curIndex) { // if we're wrapping the timeline's playhead, make the proper adjustments
      vars.modifiers = {time: gsap.utils.wrap(0, tl.duration())};
      time += tl.duration() * (index > curIndex ? 1 : -1);
    }
    curIndex = newIndex;
    vars.overwrite = true;
    return tl.tweenTo(time, vars);
  }
  tl.next = vars => toIndex(curIndex+1, vars);
  tl.previous = vars => toIndex(curIndex-1, vars);
  tl.current = () => curIndex;
  tl.toIndex = (index, vars) => toIndex(index, vars);
  tl.times = times;
  tl.progress(1, true).progress(0, true); // pre-render for performance
  if (config.reversed) {
    tl.vars.onReverseComplete();
    tl.reverse();
  }
  return tl;
  }
  const boxes = gsap.utils.toArray("#striper-heading");
const stipper = horizontalLoop(boxes, {paused: false});
function page8divanimation() {
  page8btn.addEventListener("mouseenter", function () {
    mouse.style.scale = 0
    mouse.style.opacity="0"
    page8h21.style.opacity = "0";
    page8h22.style.transform = "translateY(-50%)";
  });
  page8btn.addEventListener("mouseleave", function () {
    mouse.style.scale = 1
    mouse.style.opacity="1"
    page8h21.style.opacity = "1";
    page8h22.style.transform = "translateY(-250%)";
  });
}
page8divanimation();
function page8mouseanimation() {
  page8.addEventListener("mouseenter", function () {
    mouse.style.backgroundColor = "#ffff";
  });
  page8.addEventListener("mouseleave", function () {
    mouse.style.backgroundColor = "#000";
  });
}
page8mouseanimation();
function page7mouseanimation() {
  page7.addEventListener("mouseenter", function () {
    mouse.style.backgroundColor = "#ffff";
  });
  page7.addEventListener("mouseleave", function () {
    mouse.style.backgroundColor = "#000";
  });
}
page7mouseanimation();
function cardmouseanimation9() {
  card9.addEventListener("mouseenter", function () {
    mouse.style.opacity = "0";
    bigmousemove.style.opacity = "1";
    bigmousemove.style.scale = 1;
  });
  card9.addEventListener("mousemove", function (dets) {
    bigmousemove.style.left = dets.clientX + "px";
    bigmousemove.style.top = dets.clientY + "px";
  });
  card9.addEventListener("mouseleave", function () {
    mouse.style.opacity = "1";
    bigmousemove.style.opacity = "0";
    bigmousemove.style.scale = 0;
  });
}
cardmouseanimation9();
function cardmouseanimation8() {
  card8.addEventListener("mouseenter", function () {
    mouse.style.opacity = "0";
    bigmousemove.style.opacity = "1";
    bigmousemove.style.scale = 1;
  });
  card8.addEventListener("mousemove", function (dets) {
    bigmousemove.style.left = dets.clientX + "px";
    bigmousemove.style.top = dets.clientY + "px";
  });
  card8.addEventListener("mouseleave", function () {
    mouse.style.opacity = "1";
    bigmousemove.style.opacity = "0";
    bigmousemove.style.scale = 0;
  });
}
cardmouseanimation8();
function cardmouseanimation7() {
  card7.addEventListener("mouseenter", function () {
    mouse.style.opacity = "0";
    bigmousemove.style.opacity = "1";
    bigmousemove.style.scale = 1;
  });
  card7.addEventListener("mousemove", function (dets) {
    bigmousemove.style.left = dets.clientX + "px";
    bigmousemove.style.top = dets.clientY + "px";
  });
  card7.addEventListener("mouseleave", function () {
    mouse.style.opacity = "1";
    bigmousemove.style.opacity = "0";
    bigmousemove.style.scale = 0;
  });
}
cardmouseanimation7();
function cardmouseanimation7() {
  card7.addEventListener("mouseenter", function () {
    mouse.style.opacity = "0";
    bigmousemove.style.opacity = "1";
    bigmousemove.style.scale = 1;
  });
  card7.addEventListener("mousemove", function (dets) {
    bigmousemove.style.left = dets.clientX + "px";
    bigmousemove.style.top = dets.clientY + "px";
  });
  card7.addEventListener("mouseleave", function () {
    mouse.style.opacity = "1";
    bigmousemove.style.opacity = "0";
    bigmousemove.style.scale = 0;
  });
}
cardmouseanimation7();
function cardmouseanimation6() {
  card6.addEventListener("mouseenter", function () {
    mouse.style.opacity = "0";
    bigmousemove.style.opacity = "1";
    bigmousemove.style.scale = 1;
  });
  card6.addEventListener("mousemove", function (dets) {
    bigmousemove.style.left = dets.clientX + "px";
    bigmousemove.style.top = dets.clientY + "px";
  });
  card6.addEventListener("mouseleave", function () {
    mouse.style.opacity = "1";
    bigmousemove.style.opacity = "0";
    bigmousemove.style.scale = 0;
  });
}
cardmouseanimation6();
function cardmouseanimation5() {
  card5.addEventListener("mouseenter", function () {
    mouse.style.opacity = "0";
    bigmousemove.style.opacity = "1";
    bigmousemove.style.scale = 1;
  });
  card5.addEventListener("mousemove", function (dets) {
    bigmousemove.style.left = dets.clientX + "px";
    bigmousemove.style.top = dets.clientY + "px";
  });
  card5.addEventListener("mouseleave", function () {
    mouse.style.opacity = "1";
    bigmousemove.style.opacity = "0";
    bigmousemove.style.scale = 0;
  });
}
cardmouseanimation5();
function cardmouseanimation4() {
  card4.addEventListener("mouseenter", function () {
    mouse.style.opacity = "0";
    bigmousemove.style.opacity = "1";
    bigmousemove.style.scale = 1;
  });
  card4.addEventListener("mousemove", function (dets) {
    bigmousemove.style.left = dets.clientX + "px";
    bigmousemove.style.top = dets.clientY + "px";
  });
  card4.addEventListener("mouseleave", function () {
    mouse.style.opacity = "1";
    bigmousemove.style.opacity = "0";
    bigmousemove.style.scale = 0;
  });
}
cardmouseanimation4();
function cardmouseanimation3() {
  card3.addEventListener("mouseenter", function () {
    mouse.style.opacity = "0";
    bigmousemove.style.opacity = "1";
    bigmousemove.style.scale = 1;
  });
  card3.addEventListener("mousemove", function (dets) {
    bigmousemove.style.left = dets.clientX + "px";
    bigmousemove.style.top = dets.clientY + "px";
  });
  card3.addEventListener("mouseleave", function () {
    mouse.style.opacity = "1";
    bigmousemove.style.opacity = "0";
    bigmousemove.style.scale = 0;
  });
}
cardmouseanimation3();
function cardmouseanimation2() {
  card2.addEventListener("mouseenter", function () {
    mouse.style.opacity = "0";
    bigmousemove.style.opacity = "1";
    bigmousemove.style.scale = 1;
  });
  card2.addEventListener("mousemove", function (dets) {
    bigmousemove.style.left = dets.clientX + "px";
    bigmousemove.style.top = dets.clientY + "px";
  });
  card2.addEventListener("mouseleave", function () {
    mouse.style.opacity = "1";
    bigmousemove.style.opacity = "0";
    bigmousemove.style.scale = 0;
  });
}
cardmouseanimation2();
function cardmouseanimation1() {
  card1.addEventListener("mouseenter", function () {
    mouse.style.opacity = "0";
    bigmousemove.style.opacity = "1";
    bigmousemove.style.scale = 1;
  });
  card1.addEventListener("mousemove", function (dets) {
    bigmousemove.style.left = dets.clientX + "px";
    bigmousemove.style.top = dets.clientY + "px";
  });
  card1.addEventListener("mouseleave", function () {
    mouse.style.opacity = "1";
    bigmousemove.style.opacity = "0";
    bigmousemove.style.scale = 0;
  });
}
cardmouseanimation1();
function bigmouseanimation8() {
  bigmouse8.addEventListener("mouseenter", function () {
    mouse.style.opacity = "0";
    bigmousemove.style.opacity = "1";
    bigmousemove.style.scale = 1;
  });
  bigmouse8.addEventListener("mousemove", function (dets) {
    bigmousemove.style.left = dets.clientX + "px";
    bigmousemove.style.top = dets.clientY + "px";
  });
  bigmouse8.addEventListener("mouseleave", function () {
    mouse.style.opacity = "1";
    bigmousemove.style.opacity = "0";
    bigmousemove.style.scale = 0;
  });
}
bigmouseanimation8();
function bigmouseanimation7() {
  bigmouse7.addEventListener("mouseenter", function () {
    mouse.style.opacity = "0";
    bigmousemove.style.opacity = "1";
    bigmousemove.style.scale = 1;
  });
  bigmouse7.addEventListener("mousemove", function (dets) {
    bigmousemove.style.left = dets.clientX + "px";
    bigmousemove.style.top = dets.clientY + "px";
  });
  bigmouse7.addEventListener("mouseleave", function () {
    mouse.style.opacity = "1";
    bigmousemove.style.opacity = "0";
    bigmousemove.style.scale = 0;
  });
}
bigmouseanimation7();
function bigmouseanimation6() {
  bigmouse6.addEventListener("mouseenter", function () {
    mouse.style.opacity = "0";
    bigmousemove.style.opacity = "1";
    bigmousemove.style.scale = 1;
  });
  bigmouse6.addEventListener("mousemove", function (dets) {
    bigmousemove.style.left = dets.clientX + "px";
    bigmousemove.style.top = dets.clientY + "px";
  });
  bigmouse6.addEventListener("mouseleave", function () {
    mouse.style.opacity = "1";
    bigmousemove.style.opacity = "0";
    bigmousemove.style.scale = 0;
  });
}
bigmouseanimation6();
function bigmouseanimation5() {
  bigmouse5.addEventListener("mouseenter", function () {
    mouse.style.opacity = "0";
    bigmousemove.style.opacity = "1";
    bigmousemove.style.scale = 1;
  });
  bigmouse5.addEventListener("mousemove", function (dets) {
    bigmousemove.style.left = dets.clientX + "px";
    bigmousemove.style.top = dets.clientY + "px";
  });
  bigmouse5.addEventListener("mouseleave", function () {
    mouse.style.opacity = "1";
    bigmousemove.style.opacity = "0";
    bigmousemove.style.scale = 0;
  });
}
bigmouseanimation5();
function bigmouseanimation4() {
  bigmouse4.addEventListener("mouseenter", function () {
    mouse.style.opacity = "0";
    bigmousemove.style.opacity = "1";
    bigmousemove.style.scale = 1;
  });
  bigmouse4.addEventListener("mousemove", function (dets) {
    bigmousemove.style.left = dets.clientX + "px";
    bigmousemove.style.top = dets.clientY + "px";
  });
  bigmouse4.addEventListener("mouseleave", function () {
    mouse.style.opacity = "1";
    bigmousemove.style.opacity = "0";
    bigmousemove.style.scale = 0;
  });
}
bigmouseanimation4();
function bigmouseanimation3() {
  bigmouse3.addEventListener("mouseenter", function () {
    mouse.style.opacity = "0";
    bigmousemove.style.opacity = "1";
    bigmousemove.style.scale = 1;
  });
  bigmouse3.addEventListener("mousemove", function (dets) {
    bigmousemove.style.left = dets.clientX + "px";
    bigmousemove.style.top = dets.clientY + "px";
  });
  bigmouse3.addEventListener("mouseleave", function () {
    mouse.style.opacity = "1";
    bigmousemove.style.opacity = "0";
    bigmousemove.style.scale = 0;
  });
}
bigmouseanimation3();
function bigmouseanimation2() {
  bigmouse2.addEventListener("mouseenter", function () {
    mouse.style.opacity = "0";
    bigmousemove.style.opacity = "1";
    bigmousemove.style.scale = 1;
  });
  bigmouse2.addEventListener("mousemove", function (dets) {
    bigmousemove.style.left = dets.clientX + "px";
    bigmousemove.style.top = dets.clientY + "px";
  });
  bigmouse2.addEventListener("mouseleave", function () {
    mouse.style.opacity = "1";
    bigmousemove.style.opacity = "0";
    bigmousemove.style.scale = 0;
  });
}
bigmouseanimation2();
bigmouseanimation1();
function bigmouseanimation1() {
  bigmouse1.addEventListener("mouseenter", function () {
    mouse.style.opacity = "0";
    bigmousemove.style.opacity = "1";
    bigmousemove.style.scale = 1;
  });
  bigmouse1.addEventListener("mousemove", function (dets) {
    bigmousemove.style.left = dets.clientX + "px";
    bigmousemove.style.top = dets.clientY + "px";
  });
  bigmouse1.addEventListener("mouseleave", function () {
    mouse.style.opacity = "1";
    bigmousemove.style.opacity = "0";
    bigmousemove.style.scale = 0;
  });
}
bigmouseanimation1();
function bigmouseanimation() {
  bigmouse.addEventListener("mouseenter", function () {
    mouse.style.opacity = "0";
    bigmousemove.style.opacity = "1";
    bigmousemove.style.scale = 1;
  });
  bigmouse.addEventListener("mousemove", function (dets) {
    bigmousemove.style.left = dets.clientX + "px";
    bigmousemove.style.top = dets.clientY + "px";
  });
  bigmouse.addEventListener("mouseleave", function () {
    mouse.style.opacity = "1";
    bigmousemove.style.opacity = "0";
    bigmousemove.style.scale = 0;
  });
}
bigmouseanimation();

function page4mouseanimation() {
  page4.addEventListener("mouseenter", function () {
    mouse.style.backgroundColor = "#fff";
  });
  page4.addEventListener("mousemove", function () {
    mouse.style.backgroundColor = "#fff";
  });

  page4.addEventListener("mouseleave", function () {
    mouse.style.backgroundColor = "#000";
  });
}
page4mouseanimation();
function buttonanimation() {
  btn.addEventListener("mouseenter", function () {
    textcolor1.style.opacity = "0";
    textcolor2.style.transform = "translateY(-70%)";
    btn.style.scale = 1.1;
  });
  btn.addEventListener("mousemove", function () {});
  btn.addEventListener("mouseleave", function () {
    textcolor1.style.opacity = "1";
    textcolor2.style.transform = "translateY(224%)";
    btn.style.scale = 1;
  });
}
buttonanimation();
function headinganimation() {
  gsap.from("#page1-heading", {
    y: 250,
    duration: 1,
    delay: 1,
    opacity: 0,
    stagger: 0.9,
  });
}
headinganimation();
function mouseanimation() {
  papa.addEventListener("mousemove", function (dets) {
    mouse.style.left = dets.clientX + "px";
    mouse.style.top = dets.clientY + "px";
  });
}
mouseanimation();
