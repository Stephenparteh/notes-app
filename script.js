let noteArray = localStorage.getItem("note")
  ? JSON.parse(localStorage.getItem("note"))
  : [];

document.getElementById("form").addEventListener("submit", (e) => {
  e.preventDefault();

  let text = document.getElementById("noteInput").value;

  let note = {
    text: text,
    date: new Date(),
  };

  noteArray.push(note);

  localStorage.setItem("note", JSON.stringify(noteArray));

  document.getElementById("noteInput").value = "";

  displayNotes();
});

const displayNotes = () => {
  let notes = document.getElementById("displayNotes");
  notes.innerHTML = "";

  noteArray.forEach((note, index) => {
    let div = document.createElement("div");
    let noteNum = index + 1;
    div.innerHTML = `
          <p>${noteNum}. ${note.text}
            <i class="fa-solid fa-trash rightAlign" data-index="${index}" onclick="deleteNotes(${index})"></i>
          </p>
          <p class="date">${note.date}</p>
        `;
    notes.appendChild(div);
  });
};

const deleteNotes = (index) => {
  noteArray.splice(index, 1);
  localStorage.setItem("note", JSON.stringify(noteArray));
  displayNotes();
};

displayNotes();
