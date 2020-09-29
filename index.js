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



function playerSelector(selectedSong){
    if(selectedSong== 1){
        exec("afplay Example.mp3")
        console.log("started")
    }else if (selectedSong== 2){
        exec("afplay Left.mp3");
    }else{
        console.log("Sorry")
        rl.close()
    }
    rl.question("Input song: ", playerSelector)
    // rl.question("select song: ", selectedSong);
    // return selectedSong
    
}
playerSelector()









// exec("afplay Example.mp3", (error, stdout, stderr) => {
//     console.log(`stdout: ${stdout}`);
//     console.log("Finished")
// });