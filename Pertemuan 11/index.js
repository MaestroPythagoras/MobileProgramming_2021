// const numbers = [1, 2, 3, 4, 5];

// numbers.forEach((item) => {
//   console.log(item);
// });

// const output = numbers.map((item) => {
//   return item + 1;
// });
// console.log(output);

//Callback Function
// function display() {
//   console.log("Fungsi display");
// }

// function func1(callback) {
//   callback();
// }

// func1(() => {
//   console.log("Fungsi display");
// });

// function func1(callback) {
//   console.log("Fungsi 1");
//   callback();
// }

// function func2() {
//   console.log("Fungsi 2");
// }

// function display(callback) {
//   callback(func);
// }

// display(func1(func2));

//Async
//Single-Thread : Concurent
//Multi-Thread : Parallel

setTimeout(() => {
    console.log("Proses 1");
    setTimeout(() => {
      console.log("Proses 2");
      setTimeout(() => {
        console.log("Proses 3");
      }, 3000);
    }, 3000);
  }, 3000);
  
  // console.log("Proses 1");
  // setTimeout(() => {
  //   console.log("Proses 2");
  // }, 5000);
  // setTimeout(() => {
  //   console.log("Proses 3");
  // }, 2000);
  // console.log("Proses 4");
  
  // fetch("https://jsonplaceholder.typicode.com/users")
  //   .then((res) => res.json())
  //   .then((json) => {
  //     console.log(json);
  //   })
  //   .catch((error) => console.log(error));
  
  const getJSONPlaceholder = async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const json = await res.json();
      console.log(json);
    } catch (error) {
      console.log(error);
    }
  };
  
  getJSONPlaceholder();