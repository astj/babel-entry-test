import 'core-js/stable/promise/all-settled'

"use strict";

// original: https://zenn.dev/sa2knight/articles/67f6f5cc4ed5e26e391c

class User {
  constructor(name) {
    this.name = name;
  }

  sayHello() {
    return `Hello, ${this.name}`;
  }

  async fetch() {
    return await new Promise((resolve) => {
      setTimeout(() => {
        resolve("complete!!");
      }, 1000);
    });
  }
}

const user1 = new User("sasaki");
const user2 = new User("sasasaki");
console.log(user1.sayHello());
user1.fetch().then((result) => {
  console.log(result);
});
const r = Promise.allSettled([user1?.fetch(), user2.fetch()])
r.then((u1, u2) => {
  console.log(u1)
  console.log(u2)
})
