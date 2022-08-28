document.addEventListener("DOMContentLoaded", () => {
  // your code here
  document.addEventListener("DOMContentLoaded", () => {
    let addOptions = () => {
      document.querySelector("form#create-task-form").innerHTML =
      `<label for="new-task-description">Task description:</label>
      <input type="text" id="new-task-description" name="new-task-description" placeholder="description">
      <label for="priority-select">Priority level:</label>
      <select name="priority-level" id="priority-select">
        <option value="high-priority">High</option>
        <option value="medium-priority">Medium</option>
        <option value="low-priority">Low</option>
      </select>
      <input type="submit" value="Create New Task">`;
    }
   
    addOptions();
  
    let createTask = (e) => {
      let newTask = document.createElement("li");
      let comment = e.target[0].value;
      let priority = e.target[1].value;
  
      if (comment.length > 0) {
        newTask.innerHTML = `
        ${comment}
        <button data-description="${comment}">X</button>`;
        e.target[0].value = "";
    
        newTask.className = priority;
    
        switch (priority) {
          case "high-priority":
            newTask.style.color = "red";
    
            if (document.querySelector(".medium-priority") != null) {
              document.querySelector("ul").insertBefore(newTask, document.querySelector(".medium-priority"));
            } else if (document.querySelector(".low-priority") != null) {
              document.querySelector("ul").insertBefore(newTask, document.querySelector(".low-priority"));
            } else {
              document.querySelector("ul").append(newTask);
            }
    
            break;
          case "medium-priority":
            newTask.style.color = "yellow";
    
            if (document.querySelector(".low-priority") != null) {
              document.querySelector("ul").insertBefore(newTask, document.querySelector(".low-priority"));
            } else {
              document.querySelector("ul").append(newTask);
            }
    
            break;
    
          case "low-priority":
            newTask.style.color = "green";
    
            document.querySelector("ul").append(newTask);
        }
      }
    }
    
    document.addEventListener("submit", function(e) {
      console.log(e);
      e.preventDefault();
      createTask(e);
    })
  
    document.addEventListener("click", function(e) {
      if (e.target.tagName === "BUTTON") {
        e.target.parentNode.remove();
      }
    })
  });
});
