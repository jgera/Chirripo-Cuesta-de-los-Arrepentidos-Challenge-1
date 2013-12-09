var configuration = {
  username: "test.chirripo@gmail.com",
  password: "123456abC",
  host: "imap.gmail.com", // imap host
  port: 993, // imap port
  secure : true, // use secure connection
  markSeen: false, // all fetched email willbe marked as seen and not fetched next time
  matchingPercentage: 10, // The matching percentage of words from the list
  recipient: 'kristianva@gmail.com',
  monitorWordList: ['drugs', 'drug', 'money', 'transaction', 'dead', 'traffic', 'marihuana', 'cocaine', 'kg', 'lsd'],
  senderUsername: "test.chirripo@gmail.com",
  senderPassword: "123456abC",
  senderHost : "smtp.gmail.com",
  senderSSL: true
};



exports.configuration = configuration;