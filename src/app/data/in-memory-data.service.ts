import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';
import { Hero } from '../model/hero';
import { Menu } from '../model/menu';
import { Role } from '../model/role';
import { Permission } from '../model/permission';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'cc Mr. Nice' },
      { id: 12, name: 'Narco' },
      { id: 13, name: 'Bombasto' },
      { id: 14, name: 'Celeritas' },
      { id: 15, name: 'Magneta' },
      { id: 16, name: 'RubberMan' },
      { id: 17, name: 'Dynama' },
      { id: 18, name: 'Dr IQ' },
      { id: 19, name: 'Magma' },
      { id: 20, name: 'Tornado' }
    ];

    const menus = [
      { id: 1, name: '首页', url:'/home'},
      { id: 2, name: '用户管理', url:'/system/user'},
      { id: 3, name: '角色管理', url:'/system/role'},
      { id: 4, name: '权限管理', url:'/system/permission'},
    ];
    
    const users = [
      { id: 1, name: 'admin', tel:'1234567890', email:'shmilycai@sina.cn', status:true, desc:'admin', operate:'aaa' },
      { id: 2, name: 'cai-1', tel:'1234567890', email:'shmilycai@sina.cn', status:true, desc:'admin', operate:'aaa' },
      { id: 3, name: 'cai-2', tel:'1234567890', email:'shmilycai@sina.cn', status:true, desc:'admin', operate:'aaa' },
      { id: 4, name: 'cai-3', tel:'1234567890', email:'shmilycai@sina.cn', status:true, desc:'admin', operate:'aaa' },
      { id: 5, name: 'cai-4', tel:'1234567890', email:'shmilycai@sina.cn', status:true, desc:'admin', operate:'aaa' },
      { id: 6, name: 'cai-5', tel:'1234567890', email:'shmilycai@sina.cn', status:true, desc:'admin', operate:'aaa' },
      { id: 7, name: 'cai-6', tel:'1234567890', email:'shmilycai@sina.cn', status:true, desc:'admin', operate:'aaa' },
      { id: 8, name: 'cai-7', tel:'1234567890', email:'shmilycai@sina.cn', status:true, desc:'admin', operate:'aaa' },
      { id: 9, name: 'cai-8', tel:'1234567890', email:'shmilycai@sina.cn', status:true, desc:'admin', operate:'aaa' },
      { id: 10, name: 'caicai', tel:'1234567890', email:'shmilycai@sina.cn', status:true, desc:'admin', operate:'aaa' }
    ];

    const roles = [

    ];

    const permissions = [

    ];

    return {heroes, menus, users, roles, permissions};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  // genId(heroes: Hero[]): number {
  //   return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  // }
  genId<T extends Hero | Menu | Role | Permission | User>(myTable: T[]): number {
    return myTable.length > 0 ? Math.max(...myTable.map(t => t.id)) + 1 : 11;
  }

}


