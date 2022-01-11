(() => {
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // messageView.js
  var require_messageView = __commonJS({
    "messageView.js"(exports, module) {
      var MessageView2 = class {
        constructor() {
          this.inputEl = document.querySelector("#message-input");
          this.buttonEl = document.querySelector("#show-message-button");
          this.hideButtonEl = document.querySelector("#hide-message-button");
          this.buttonEl.addEventListener("click", () => {
            this.displayMessage();
          });
          this.hideButtonEl.addEventListener("click", () => {
            this.hideMessage();
          });
          this.mainContainerEl = document.querySelector("#main-container");
        }
        displayMessage() {
          let newDiv = document.createElement("div");
          newDiv.append(this.inputEl.value);
          newDiv.setAttribute("id", "message");
          this.mainContainerEl.append(newDiv);
          console.log("Thanks for clicking me!");
        }
        hideMessage() {
          let message = document.getElementById("message");
          if (message) {
            message.remove();
          }
          console.log("Message removed successfully");
        }
      };
      module.exports = MessageView2;
    }
  });

  // index.js
  var MessageView = require_messageView();
  var view = new MessageView();
})();
