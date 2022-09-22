const randomGamefunc=async()=>{
    let usrinput =Number(window.prompt('enter number between 1-6'))
    let computerChoice = Math.floor(Math.random()*6+1)
    let point = 0
    new Promise((resolve, reject)=>{
      if(isNaN(usrinput)){
        reject(window.alert('enter a valid number'))
        return randomGamefunc()
      }else if(usrinput>6 || usrinput<=0){
        return randomGamefunc()
      }else{
        return usrinput
      }
    })
if(usrinput==computerChoice){
    console.log(true, {computerChoice}, {usrinput})
    point+=2
}else if(usrinput+1==computerChoice||usrinput-1==computerChoice){
    console.log({computerChoice}, {usrinput})
    point+=1
}else{
    console.log(false, {computerChoice}, {usrinput})
}
continuegame()

}
console.log(randomGamefunc())
