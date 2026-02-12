const addBtn = document.getElementById("add-event-btn");
const eventsList = document.getElementById("events-list");
const clearBtn = document.getElementById("clear-events");
const sampleBtn = document.getElementById("sample-events");

// ADD EVENT (To make the add event btn work)
addBtn.addEventListener("click", () => {
  const name = document.getElementById("event-name").value;
  const date = document.getElementById("event-date").value;
  const desc = document.getElementById("event-description").value;
  const category = document.getElementById("category").value;

  if (name === "" || date === "") {
    alert("Please enter event name and date");
    return;
  }

  createEvent(name, date, desc, category);

  // clear inputs so it gets empty to fill another event
  document.getElementById("event-name").value = "";
  document.getElementById("event-date").value = "";
  document.getElementById("event-description").value = "";
  document.getElementById("category").value = "";
});

// event card creation function that will appear after add event btn is clicked
// This is not written in html
function createEvent(name, date, desc, category) {
  const eventDiv = document.createElement("div");
  eventDiv.classList.add("event-item");

  eventDiv.innerHTML = `
    <span class="delete-btn">❌</span>
    <h4>${name}</h4>
    <small>${date}</small>
    <p>${desc}</p>
    <span class="category">${category}</span>
  `;

  // delete functionality by clicking it will delete the particular eventcard
  const deleteBtn = eventDiv.querySelector(".delete-btn");
  deleteBtn.addEventListener("click", () => {
    eventDiv.remove();
  });

  eventsList.appendChild(eventDiv);
}

// CLEAR ALL EVENTS Button will work here
clearBtn.addEventListener("click", () => {
  eventsList.innerHTML = ""; //delete content inside it
});

// ADD SAMPLE EVENTS  sample events will be added when the button is clicked and this will
// go inside the createEvent function then card create will happen
sampleBtn.addEventListener("click", () => {
  createEvent("Emifest", "2026-01-14", "Lorem ipsum", "Work");
  createEvent("Project Review", "2026-02-10", "Frontend submission", "Other");
});


//dom manipulation 

const htmlResult = document.getElementById("innerHTML-result");
const textResult = document.getElementById("innerText-result");
const contentResult = document.getElementById("textContent-result");
const keydisplay = document.getElementById("key-display");

const sample = "<strong>Bold Text</strong> with spaces";

htmlResult.innerHTML = "<strong>innerHTML:</strong> " + sample;

textResult.innerHTML = "<strong>innerText:</strong>" + "Bold Text with spaces";

contentResult.innerHTML = "<strong>textContent:</strong> Bold Text with spaces";


// for keys to display detection which key is pressed
const keyDisplay = document.getElementById("key-display");

document.addEventListener("keydown", (army) => {
  keyDisplay.textContent = "You pressed: " + army.key; //textcontent for inside content change
});