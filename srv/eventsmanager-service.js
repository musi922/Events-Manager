const cds = require("@sap/cds");

class EventsService extends cds.ApplicationService {
    async init() {
        this.before("CREATE", "Event", this.#validateEventEntry);
        await super.init();
    }
    async #validateEventEntry(req) {
        const {EventID} = req.data;
        if (!EventID) return req.error(400, "Id_is_Required");
        
        const [existingId] = await cds.run(SELECT.from("Event").where({ EventID }));
        if (existingId) req.error(409, "Id_exists");
    }
}

module.exports = EventsService;