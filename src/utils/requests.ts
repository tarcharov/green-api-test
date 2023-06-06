export const login = async (id: string, token: string) => {
  try {
    const response = await fetch(
      `https://api.green-api.com/waInstance${id}/getStateInstance/${token}`,
      {
        method: "GET",
        headers: {
          "Content-type": "application/json",
        },
      }
    );
    const data = response.json();
    return await data;
  } catch (error) {
    console.log(error);
    return 0;
  }
};

export const sendMessage = async (
  id: string,
  token: string,
  phone: string,
  text: string
) => {
  const response = await fetch(
    `https://api.green-api.com/waInstance${id}/sendMessage/${token}`,
    {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ chatId: `${phone}@c.us`, message: text }),
    }
  );
  const data = response.json();
  return await data;
};

export const fetchMessages = async (id: string, token: string) => {
  try {
    const response = await fetch(
      `https://api.green-api.com/waInstance${id}/receiveNotification/${token}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Ошибка при получении сообщений:", error);
  }
};
