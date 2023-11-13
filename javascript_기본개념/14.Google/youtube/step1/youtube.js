const ajax = new XMLHttpRequest();
const Youtube_URL = "https://www.googleapis.com/youtube/v3/videos?part=snippet&key=AIzaSyCHh_q5VTQRXNE7Kg0qj5LsxX1e-5oKk7o&maxResults=36&chart=mostPopular";
ajax.open("GET", Youtube_URL,false);
ajax.send(); // send() 호출될 때 비로소 서버측에 요청이 일어남 0 번에서 출발함 1 -> 2 -> 3 -> 4(도착)

// console.log(ajax.response);  확인용

const most = JSON.parse(ajax.response);
const items = most.items;
console.log(items);
console.log(items.length);
let content = " ";
content += `<ul class="videos">`;
  for (let i = 0; i < items.length; i++) {
    //25번 반복 - 25개의 li
    content += `<li class="container">`;
    content += `<div class="video">`;
    content += `<img class="thumbnail" src='${items[i].snippet.thumbnails.medium.url}'/>`;
    content += `<div>`;
    content += `<p class="title">${items[i].snippet.title}</p>`;
    content += `<p class="channelTitle">${items[i].snippet.channelTitle}</p>`;
    content += `</div>`;
    content += `</div>`;
    content += `</li>`;
  }
    content += `</ul>`;

    document.querySelector("#root").innerHTML = content;
