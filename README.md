# Botpress Webchat VSCode Extension

Extensão para Visual Studio Code que integra o **Botpress Webchat 3.4** diretamente no editor, permitindo ter um chat interativo com seu bot Botpress em uma webview dentro do VS Code.

## 🎯 Sobre

Esta extensão foi desenvolvida para permitir o uso do Botpress em modo **webview** dentro do VS Code, pois a API Key não está disponível no plano gratuito. A solução utiliza o Botpress Webchat v3.4 integrado como um painel lateral interativo.

### Vantagens

- ✅ Acesso ao seu bot Botpress sem sair do VS Code
- ✅ Webview integrada no editor
- ✅ Suporta múltiplas conversas
- ✅ Interface limpa e responsiva
- ✅ Configuração simples via settings do VS Code

## 📋 Requisitos

- VS Code 1.85.0 ou superior
- Node.js e npm (para desenvolvimento)
- Conta no Botpress Cloud
- Bot ID e Client ID do seu bot Botpress

## 🚀 Instalação

### Como Usuário Final

1. Baixe o arquivo `.vsix` (se fornecido)
2. Abra VS Code
3. Vá para Extensions (Ctrl+Shift+X / Cmd+Shift+X)
4. Clique em "..." e selecione "Install from VSIX..."
5. Selecione o arquivo `botpress-webchat-vscode-3.0.0.vsix`
6. Recarregue o VS Code

### Do Código-Fonte (Desenvolvimento)

```bash
# 1. Clonar e navegar para o diretório
cd botpress_vscode_extension

# 2. Instalar dependências
npm install

# 3. Compilar o TypeScript
npm run compile

# 4. (Opcional) Gerar arquivo .vsix para distribuição
npm install -g vsce
vsce package
```

## ⚙️ Configuração

Após instalar a extensão, configure seus dados do Botpress:

1. Abra **Settings** (Ctrl+, / Cmd+,)
2. Procure por "Botpress Webchat"
3. Configure os seguintes campos:

   - **Bot ID**: UUID do seu bot no Botpress Cloud
   - **Client ID**: Identificador do cliente (ex: `user_12345`)

### Exemplo de Configuração

```json
{
  "botpressAssistant.botId": "seu-bot-uuid-aqui",
  "botpressAssistant.clientId": "seu-client-id-aqui"
}
```

Ou via arquivo `settings.json`:

```json
{
  "botpressAssistant.botId": "12345678-1234-1234-1234-123456789012",
  "botpressAssistant.clientId": "user_dev_environment"
}
```

## 💬 Como Usar

1. Abra o Command Palette (Ctrl+Shift+P / Cmd+Shift+P)
2. Digite: `Abrir Botpress Webchat`
3. Pressione Enter
4. O chat abrirá em um painel lateral ao lado do seu código

O painel do chat permanecerá aberto enquanto você trabalha, permitindo interação contínua com seu bot.

## 📁 Estrutura do Projeto

```
botpress_vscode_extension/
├── src/
│   ├── extension.ts       # Arquivo principal da extensão
│   └── webview.ts         # Gerador do HTML da webview
├── media/                 # Recursos de mídia (CSS, JS)
├── package.json           # Configuração do npm e da extensão
├── tsconfig.json          # Configuração do TypeScript
└── README.md              # Este arquivo
```

### Arquivos Principais

- **extension.ts**: Arquivo de entrada da extensão. Registra o comando e gerencia o ciclo de vida do painel.
- **webview.ts**: Gera o HTML e JavaScript que são renderizados na webview, inicializando o Botpress Webchat.

## 🔧 Scripts Disponíveis

```bash
# Compilar TypeScript para JavaScript
npm run compile

# Compilar em modo watch (recompila automaticamente ao salvar)
npm run watch

# Preparar para publicação
npm run vscode:prepublish
```

## 🛠️ Desenvolvimento

### Estrutura de Desenvolvimento

Para testar a extensão durante desenvolvimento:

1. Abra a pasta do projeto em VS Code
2. Pressione F5 para abrir uma nova janela de VS Code com a extensão carregada
3. Execute o comando "Abrir Botpress Webchat" para testar

### Modificar o Código

Após fazer alterações:

1. Execute `npm run compile` ou use o modo watch
2. Recarregue a extensão (Ctrl+R na janela de teste)

## 🧹 Otimizações Recentes

Este projeto foi otimizado e limpo com as seguintes alterações:

### Arquivos Removidos
- ❌ `src/api.ts` - Não era utilizado na implementação final
- ❌ `src/chatPanel.ts` - Código duplicado/alternativo
- ❌ `botpress_actions/` - Arquivos placeholder vazios

### Código Limpo
- ✅ Removidos todos os `console.log` desnecessários
- ✅ Removidos comentários redundantes
- ✅ Formatação padronizada

## 🐛 Troubleshooting

### "Configure o Bot ID nas configurações da extensão"

**Solução**: Verifique se você preencheu corretamente os campos `botpressAssistant.botId` e `botpressAssistant.clientId` nas configurações do VS Code.

### Webchat não carrega

**Solução**: 
- Verifique se o Bot ID está correto
- Confirme que o bot está online no Botpress Cloud
- Verifique a conexão de internet
- Abra o DevTools (F12 em VS Code) para verificar erros no console

### Erro ao compilar

**Solução**:
```bash
npm install
npm run compile
```

## 📦 Build e Distribuição

Para criar um arquivo `.vsix` para distribuição:

```bash
# Instalar ferramenta de empacotamento
npm install -g vsce

# Criar o arquivo .vsix
vsce package

# Isso gerará: botpress-webchat-vscode-3.0.0.vsix
```

## 📝 Informações da Extensão

- **Nome**: Botpress Webchat VSCode
- **Versão**: 3.0.0
- **Publisher**: karenai
- **Compatibilidade**: VS Code 1.85.0+
- **Webchat Version**: 3.4

## 📄 Licença

Este projeto é fornecido como está para uso pessoal.

## 🤝 Suporte

Para problemas ou dúvidas:

1. Verifique a seção "Troubleshooting" acima
2. Consulte a documentação do Botpress: https://botpress.com/docs
3. Verifique os logs do VS Code (Help > Toggle Developer Tools)

---

**Desenvolvido com ❤️ para melhorar sua experiência com Botpress no VS Code**
