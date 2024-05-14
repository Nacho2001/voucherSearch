let MikroNode = require('mikronode');
require('dotenv').config()

let router = new MikroNode(process.env.mkIp)

router.connect()
.then(([login]) => {
    return login(process.env.mkUsername, process.env.mkPassword)
})

.then(function(conn) {
    let chan = conn.openChannel();

    chan.write('/config/identity')
})