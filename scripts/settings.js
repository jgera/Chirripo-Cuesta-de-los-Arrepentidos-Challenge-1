var configuration = {

  target: {
    username: "test.chirripo@gmail.com",
    password: "123456abC",
    host: "imap.gmail.com", // imap host
    port: 993, // imap port
    secure: true, // use secure connection
    markSeen: false, // all fetched email willbe marked as seen and not fetched next time
  },

  sender: {
    username: "test.chirripo@gmail.com",
    password: "123456abC",
    host: "smtp.gmail.com",
    SSL: true, // use secure connection
  },
  matchingPercentage: 90, // The matching percentage of words from the list
  recipient: 'kristianva@gmail.com',
  monitorWordList: ['drugs', 'drug', 'money', 'transaction', 'dead', 'traffic', 'marihuana', 'cocaine', 'kg', 'lsd'],
};



exports.configuration = configuration;