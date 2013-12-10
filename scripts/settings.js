var configuration = {

    target: {
      username: "target@gmail.com", // the email of the person you want to monitor.
      password: "password", // the password of the email
      host: "imap.gmail.com", // imap host
      port: 993, // imap port
      secure: true, // use secure connection
      markSeen: false, // all fetched email will be marked as seen and not fetched next time
    },

    sender: {
      username: "someotheremail@gmail.com", // An email account to send the notification.
      password: "some password", // The password
      host: "smtp.gmail.com",
      SSL: true, // use secure connection
    },
    matchingPercentage: 90, // The matching percentage of words from the list
    recipient: 'recipient@gmail.com', // the email of the person that's going to be notified.
    monitorWordList: ['drugs', 'drug', 'money', 'transaction', 'dead', 'traffic', 'marihuana', 'cocaine', 'kg', 'lsd'],
  };



exports.configuration = configuration;