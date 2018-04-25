import { Ability } from './ability';

export interface Skill {
    Name: string;
    Description: string;
    Level: number;
    Difficulty: number;
    Abilities?: {[key: string]: Ability};
}
