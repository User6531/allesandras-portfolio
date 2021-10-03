export default class Service {

    _apiDataBaseProjects = './db.json';

    getResource = async (url: string): Promise<string> => {
        const res = await fetch(url);
    
        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }
    
        return await res.json();
    }

    getAllProjects =  async (): Promise<string> => {
        return this.getResource(this._apiDataBaseProjects);
    }
}