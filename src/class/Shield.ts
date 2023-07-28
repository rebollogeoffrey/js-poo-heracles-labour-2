import { IShield } from "../Interface";

export class Shield implements IShield {
  name: string;
  protection: number;

  constructor(name: string, protection: number = 10) {
    this.name = name;
    this.protection = protection;
  }
}

module.exports = { Shield };
