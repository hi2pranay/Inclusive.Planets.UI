import { useEffect, useState } from "react";
import { IPlanet } from "../Models/IPlanet";
import PlanetsService from "../Services/Planets.Service";

export const PlanetsList = ({setPlanet}: {setPlanet:any}) => {

  const [planets, setPlanets] = useState<IPlanet[]>([]);

  useEffect(() => {
    (async () => {
      await getAllPlanets();
    })();
  }, [])

  const getAllPlanets = async() =>
  {    
    const res = await PlanetsService.getAllPlanets();
    setPlanets(res.data);
  }

  return (
    <div className="container-fluid">
      <div className="row d-flex flex-row flex-nowrap overflow-auto">
        {
          planets && planets.map((planet) => (
            <div className="col-lg-2">
              <div className="card" style={{width:200, marginBottom: 10, cursor: "pointer"}} onClick={() => setPlanet(planet.planetName)}>
                <img className="card-img-top" src={`data:image/jpeg;base64,${planet.planetImage}`} alt="planetimage"></img>
                <div className="card-body">
                  <h5 className="card-title">{ planet.planetName.toUpperCase() }</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
    </div>
  );
};