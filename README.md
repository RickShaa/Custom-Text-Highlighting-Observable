# Custom-Text-Highlighting-Observable
Text Highlighting Observer API


This observers checks the entire document for text highlighting.

## Setup
1. Clone this repo and ```import { SelectObservable } from "./textObserver.js";``` in to your main javascript file.
2. Create new SelectObservable. ```const so = new SelectObservable();```
3. Subscribe your callback function to the observable  (as a subscriber you now have access to the the payload)
```
const observable = so.subscribe(myCallback);

function myCallback(payload) {
  console.log(payload);
}
```
4. Call observe method ```observable.observe();```
5. import your main javascript method in to your html file. ```<script type="module" src="./main.js"></script>```

Your callback will receive a payload with you currently highlighted word. And the start and end point of the entire text where the highlighting takes place.

## Side note

This Api is far from done.
