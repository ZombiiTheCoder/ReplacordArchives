var pfpurle = localStorage.getItem("url");
var namee = localStorage.getItem("name");
var client = 'Developer'
//grabs invite code
var queryString = window.location.search
  
  var urlParams = new URLSearchParams(queryString);
   
  var invitecode = urlParams.get('code')

  if (queryString != null || queryString != undefined) {
     localStorage.setItem("code", invitecode + "/");
    localStorage.setItem("chatroomname", invitecode);
}
    
function makeinvite() {

alert('https://essycomp.glitch.me/?appID=3&code=' + invitecode)

}

var roome = localStorage.getItem("code");

if (roome == undefined || roome == null || roome == "") {
 localStorage.setItem("code", 'chatroom1/');
 localStorage.setItem("chatroomname", 'chatroom1');
}

var room = localStorage.getItem("code")
var roomname = localStorage.getItem("chatroomname")

function chatroompicker(params){
localStorage.clear()
var room = localStorage.getItem("code");
let roomcode = prompt("chatroom code", room);
let text;
if (roomcode == null || roomcode == "") {
 alert ('empty field');
} else {
  text = roomcode;
window.location.replace( 'https://esycmp.glitch.me?appID=3&code=' + roomcode)
}
}


window.onload = function() {
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyAxAqkFw8oIJiHyLAQllDk4W9bh3pbBC4g",
    authDomain: "unblocked-infinite-a9e25.firebaseapp.com",
    databaseURL: "https://unblocked-infinite-a9e25-default-rtdb.firebaseio.com",
    projectId: "unblocked-infinite-a9e25",
    storageBucket: "unblocked-infinite-a9e25.appspot.com",
    messagingSenderId: "267045856766",
    appId: "1:267045856766:web:baa6dc5285d5dcf322ccaf",
    measurementId: "G-WR56G0NC25"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  var db = firebase.database();

  class MEME_CHAT {
    home() {
      document.body.innerHTML = "";
      this.create_title();
      this.create_join_form();
    }
    chat() {
      this.create_title();
      this.create_chat();
    }
create_title(){
const htes = "<a href='../index.html' ><button id='unb' >Home</button></a> <a href='../proxies/index.html' > <button id='unb'>Proxies</button></a> <a href='../games/index.html'> <button id='unb'>Games</button></a> <a href='index.html?code=chatroom1' > <button id='unb'>Chat</button></a> <button onclick='chatroompicker()' id='unb'>Join A Room</button> <button id='unb' onclick='makeinvite()'>Make A Invite to this room</button>"
var title_container = document.createElement('div')
      title_container.setAttribute('id', 'untitle')
var title_container2 = document.createElement('div')
      title_container2.setAttribute('id', 'untitle2')
var title = document.createElement('h1')
      title.textContent = roomname

var bttns = document.createElement('span')
    bttns.setAttribute('id', 'd')
    bttns.innerHTML = htes

      title_container.append(title)
      title_container2.append(bttns)
      document.body.append(title_container)
      document.body.append(title_container2)
    }

    /*create_title(){
      var title_container = document.createElement('div')
      title_container.setAttribute('id', 'title_container')
      var title_inner_container = document.createElement('div')
      title_inner_container.setAttribute('id', 'title_inner_container')

      var title = document.createElement('h1')
      title.setAttribute('id', 'title')
      title.textContent = roomname

      title_inner_container.append(title)
      title_container.append(title_inner_container)
      document.body.append(title_container)
    }*/
  create_join_form(){
      // YOU MUST HAVE (PARENT = THIS). OR NOT. I'M NOT YOUR BOSS!😂
      var parent = this;

      var join_container = document.createElement('div')
      join_container.setAttribute('id', 'join_container')
      var join_inner_container = document.createElement('div')
      join_inner_container.setAttribute('id', 'join_inner_container')

      var join_button_container = document.createElement('div')
      join_button_container.setAttribute('id', 'join_button_container')

      var join_button = document.createElement('button')
      join_button.setAttribute('id', 'join_button')
      join_button.innerHTML = 'Join <i class="fas fa-sign-in-alt"></i>'

      var join_input_container = document.createElement('div')
      join_input_container.setAttribute('id', 'join_input_container')

      var join_input_2 = document.createElement("input");
      join_input_2.setAttribute("id", "join_input");
      join_input_2.placeholder = "Picture url";
      join_input_2.textContent = pfpurle;

      var join_input = document.createElement("input");
      join_input.setAttribute("id", "join_input");
      join_input.setAttribute("maxlength", 25);
      join_input.placeholder = "Name";
      join_input.textContent = namee;



let date = new Date();
var datee = (date.getMonth() + 1) + "/" + date.getDate()
let dateee = new Date();

      if (dateee.getHours() > 12 ) {

var time = (dateee.getHours() - 12) + ':' + dateee.getMinutes() + ' pm'

}
      else {

var time = (dateee.getHours()) + ':' + dateee.getMinutes() + ' am'


}


      join_input.onkeyup = function() {
        if (join_input.value.length > 0) {
          join_button.classList.add("enabled");
          join_button.onclick = function() {
            parent.save_name(join_input.value);
            parent.save_url(join_input_2.value);
            join_container.remove();
            parent.create_chat();
          };
        } else {
          join_button.classList.remove("enabled");
        }
      };

      join_button_container.append(join_button);
      join_input_container.append(join_input);
      join_input_container.append(join_input_2);
      join_inner_container.append(join_input_container, join_button_container);
      join_container.append(join_inner_container);
      document.body.append(join_container);
    }
    create_load(id) {
      // YOU ALSO MUST HAVE (PARENT = THIS). BUT IT'S WHATEVER THO.
      var parent = this;
      var container = document.getElementById(id);
      container.innerHTML = "";

      var loader_container = document.createElement("div");
      loader_container.setAttribute("class", "loader_container");

      var loader = document.createElement("div");
      loader.setAttribute("class", "loader");

      loader_container.append(loader);
      container.append(loader_container);
    }
    create_chat() {
      var parent = this;
      // GET THAT MEMECHAT HEADER OUTTA HERE

    

      var chat_container = document.createElement("div");
      chat_container.setAttribute("id", "chat_container");

      var chat_inner_container = document.createElement("div");
      chat_inner_container.setAttribute("id", "chat_inner_container");

      var chat_content_container = document.createElement("div");
      chat_content_container.setAttribute("id", "chat_content_container");

      var chat_input_container = document.createElement("div");
      chat_input_container.setAttribute("id", "chat_input_container");

      var chat_input_send = document.createElement("button");
      chat_input_send.setAttribute("id", "chat_input_send");
      chat_input_send.setAttribute("disabled", true);
      chat_input_send.innerHTML = `<i class="far fa-paper-plane"></i>`;

      var chat_input = document.createElement("input");
      chat_input.setAttribute("id", "chat_input");
      chat_input.setAttribute("maxlength", 1000);
      chat_input.placeholder = `${localStorage.getItem("name")}. Say something...`;
      chat_input.onkeyup = function() {
        if (chat_input.value.length > 0) {
          chat_input_send.removeAttribute("disabled");
          chat_input_send.classList.add("enabled");
          chat_input_send.onclick = function() {
            chat_input_send.setAttribute("disabled", true);
            chat_input_send.classList.remove("enabled");
            if (chat_input.value.length <= 0) {
              return;
            }
            parent.create_load("chat_content_container");
            parent.send_message(chat_input.value);
            chat_input.value = "";
            // Focus on the input there after
            chat_input.focus();
          };
        } else {
          chat_input_send.classList.remove("enabled");
        }
      };

      var chat_logout_container = document.createElement("div");
      chat_logout_container.setAttribute("id", "chat_logout_container");

      var chat_logout = document.createElement("button");
      chat_logout.setAttribute("id", "chat_logout");
      chat_logout.textContent = `${localStorage.getItem("name")} • logout`;
      chat_logout.onclick = function() {
        localStorage.clear();
        parent.home();
      };

      chat_logout_container.append(chat_logout);
      chat_input_container.append(chat_input, chat_input_send);
      chat_inner_container.append(
        chat_content_container,
        chat_input_container,
        chat_logout_container
      );
      chat_container.append(chat_inner_container);
      document.body.append(chat_container);
      parent.create_load("chat_content_container");
      this.refresh_chat();
    }
    save_name(name) {
      localStorage.setItem("name", name);
    }
    save_url(url){
      localStorage.setItem("url", url);
  }
    send_message(message) {
      var parent = this;
      if (parent.get_name() == null && message == null) {
        return;
      }


let date = new Date();
var datee = (date.getMonth() + 1) + "/" + date.getDate()
let dateee = new Date();

      if (dateee.getHours() > 12 ) {

var time = (dateee.getHours() - 12) + ':' + dateee.getMinutes() + ' pm'

}
      else {

var time = (dateee.getHours()) + ':' + dateee.getMinutes() + ' am'


}


      var messages = db.ref(room);
      messages.once("value", function(snapshot) {
        var index = parseFloat(snapshot.numChildren()) + 1;
        db.ref(room + `message_${index}`)
          .set({
            profilepic: parent.get_url(),
            name: parent.get_name() + '  ( ' + time + ' | ' + datee + ' )',
            message: message,
            index: index,
            time: time,
            date: datee,
            cliente: client
          })
          .then(function() {
            parent.refresh_chat();
          });
      });
    }
    get_name() {
      if (localStorage.getItem("name") != null) {
        return localStorage.getItem("name");
      } else {
        this.home();
      }
    }

get_url() {
      if (localStorage.getItem("url") != null) {
        return localStorage.getItem("url");
      } else {
        this.home();
      }
    }
    refresh_chat() {
      var chat_content_container = document.getElementById(
        "chat_content_container"
      );

      var messages = db.ref(room);
      messages.on("value", function(snapshot) {
        chat_content_container.innerHTML = "";
        if (snapshot.numChildren() == 0) {
          return;
        }
        var values = Object.values(snapshot.val());
        var guide = [];
        var unordered = [];
        var ordered = [];
        for (var i, i = 0; i < values.length; i++) {
          guide.push(i + 1);
          unordered.push([values[i], values[i].index]);
        }

        guide.forEach(function(key) {
          var found = false;
          unordered = unordered.filter(function(item) {
            if (!found && item[1] == key) {
              ordered.push(item[0]);
              found = true;
              return false;
            } else {
              return true;
            }
          });
        });

        ordered.forEach(function(data) {
          var profpic = data.profilepic;
          var name = data.name;
          var message = data.message;
          var ver = data.cliente;

          var message_container = document.createElement("div");
          message_container.setAttribute("class", "message_container");

          var message_inner_container = document.createElement("div");
          message_inner_container.setAttribute(
            "class",
            "message_inner_container"
          );

          var profpiccont = document.createElement("div");
          profpiccont.setAttribute("class", "profpicont");

          var message_pfp = document.createElement("img");
          message_pfp.setAttribute("class", "message_pfp");
          message_pfp.src = profpic;

          var message_user_container = document.createElement("div");
          message_user_container.setAttribute(
            "class",
            "message_user_container"
          );

          var message_user = document.createElement("p");
          message_user.setAttribute("class", "message_user");
          message_user.textContent = `${name}` + ' - ' + vers;

          var message_content_container = document.createElement("div");
          message_content_container.setAttribute(
            "class",
            "message_content_container"
          );

          var message_content = document.createElement("p");
          message_content.setAttribute("class", "message_content");
          message_content.textContent = message;

          message_user_container.append(message_user);
          profpiccont.append(message_pfp);
          message_content_container.append(message_content);
          message_inner_container.append(profpiccont, message_user_container, message_content_container);
          message_container.append(message_inner_container);

          chat_content_container.append(message_container);
        });
        // Go to the recent message at the bottom of the container
        chat_content_container.scrollTop = chat_content_container.scrollHeight;
      });
    }
  }

  app = new MEME_CHAT();
  // if this is a new user then take them to the home screen
  if (localStorage.getItem("name") == null) {
    app.home();
  } else {
    // else. They are a return user.
    app.chat();
  }
};