import {Role} from './Role';
import {Roulement} from './Roulement';
import {Autorisation} from './Autorisation';
import {Profile} from './Profile';
import {Poste} from './Poste';
import {Service} from './Service';

export interface User{
  id: number;
  username: string;
  password: string;
  roles: Role[];
  roulement: Roulement;
  autorisation: Autorisation[];
  nom: string;
  prenom: string;
  profile: Profile;
  poste: Poste;
  service: Service;
}
