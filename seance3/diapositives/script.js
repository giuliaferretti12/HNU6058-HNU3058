Reveal.initialize({
    controls: true,
    progress: true,
    history: true,
    center: true,
    transition: 'slide',
    dependencies: [
    {
      src: 'https://cdnjs.cloudflare.com/ajax/libs/reveal.js/3.2.0/lib/js/classList.js',
      condition: function () {return !document.body.classList;} },
  
    {
      src: 'https://cdnjs.cloudflare.com/ajax/libs/reveal.js/3.2.0/plugin/markdown/marked.js',
      condition: function () {return !!document.querySelector('[data-markdown]');} },
  
    {
      src: 'https://cdnjs.cloudflare.com/ajax/libs/reveal.js/3.2.0/plugin/markdown/markdown.js',
      condition: function () {return !!document.querySelector('[data-markdown]');} },
  
    {
      src: 'https://cdnjs.cloudflare.com/ajax/libs/reveal.js/3.2.0/plugin/highlight/highlight.js',
      async: true,
      callback: function () {hljs.initHighlightingOnLoad();} },
  
    {
      src: 'https://cdnjs.cloudflare.com/ajax/libs/reveal.js/3.2.0/plugin/zoom-js/zoom.js',
      async: true },
  
    {
      src: 'https://cdnjs.cloudflare.com/ajax/libs/reveal.js/3.2.0/plugin/notes/notes.js',
      async: true }] });