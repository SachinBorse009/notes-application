let notes =[];

document.querySelector('form').onsubmit = (event) =>{
    event.preventDefault();

    const title = document.getElementById('title')
    const description = document.getElementById('description')
    const date = document.getElementById('date')

    console.log(title.value , description.value, date.value)

    //validation
    if(
        !title && 
        title.trim() === "" && 
        !description && 
        description.trim() === "" && 
        !date && date.trim() === "") 
        {
        return console.log("Invalid input");
    }

    createNote(title.value, description.value, date.value);
};

 function createNote (title, description, date) {
    const newNote = {title,description,date,id:Date.now()}
    notes.push(newNote);
    console.log(notes);
    displayNotes();
 }

 function displayNotes() {
    const ul =document.querySelector('ul');
    document.querySelectorAll('li').forEach((child) =>child.remove())
    notes.forEach((note) => {
        const li = document.createElement('li');
        const div = document.createElement('div');
        const h6 = document.createElement('h6');
        const p = document.createElement('p');
        const caption = document.createElement('caption');

        h6.innerText = note.title;
        p.innerText = note.description;
        caption.innerText = note.date;

        div.appendChild(h6);
        div.appendChild(p);
        div.appendChild(caption);
        li.appendChild(div);
        ul.appendChild(li);

    })
 }