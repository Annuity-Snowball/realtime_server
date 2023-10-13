import mongoose from "mongoose";
const { Schema } = mongoose;

const fearGreedSchema = new Schema({
    _id: mongoose.Types.ObjectId,
    Date: Date,
    kospi_index: Number,
    kospi_momentum: Number,
    "p/c_ratio": Number,
    safe_demand: Number,
    per_momentum: Number,
    kospi_momentum_normalized: Number,
    p_c_ratio_normalized: Number,
    safe_demand_normalized: Number,
    per_momentum_normalized: Number,
    fear_greed_score: Number,
})

export const fearGreedModel = new mongoose.model('fear_greed_score', fearGreedSchema, "fear_greed_score")