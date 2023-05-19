import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getDatabase, ref, push, onValue } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"


const appSettings = {
    databaseURL:"https://memory-lane-d0999-default-rtdb.asia-southeast1.firebasedatabase.app/"
};

const app = initializeApp(appSettings)
const database = getDatabase(app)
const imageDb = ref(database, "Image")
const container = document.getElementById("container");

onValue(imageDb, function(snapshot) {
    if(snapshot.exists()) {
        let items = Object.entries(snapshot.val());
        clearList();
        // items.forEach(appendShoppingList)
        for(var i=0; i<items.length; i++) {
            let name = items[i][0];
            let image = items[i][1]['Link'];
            console.log(items);
            console.log(name);
            console.log(image);
            a(name, image);
        }
    } 
    else {
        container.innerHTML = "Wait Loading them..."
    }
})

function clearList() {
    container.innerHTML = "Made with ❤<br><br>"
}

function a(name1, image) {
    const flip = document.createElement("div");
    flip.className = "flip";
    document.getElementById("container").append(flip);
    const front = document.createElement("div");
    front.className =  "front";
    const name = document.createElement("h2");
    const back = document.createElement("div");
    back.className = "back";
    name.textContent = `${name1}`;
    back.style.backgroundImage = `url('${image}')`;   
    front.append(name);
    flip.append(front);
    flip.append(back);
}