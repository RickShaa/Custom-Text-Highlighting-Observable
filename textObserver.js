export class SelectObservable {
  stats = null;
  observers = [];
  constructor() {}
  observe() {
    document.addEventListener("selectionchange", (e) => {
      this.stats = setSelectionStats();
      if (this.stats.selection != "") {
        this.trigger(this.stats);
      }
    });
    return this;
  }
  subscribe(callback) {
    this.observers.push(callback);
    return this;
  }
  trigger(payload) {
    this.observers.forEach((callback) => {
      callback(payload);
    });
  }
}

function setSelectionStats() {
  let selectedText = document.getSelection().toString();
  let selectedTextStartOffset = document
    .getSelection()
    .getRangeAt(0).startOffset;
  let selectedTextEndOffset = document.getSelection().getRangeAt(0).endOffset;
  //trim text from spaces on both ends
  //reg ex previous tags and store
  return {
    selection: selectedText,
    tags: [],
    start: selectedTextStartOffset,
    end: selectedTextEndOffset,
  };
}
