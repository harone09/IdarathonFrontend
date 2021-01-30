import {Employe} from '../Models/Employe';
import {Services} from './services';
import {Roles} from './roles';

export const Employees: Employe[] = [
  {id: 1, nom : 'nom1', prenom: 'prenom1', service: Services.filter(c => c.id === 1)[0],
    role: Roles.filter(c => c.id === 1), modeTravaille : {id: 1, date: new Date(), mode: 'Presentiel', roulement: 0, employe : 1}},
  {id: 2, nom : 'nom2', prenom: 'prenom2', service: Services.filter(c => c.id === 2)[0],
    role: Roles.filter(c => c.id === 1), modeTravaille : {id: 1, date: new Date(), mode: 'Presentiel', roulement: 0, employe : 2}}

];
