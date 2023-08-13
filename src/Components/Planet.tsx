import { useEffect, useState } from "react";
import { IPlanet } from "../Models/IPlanet";
import PlanetsService from "../Services/Planets.Service";

export const Planet = ({selectedPlanetName}: {selectedPlanetName:string}) => {

  const [planet, setPlanet] = useState<IPlanet>();

  useEffect(() => {
    (async () => {
      await getPlanetByName(selectedPlanetName);
    })();
  }, [selectedPlanetName])

  const getPlanetByName = async(planet:string) =>
  {    
    const res = await PlanetsService.getPlanetByName(planet);
    setPlanet(res.data);
  }

  return (
    <div className="container-fluid">
        <div className="row d-flex flex-row flex-nowrap overflow-auto">
            {
                <div className="col-lg-6">
                    <div className="card">
                        <img className="card-img-top" src={`data:image/jpeg;base64,${planet?.planetImage}`} alt="planetimage"></img>
                        <div className="card-body">
                            <div className="form-group row">
                                <label className="col-sm-4 col-form-label fw-bold">Name</label>
                                <div className="col-sm-8">
                                    {planet?.planetName}
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-4 col-form-label fw-bold">Distance from Sun</label>
                                <div className="col-sm-8">
                                    {planet?.distance}
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-4 col-form-label fw-bold">Mass</label>
                                <div className="col-sm-8">
                                    {planet?.mass}
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-4 col-form-label fw-bold">Diameter</label>
                                <div className="col-sm-8">
                                    {planet?.diameter}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    </div>
  );
};