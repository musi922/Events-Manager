const cds = require("@sap/cds");

class EventsService extends cds.ApplicationService {
    async init() {
        this.before("CREATE", "Event", this.#validateEventEntry);
        await super.init();
    }
    async #validateEventEntry(req) {
        const ID = req.data;
    }
}

module.exports = EventsService;