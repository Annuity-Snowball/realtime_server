import express from "express";
import mongoose from "mongoose";
import { mongoClient } from "../config/db.config.js";
import { fearGreedModel } from "./fearGreed.model.js";

const router = express.Router()
// const db = mongoClient.db("snowball_data_engineer")
// const collection = db.collection("fear_greed_score")

// TODO: 3개월 전, 6개월 전 추가하기
router.get('/', async (req, res, next) => {
    const result = {
        "yesterday": await getScore(1),
        "week_ago": await getScore(7),
        "month_ago": await getScore(30),
        "year_ago": await getScore(365)
    }

    res.send(result)
})

async function getScore(day){
    const searchDate = getDate(day)

    const query = fearGreedModel.where({ Date: searchDate })
    const document = await query.findOne()

    return document ? document.fear_greed_score : getScore(day+1);
}

function getDate(day){
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() - day);
    
    const year = targetDate.getFullYear();
    const month = String(targetDate.getMonth() + 1).padStart(2, '0');
    const _day = String(targetDate.getDate()).padStart(2, '0');
    return `${year}-${month}-${_day}`;
}

export default router