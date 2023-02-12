M.AutoInit();

// scrollspy
document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('.scrollspy');
  var instances = M.ScrollSpy.init(elems, { scrollOffset: 30 });
});

// toolbar
document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('.fixed-action-btn');
  var instances = M.FloatingActionButton.init(elems, {
    toolbarEnabled: true,
  });
});

// TypeWriter Effect
class TypeWriter {
  constructor(txtElement, words, wait = 2000) {
    this.txtElement = txtElement;
    this.words = words;
    this.txt = '';
    this.wordIndex = 0;
    this.wait = parseInt(wait, 10);
    this.type();
    this.isDeleting = false;
  }

  type() {
    const current = this.wordIndex % this.words.length,
      fullTxt = this.words[current];

    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }
    this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

    let typeSpeed = 100;
    if (this.isDeleting) {
      typeSpeed /= 2;
    }

    if (!this.isDeleting && this.txt === fullTxt) {
      typeSpeed = this.wait;

      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false;

      this.wordIndex++;

      typeSpeed = 100;
    }
    setTimeout(() => this.type(), typeSpeed);
  }
}
// Init on DOM Loader
document.addEventListener('DOMContentLoaded', () => {
  const txtElement = document.querySelector('.txt-type'),
    words = JSON.parse(txtElement.getAttribute('data-words')),
    wait = txtElement.getAttribute('data-wait');
  // Init typewrite
  new TypeWriter(txtElement, words, wait);
});

// footer year
document.querySelector('.year').innerHTML = new Date().getFullYear();
