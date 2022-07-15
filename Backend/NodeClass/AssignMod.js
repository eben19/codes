
const greet = () =>('You are Welcome, and the current time is ')
const time = () => {
    return (new Date().toLocaleTimeString())
}

// class user {
//     user1 (a) {return `You are Welcome("a")`}
// }

module.exports = {greet, time}