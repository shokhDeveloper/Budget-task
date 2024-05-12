import { fetch } from "#postgres";

export const expanseController = {
    POST: async function(req, res) {
        const insertExpanse = await fetch(`INSERT INTO expanse (expanse_name, expanse_cost) VALUES($1, $2) RETURNING *`, req.body.expanse_name, +(req.body.expanse_cost));
        console.log(insertExpanse)
        res.redirect("/home")
    },
    GET: async function(req, res) {
        const deleteExpanse = await fetch(`DELETE from expanse WHERE expanse_id=${req.params.expanseId} RETURNING *`)
        console.log(deleteExpanse)
        res.redirect("/home")
    }
}