import { Translator } from 'phonetic-english';

class TranslatorView {
  constructor(id, spelling, defaultText) {
    this.el = document.getElementById(id);
    this.translator = new Translator(Translator.spelling[spelling]);
    this.defaultText = defaultText;
  }

  render() {
    this.el.innerHTML = '<p class="in" contenteditable></p><p class="out"></p>';
    this.inEl = this.el.getElementsByClassName('in')[0];
    this.outEl = this.el.getElementsByClassName('out')[0];
    this.inEl.innerText = this.defaultText;
    this.outEl.innerText = this.translator.translate(defaultText);
    this.inEl.addEventListener('keyup', () => {
      this.outEl.innerText = this.translator.translate(this.inEl.innerText);
    }, false);
  }
}

const defaultText = [
  'Alice was beginning to get very tired of sitting by her sister on the ',
  'bank, and of having nothing to do: once or twice she had peeped into the ',
  'book her sister was reading, but it had no pictures or conversations in ',
  'it, ‘and what is the use of a book,’ thought Alice ‘without pictures or ',
  'conversations?’\n',
].join('')

new TranslatorView('default-spelling', 'default', defaultText).render();
new TranslatorView('ipa-spelling', 'ipa', defaultText).render();
