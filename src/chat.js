import { typeWriter } from './utils/typewriter.js';
document.addEventListener("DOMContentLoaded", () => {
const userInput = document.querySelector("#user-input")
const chatContainer = document.querySelector("#chat-container");
const sendBtn = document.querySelector("#send-button");

const initialMessage = "Hello, i am doraemon i am your personal carrier guide and adviser just message me what you want to do , whats your interest , your goal and i can design a personalized plan for achieving your goad and help you , so just message me :)"



let chats = [{
  message: initialMessage,
  type: "ai"
}];



sendBtn.addEventListener("click", () => {
  if(!userInput.value) return;
  sendBtn.disabled = true;
  sendBtn.style.opacity = 0.5;
  const userMessage = userInput.value.trim();

  const messageObject = {
   "message": userMessage,
   "user_id": "rishabsi"
  }
  const fakeMessageObject = {
    "message": userMessage,
    "type": "user"
  }

  const fakeGemniReply = {
    "message": "...",
    "type": "ai"
  }


  chats.push(fakeMessageObject);
  chats.push(fakeGemniReply);
  gemniReply(messageObject);
  userInput.value = "";
  console.log("message sent successfully", chats);
  loopingChats();
  sendBtn.disabled = false;
  sendBtn.style.opacity = 1;
});

function loopingChats() {
  chatContainer.innerHTML = ""
  chats.forEach((element) => {
  displayMessages(element);
});
}

async function gemniReply(message) {

  try {
    const req = await fetch('https://ai-carrer-adviser.onrender.com/chat', {
      method: "POST",
      headers: {
        "Content-Type" : "application/json; charset=UTF-8"
      },
      body: JSON.stringify(message)
    })

    const res = await req.json()
      chats = res.chat_history
      loopingChats();
  } catch (error) {
    console.log('something went wrong while fetching', error)
  }


}

let initialFetch = async() => {
  const req = await fetch('https://ai-carrer-adviser.onrender.com/chat?user_id=rishabsi')
  const res = await req.json();

  chats = res.chat_history || [{ message: initialMessage, type: "ai" }];
  loopingChats()
}
initialFetch()


const displayMessages = (chat) => {
if (chat.type === "user") {
  const div = document.createElement("div");
  div.classList.add("flex", "justify-end", "user-chat-parent", "ml-2.5", "sm:ml-0", "mt-1.5");

  div.innerHTML = `
    <div class="user-chat flex flex-col gap-2 max-w-2xl items-end">
              <img
                src="src/images/ninja-hattori.jpeg"
                alt=""
                class="w-9 h-9 rounded-full object-cover"
              />

              <p
                class="bg-gray-400 w-fit p-3 ml-5 rounded-b-2xl rounded-tl-2xl text-gray-950"
              >
                ${chat.message}
              </p>
            </div>
  `;
  console.log(chat.message);

  chatContainer.appendChild(div);
} else {
    const div = document.createElement("div");
    div.classList.add("flex", "justify-start", "gemni-chat-parent", "mr-2.5", "sm:mr-0");

    div.innerHTML = `
    <div class="gemni-chat flex flex-col gap-2 max-w-2xl">
              <img
                src="src/images/dora.webp"
                alt=""
                class="w-9 h-9 rounded-full object-cover"
              />

              <p
                class="bg-gray-400 w-fit p-3 ml-5 rounded-b-2xl rounded-tl-2xl text-gray-950"
              >
                ${chat.message}
              </p>
            </div>
  `;

  chatContainer.appendChild(div);
}
}

loopingChats();

const myText = "Chat With Doraemon Your personal Ai carrer Advisor and guide"
typeWriter(".chat-header-text", myText, 50);
chatContainer.scrollTop = chatContainer.scrollHeight;
  
});

/*
          <div class="flex justify-end user-chat-parent ml-2.5 sm:ml-0 mt-1.5">
            <div class="user-chat flex flex-col gap-2 max-w-2xl items-end">
              <img
                src="src/images/ninja-hattori.jpeg"
                alt=""
                class="w-9 h-9 rounded-full object-cover"
              />

              <p
                class="bg-gray-400 w-fit p-3 ml-5 rounded-b-2xl rounded-tl-2xl text-gray-950"
              >
                You can't help me ding-ding...
              </p>
            </div>
          </div>
          */