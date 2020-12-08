let express = require('express');
let app = express();
let axios = require('axios');
let cors = require("cors")

app.use(cors());


let getLeaderBoard = async () => {
    let leaders = await axios.get('https://wakatime.com/api/v1/leaders');
    return leaders
}

app.get('/leaders', async (req, res) => {
    try {
        let leaders = await getLeaderBoard();
        res.json(leaders.data)
    } catch (err) {
        console.log({ error: err })
    }

})


app.listen(5001, () => console.log('ok, running'))