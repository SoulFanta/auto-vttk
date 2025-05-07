export interface City {
  id: string;
  name: string;
}

export interface Brand {
  id: string;
  name: string;
}

export interface Model {
  id: string;
  name: string;
}

export interface Modification {
  id: string;
  name: string;
}

export interface IStep {
  name: string;
}

export interface ISteps {
  [key: number]: IStep;
}
