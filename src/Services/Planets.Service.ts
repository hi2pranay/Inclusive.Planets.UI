import apiClient from "../http-common";
import { IPlanet } from "../Models/IPlanet";

class PlanetsService  {

    getAllPlanets = async() =>
    {
      return await apiClient.get('/planets');
    }

    getPlanetByName = async(planetName:string) =>
    {
      return await apiClient.get('/planet/'+planetName);
    }
}

export default new PlanetsService();