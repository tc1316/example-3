/**
 * @jest-environment jsdom
 */

const fs = require("fs");
const MessageView = require("./messageView");

describe("MessageView", () => {
  it("clicks the button", () => {
    document.body.innerHTML = fs.readFileSync("./index.html");

    const view = new MessageView();

    const inputEl = document.querySelector("#message-input");
    inputEl.value = "This is us setting the input value";

    const buttonEl = document.querySelector("#show-message-button");
    buttonEl.click();

    let newDiv = document.createElement("div");
    newDiv.append(inputEl.value);
    newDiv.setAttribute("id", "message");

    expect(document.querySelector("#message")).toEqual(newDiv); // Maybe check with coach
  });

  it("can hide message after clicking the button", () => {
    document.body.innerHTML = fs.readFileSync("./index.html");

    const view = new MessageView();

    const buttonEl = document.querySelector("#show-message-button");
    buttonEl.click();

    const hideButtonEl = document.querySelector("#hide-message-button");
    hideButtonEl.click();

    expect(document.querySelector("#message")).toBeNull();
  });
});
