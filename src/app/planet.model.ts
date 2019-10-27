export class Planet {
  public name: string;
  public rotation_period: string;
  public orbital_period: string;
  public diameter: string;
  public climate: string;
  public gravity: string;
  public terrain: string;
  public surface_water: string;
  public population: string;
  public residents: string[];
  public films: string[];
  public created: string;
  public edited: string;
  public url: string;

  constructor(
    name: string,
    rotation_period: string,
    orbital_period: string,
    diameter: string,
    climate: string,
    gravity: string,
    terrain: string,
    surface_water: string,
    population: string,
    residents: string[],
    films: string[],
    created: string,
    edited: string,
    url: string
  ) {
    this.name = name;
    this.rotation_period = rotation_period;
    this.orbital_period = orbital_period;
    this.diameter = diameter;
    this.climate = climate;
    this.gravity = gravity;
    this.terrain = terrain;
    this.surface_water = surface_water;
    this.population = population;
    this.residents = residents;
    this.films = films;
    this.created = created;
    this.edited = edited;
    this.url = url;
  }
}
