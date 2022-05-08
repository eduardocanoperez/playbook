const TweetService = require('./../../app/services/TweetService')

describe("Tests for TweetService", () => {

  test("Create a new tweet", () => {
    const tweet = TweetService.create("tweet", "eduardocano")
    expect(tweet.message).toBe("tweet")
    expect(tweet.username).toBe("eduardocano")
    expect(tweet.usersRetweet).not.toBeUndefined()
  })

  test("Add a new userRetweet", () => {
    const tweet = TweetService.create("tweet", "eduardocano")
    TweetService.addUserRetweet(tweet, "UserRetweet1")
    expect(tweet.usersRetweet).toContain("UserRetweet1")
  })

})