// const mostVideo = () => {
//   return new Promise((resolve, reject) => {
//     fetch("https://www.googleapis.com/youtube/v3/videos?part=snippet&key=AIzaSyCHh_q5VTQRXNE7Kg0qj5LsxX1e-5oKk7o&maxResults=3&chart=mostPopular")
//       .then (response => {
//         const data = response.json();
//         console.log(data);
//         console.log(data.items); 
//       })
//       .catch(error => console.log('error', error));
//   });
// };

// 위에 console.log(data.items); 에서 undefined가 뜬다... 그래서 아래 코드와 같이 
// async와 await을 붙여줌

const mostVideo = () => {
    return new Promise((resolve, reject) => {
        fetch("https://www.googleapis.com/youtube/v3/videos?part=snippet&key=AIzaSyCHh_q5VTQRXNE7Kg0qj5LsxX1e-5oKk7o&maxResults=3&chart=mostPopular")
          .then(async response => {
              const data = await response.json();
              console.log(data);
              console.log(data.items);
            })
            .catch(error => console.log('error', error));
        });
      };
      
      // 또 다른 방법 - 요건 불가능 하다..!

      // const mostVideo = () => {
      //   return new Promise((resolve, reject) => {
      //     fetch("https://www.googleapis.com/youtube/v3/videos?part=snippet&key=AIzaSyCHh_q5VTQRXNE7Kg0qj5LsxX1e-5oKk7o&maxResults=3&chart=mostPopular")
      //       .then (response => {
      //         const data = response.json();
      //         console.log(data);
      //         console.log(data.items); 
      //       })
      //       .catch(error => console.log('error', error));
      //   });
      // };

      // const wrapping = async () => {
      //   await mostVideo();
      // }