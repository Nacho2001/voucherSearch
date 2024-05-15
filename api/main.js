let api = require('mikronode')

let router = new api('10.1.1.44');


router.connect()
.then(([login]) => login('mikhmon', 'mikhmon'))
.then(function(conn) {
    let chan = conn.openChannel()
    chan.write = ('/system/identity');
    chan.on('done', function(data){
        console.log(data)
    })
})
.catch((err) => {
    console.error(err)
})