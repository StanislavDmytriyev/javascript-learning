const child = {
  name: "Kirill",
  age: 6,
  personality: "complicated, controversial",
  isAGoodBoy: true,
  hobbies: ["dancing", "playing", "art", "music"],
  hobbiesCount: 4,
  addHobby: function (newHobby) {
    this.hobbies.push(newHobby);
    this.hobbiesCount = this.hobbies.length;
  },
  changeAge(updatedAge) {
    this.age = updatedAge;
  },
  amendName(newName) {
    this.name = newName;
  },
  getHobbiesCount() {
    return this.hobbies.length;
  },
};

child.addHobby("English");
child.addHobby("Brushing teeth");
child.amendName("Kirill Vasek");
child.changeAge(7);
console.log(child);
console.log("getHobbiesCount:", child.getHobbiesCount());

const character = "personality";

console.log(child[character]);
console.log(child.name);

const wifeName = "Jenia";
const wifeAge = 37;

const wife = {
  wifeName,
  wifeAge,
};

console.log(wife);

const inputName = "Name";
const inputValue = "Dodik";

const user = {
  [inputName]: inputValue,
};

console.log(user);

const friends = [
  { name: "Stani", online: false },
  { name: "Kirill", online: true },
  { name: "Jenia", online: false },
  { name: "Babina", online: true },
];

console.log("Количество свойство объекта: ", Object.keys(friends).length);

const findFriendByName = function (allFriends, name) {
  let message = `Friend ${name} wasn't found in the array`;
  for (const friend of allFriends) {
    if (friend.name.includes(name)) {
      message = `Friend ${name} found`;
    }
    return message;
  }
};

console.log(findFriendByName(friends, "Stani"));
console.log(findFriendByName(friends, "Vasek"));

const allFriendsNamesArray = function (allFriends) {
  const allFriendsNames = [];
  for (const friend of allFriends) {
    allFriendsNames.push(friend.name);
  }
  return allFriendsNames;
};

console.log(allFriendsNamesArray(friends));

const allOnlineFriends = function (allFriends) {
  const onlineFriends = [];
  for (const friend of allFriends) {
    if (friend.online) {
      onlineFriends.push(friend);
    }
  }
  return onlineFriends;
};

console.log(allOnlineFriends(friends));

const allOfflineFriends = function (allFriends) {
  const offlineFriends = [];
  for (const friend of allFriends) {
    if (!friend.online) {
      offlineFriends.push(friend);
    }
  }
  return offlineFriends;
};

console.log(allOfflineFriends(friends));

const filterFriendsByStatus = function (allFriends) {
  const friendsByStatus = {
    online: [],
    offline: [],
  };

  for (const friend of allFriends) {
    // friend.online
    //   ? friendsByStatus.online.push(friend)
    //   : friendsByStatus.offline.push(friend);

    if (friend.online) {
      friendsByStatus.online.push(friend);
      continue;
    }
    friendsByStatus.offline.push(friend);
  }

  return friendsByStatus;
};

console.log(filterFriendsByStatus(friends));
