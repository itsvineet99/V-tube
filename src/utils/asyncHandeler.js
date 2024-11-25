const asyncHandeler = (fn) => { async (req, res) => {
    try{
        await fn(req, res, next)
    }catch (error) {
        res.status(err.code || 500).json({
            success: false,
            message: err.message
        })
    }
} }

export {asyncHandeler}