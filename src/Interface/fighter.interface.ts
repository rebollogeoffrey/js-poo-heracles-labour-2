export interface IFighter {
  name: string;
  strength: number;
  dexterity: number;
  life: number;
  fight(defender: IFighter): number;
  isAlive(): boolean;
}
