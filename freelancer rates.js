// Get those rates calculated!
/**
 * The day rate, given a rate per hour
 *
 * @param {number} ratePerHour
 * @returns {number} the rate per day
 */
const noOfHours=8;
const billableDays=22;
export function dayRate(ratePerHour) {
  var ratePerDay= ratePerHour* noOfHours;
  return ratePerDay;
}
/**
 * Calculates the number of days in a budget, rounded down
 *
 * @param {number} budget: the total budget
 * @param {number} ratePerHour: the rate per hour
 * @returns {number} the number of days
 */
export function daysInBudget(budget, ratePerHour) {
  var days = budget/dayRate(ratePerHour);
  return Math.floor(days);
}
/**
 * Calculates the discounted rate for large projects, rounded up
 *
 * @param {number} ratePerHour
 * @param {number} numDays: number of days the project spans
 * @param {number} discount: for example 20% written as 0.2
 * @returns {number} the rounded up discounted rate
 */
export function priceWithMonthlyDiscount(ratePerHour, numDays, discount) {
  var noOfMonths= Math.floor(numDays/22);
  var remDays=numDays%22;
  var charged= 1 -discount;
  var monthBill = noOfMonths*billableDays*dayRate(ratePerHour)*charged;
  var remDaysBill= remDays * dayRate(ratePerHour);
  return Math.ceil(monthBill + remDaysBill); 
}
