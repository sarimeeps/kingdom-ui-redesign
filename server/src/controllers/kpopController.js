import { kpop_merch } from "../services/dataLoader.js";

export function getAllKpopMerch(req, res) {
    res.json(kpop_merch)
}