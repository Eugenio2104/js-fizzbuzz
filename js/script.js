//stampo 100 box se multipli di 3 = fizz, se multipli di 5=buzz, se multipli di 3e5= fizzBuzz

const container = document.querySelector(`.container`);
const limit = 100;

for(let i = 0; i <= limit; i++){
  //creo il box
  const box = document.createElement(`div`);
  //aggiungo classe
  box.className = `box`;
  if(!(i % 3)&& !(i % 5)){
    box.innerHTML = `fizzBuzz`
    console.log(`fizzBuzz`);
  }else if(!(i % 5)){
    box.innerHTML = `buzz`
    console.log(`buzz`);
  }else if(!(i % 3)){
    box.innerHTML = `fizz`
    console.log(`fizz`);
  }else{
    box.innerHTML = i
    console.log(i);
  }
  //lo aggiungo al container
  container.append(box);
};