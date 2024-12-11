import mongoose from "mongoose"

const subscriptionSchema =  new Schema({
    subscriber: {
        type: Schema.Types.ObjectId // users that are subscribing
        ref = "User"
    },
    channel: {
        type: Schema.Types.ObjectId // user whoes cahnnel it is
        ref = "User"
    }
}, { timestamps: true })

export const Subscription = mongoose.model("Subscription", subscriptionSchema)