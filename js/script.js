//stampo 100 box se multipli di 3 = fizz, se multipli di 5=buzz, se multipli di 3e5= fizzBuzz

const container = document.querySelector(`.container`);
const limit = 100;

for(let i = 1; i <= limit; i++){
  //creo il box
  const box = document.createElement(`div`);
  //aggiungo classe
  box.className = `box`;
  if(!(i % 3)&& !(i % 5)){
    box.innerHTML = `fizzBuzz`;
    box.classList.add(`rosa`)
    console.log(`fizzBuzz`);
  }else if(!(i % 5)){
    box.innerHTML = `buzz`;
    box.classList.add(`giallo`)
    console.log(`buzz`);
  }else if(!(i % 3)){
    box.innerHTML = `fizz`;
    box.classList.add(`verde`)
    console.log(`fizz`);
  }else{
    box.innerHTML = i;
    box.classList.add(`blu`);
    console.log(i);
  }
  //lo aggiungo al container
  container.append(box);
};