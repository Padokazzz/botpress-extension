"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getWebviewHtml = getWebviewHtml;
function getWebviewHtml(botId, clientId) {
    return `
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />

<style>
  body, html {
    margin: 0;
    padding: 0;
    height: 100%;
    overflow: hidden;
    background: #111;
  }

  #webchat {
    width: 100%;
    height: 100%;
  }
</style>

<script src="https://cdn.botpress.cloud/webchat/v3.4/inject.js"></script>

</head>
<body>

<div id="webchat"></div>

<script>
  window.botpress.init({
    botId: "${botId}",
    clientId: "${clientId}",
    selector: "#webchat",
    botName: "Botpress Assistant",
    theme: "dark"
  });

  window.botpress.on("webchat:ready", () => {
    window.botpress.open();
  });
</script>

</body>
</html>
`;
}
