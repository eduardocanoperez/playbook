const MessageService = require('./../../app/services/MessageService')

describe("Tests for MessageService", () => {

  test("Create a new tweet", () => {
    const message = MessageService.create("Message", "eduardo", "cano")
    expect(message.message).toBe("Message")
    expect(message.receiver).toBe("eduardo")
    expect(message.receptor).toBe("cano")
  })

})