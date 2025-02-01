const User = require("../models/user")

exports.createInformation = async (req, res) => {
    try {
        const { email, gitHub } = req.body
        if (!email && !gitHub) {
            return res.status(400).json({
                error: "All field are required"
            })
        }
        await User.create({ email, gitHub })
        res.status(200).json({
            message: "created"
        })
    } catch (error) {
        res.status(500).json({
            error: error.message
        })
    }
}

exports.Informations = async (req, res) => {
    try {
        const info = await User.find()
        if (!info) {
            return res.status(404).json({
                error: "No data found"
            })
        }
        let timeStamp = new Date()
        timeStamp.setHours(timeStamp.getHours() + 1)
        const publicInfo = info.map((info) => ({
            email: info.email,
            current_datetime: timeStamp,
            github_url: info.gitHub
        }))

        res.status(200).json(publicInfo)
    } catch (error) {
        res.status(500).json({
            error: error.message
        })
    }
}