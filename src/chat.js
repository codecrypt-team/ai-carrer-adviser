document.addEventListener("DOMContentLoaded", () => {
const userInput = document.querySelector("#user-input")
const chatContainer = document.querySelector("#chat-container");
const sendBtn = document.querySelector("#send-button");

const initialMessage = "Hello, i am doraemon i am your personal carrier guide and adviser just message me what you want to do , whats your interest , your goal and i can design a personalized plan for achieving your goad and help you , so just message me :)"


const chats = [{
  message: initialMessage,
  type: "ai"
}];

sendBtn.addEventListener("click", () => {
  if(!userInput.value) return;
  sendBtn.disabled = true;
  sendBtn.style.opacity = 0.5;
  const userMessage = userInput.value.trim();

  const messageObject = {
    message: userMessage,
    type: "user",
  }


  chats.push(messageObject);
  userInput.value = "";
  console.log("message sent successfully", chats);
  loopingChats();
  gemniReply();
});

function loopingChats() {
  chatContainer.innerHTML = ""
  chats.forEach((element) => {
  displayMessages(element);
});
}

function gemniReply() {
    const messageObject = {
    message: "...",
    type: "ai",
  }
  chats.push(messageObject);
  loopingChats();

  setTimeout(()=> {
    messageObject.message = "nice try didy , server is not connected try after some days 😆";
    loopingChats();
    sendBtn.disabled = false;
    sendBtn.style.opacity = 1;
  }, 1000)
}


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