import * as vscode from "vscode";
import { getWebviewHtml } from "./webview";

export function activate(context: vscode.ExtensionContext) {
  context.subscriptions.push(
    vscode.commands.registerCommand("botpressAssistant.openChat", () => {
      openChat(context);
    })
  );
}

function openChat(context: vscode.ExtensionContext) {
  const config = vscode.workspace.getConfiguration("botpressAssistant");

  const botId = config.get<string>("botId") || "";
  const clientId = config.get<string>("clientId") || "";

  if (!botId) {
    vscode.window.showErrorMessage("Configure o Bot ID nas configurações da extensão.");
    return;
  }

  const panel = vscode.window.createWebviewPanel(
    "botpressChat",
    "Botpress Webchat",
    vscode.ViewColumn.Beside,
    {
      enableScripts: true
    }
  );

  panel.webview.html = getWebviewHtml(botId, clientId);
}

export function deactivate() {}
