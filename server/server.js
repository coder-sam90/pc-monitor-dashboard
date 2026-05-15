const express = require('express')
const si = require('systeminformation')

const app = express()

app.get('/', async (req, res) => {

    const cpuData = await si.currentLoad()
    const memData = await si.mem()

    res.json([
        {
            title: "CPU Usage",
            value: `${cpuData.currentLoad.toFixed(1)}%`
        },
        {
            title: "RAM Usage",
            value: `${((memData.used / memData.total) * 100).toFixed(1)}%`
        }
    ])
})

app.listen(8080, () => {
    console.log('server listening on port 8080')
})