module.exports = (server) => {
    const io = require('socket.io')(server.listen(8000, () => {
        console.log("Server is active...")
    }))
    io.on("connection", (client) => {
        console.log("What is socket", client);
        console.log("Socket is active to be connected")
        client.on("new_msg", (payload) => {
            console.log('What is payload', payload)
            client.emit('reply-msg', payload)
        })
    })
}
