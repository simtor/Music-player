const { exec } = require("child_process");
const readline = require('readline');
const rl = readline.createInterface({
  input : process.stdin, 
  output : process.stdout
});
// function inputHandler(answer) {
//   if (answer === "Q") {
//     rl.close()
//     return null
//   }
//   if (result) {
//     console.log("You Product has been found", answer)
//     rl.question("Input your medical licence number or Q to quit: ", inputHandler)
//     return result
//   } else {
//     rl.write("The Medical licence number was not found :(\n")
//     rl.question("Input your medical licence number or Q to quit: ", inputHandler)
//   }
// }
// rl.question("Input your medical licence number or Q to quit: ", inputHandler)

console.log("songs list: 1.Example 2.Left")

function playerSelector(selectedSong){
    rl.question("Input song: ", playerSelector)
    if(selectedSong== 1){
        console.log("started")
        exec("afplay Example.mp3")
    }else if (selectedSong== 2){
        exec("afplay Left.mp3");
    }else if(selectedSong==='Q'){
        rl.close()
    }else{
        // console.log("Sorry")
    }
    // rl.question("select song: ", selectedSong);
    // return selectedSong
    
}
playerSelector()









// exec("afplay Example.mp3", (error, stdout, stderr) => {
//     console.log(`stdout: ${stdout}`);
//     console.log("Finished")
// });