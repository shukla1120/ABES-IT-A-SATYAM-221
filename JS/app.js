let todo = [];
let req = prompt("Enter the Your Choice : ");

while (true) {
  if (req == "quit") {
    console.log("Quitting the app");
    break;
  }
  if (req == "list") {
    console.log("........Your added Tasks are :........");
    for (let i = 0; i < todo.length; i++) {
      console.log(i,todo[i]);
      document.write(i + " : " + todo[i] + "<br>");
    }
    document.write(".......Here is end of your Tasks.......");
    console.log(".......Here is end of your Tasks.......");
  } else if (req == "add") {
    let task = prompt("Please Enter the Task You want to add :");
    todo.push(task);
    console.log("Task added");
  } else if (req == "delete") {
    let idx = prompt("Please Enter the index of the Task to be deleted :");
    todo.splice(idx, 1);
  } else {
    alert("!..Wrong Request entered");
  }
  req = prompt("Enter your request :");
}