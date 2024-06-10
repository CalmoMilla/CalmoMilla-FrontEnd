export default function assistant() {
  window.watsonAssistantChatOptions = {
    integrationID: "b046579b-31b8-4456-ba8b-5db1dd37f48c", // The ID of this integration.
    region: "us-south", // The region your integration is hosted in.
    serviceInstanceID: "ee3f9aba-0ad8-4162-a64d-bc1562a09842", // The ID of your service instance.
    onLoad: async (instance) => { await instance.render(); }
  };
  setTimeout(function(){
    const t=document.createElement('script');
    t.src="https://web-chat.global.assistant.watson.appdomain.cloud/versions/" + (window.watsonAssistantChatOptions.clientVersion || 'latest') + "/WatsonAssistantChatEntry.js";
    document.head.appendChild(t);
  });
  console.log("oi")
}