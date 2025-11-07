import debounce from "lodash.debounce";

import {
  alert,
  defaultModules,
  success,
  error,
  info,
} from "@pnotify/core/dist/PNotify.js";

import * as PNotifyMobile from "@pnotify/mobile/dist/PNotifyMobile.js";

import "@pnotify/core/dist/BrightTheme.css";

import "@pnotify/core/dist/PNotify.css";
import "@pnotify/mobile/dist/PNotifyMobile.css";
import { log } from "handlebars";

defaultModules.set(PNotifyMobile, {});

error({
  text: "Моя перша нотифікація!",
});


function fatchUser() {
    return fetch("https://restcountries.com/v3.1/all?fields=name").then(res =>  res.json())
}

fatchUser().then(res => console.log(res))

const inputRef = document.querySelector(".inp");
inputRef.addEventListener("input", (evt) => {
console.log(evt.target.value.trim());

})

