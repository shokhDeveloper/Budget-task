import { fetchAll } from "#postgres"
const getExpanses = () => fetchAll(
"SELECT expanse_id, expanse_name, expanse_cost, TO_CHAR(expanse_date, 'yyyy-mm-dd') as expanse_date FROM expanse;")
export const routerController = {
    GET: async function(_, res) {
        res.render("index.html", {expanse: await getExpanses() });
    }
}