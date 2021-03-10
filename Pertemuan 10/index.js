
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