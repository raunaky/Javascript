import numeral from 'numeral';
import chalk from 'chalk';
import css from './index.css';

const coursevalue = numeral(1000).format('$0,0.00');
console.log(chalk.bgRed(`I would pay ${coursevalue} for this awsome course`));
