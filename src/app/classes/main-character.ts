import { Skill } from '../models/skill';
import { Meditation } from './skills/meditation';

export class MainCharacter {
    // Skills
    public Skills = {
        Meditation: new Meditation()
    };
/*
    public Meditation: Skill = {
        'Meditation',
        'The ability to look inwards and hone mental skills.',
        0,
        1
    };

    public Perception: Skill = new Skill (
        'Meditation',
        'How perceptive one is of their surroundings.',
        0,
        1
    );

    public ManaManipulation: Skill = new Skill (
        'Mana Manipulation',
        'The ability to effectively control mana.',
        0,
        5
    );*/
}
