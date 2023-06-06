export type Message = {
  receiptId: number;
  senderData: {
    chatId: string;
    sender: string;
  };
  messageData: {
    textMessageData: {
      textMessage: string;
    };
  };
};
