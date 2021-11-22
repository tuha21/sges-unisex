import BaseService from "./baseService";

class ComboService extends BaseService {
    constructor () {
        super()
        this.catalogUrl = "/combo"
    }

}
export default new ComboService()