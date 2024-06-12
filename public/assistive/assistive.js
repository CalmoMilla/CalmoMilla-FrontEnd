export default function load_astv_script() {
  let astv_tag = document.createElement('script');
  astv_tag.id = 'astv-widget';
  astv_tag.src = 'https://cdn.assistive.com.br/plugin/AssistiveWebPlugin.js';
  astv_tag.async = true;
  astv_tag.onload = function() {
    assistive.init({
      color: "FFCE55",
      bodyColor: "FFCE55",
      vPositon: 'center'
    });
  };

  var h = document.querySelector('head') || document.body;
  h.appendChild(astv_tag);
}