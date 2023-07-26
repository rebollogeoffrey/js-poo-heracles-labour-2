import { IShield } from "../Interface";

export class Shield implements IShield {
  name: string;
  protection: number = 10;

  constructor(name: string, protection?: number) {
    this.name = name;
    if (protection !== undefined) {
      this.protection = protection;
    }
  }
}

module.exports = { Shield };
