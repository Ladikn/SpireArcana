import { Skill } from '../../models/skill';
import { Ability } from '../../models/ability';

export class Meditation implements Skill {
    public Name = 'Meditation';
    public Description = 'The ability to look inwards and hone mental skills.';
    public Level = 0;
    public Difficulty = 1;

    public Abilities = {};
    
    constructor() {
        let Introspection: Ability = {
            Name: 'Introspection',
            Description: '',
            RequiredLevel: 5,
            Aquired: false
        }

        this.Abilities["Introspection"] = Introspection;
    }
}
