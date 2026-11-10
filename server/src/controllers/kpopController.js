import { kpop_merch } from "../services/db.js";

export function getAllKpopMerch(req, res) {
    res.json(kpop_merch)
}