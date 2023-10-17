import puppeteer from 'puppeteer';
import fs from 'fs';

import {adeegBasicFood} from './basic_food_section.js';
import {adeegDrinks} from './drink_section.js';
import {adeegMobileAndAcc} from './mobile_section.js';


const main = async() =>{
  adeegBasicFood();
  adeegDrinks();
  adeegMobileAndAcc();
  
}


main();