import { createChatBotMessage } from "react-chatbot-kit";

const botName = "vNashies";

const config = {
  initialMessages: [createChatBotMessage(`Hi! I'm ${botName} bot`)],
  customComponents: {
    // Replaces the default header
    header: () => {},
  },
  botName: botName,

  customStyles: {
    botMessageBox: {
      backgroundColor: "#fb923c",
    },
    chatButton: {
      backgroundColor: "#fb923c",
    },
  },
};

export default config;
