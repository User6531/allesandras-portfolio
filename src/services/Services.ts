import axios from 'axios';

export default class Service {

    _apiDataBaseProjects = 'https://raw.githubusercontent.com/User6531/db-allesandras-portfolio/main/db.json';
    
    api = axios.create({
        baseURL: this._apiDataBaseProjects
    })

    getAllProjects = (): Promise<string> => this.api.get('');

    // getResource = async (url: string): Promise<string> => {
    //     const res = await fetch(url);
    
    //     if (!res.ok) {
    //         throw new Error(`Could not fetch ${url}, status: ${res.status}`);
    //     }
    
    //     return await res.json();
    // }

    // getAllProjects =  async (): Promise<string> => {
    //     return this.getResource(this._apiDataBaseProjects);
    // }
}