/**
 * Determines how long it takes to prepare a certain juice.
 *
 * @param {string} name
 * @returns {number} time in minutes
 */
export function timeToMixJuice(name) {
  switch (name) {
  case 'Pure Strawberry Joy':
    return 0.5;
  case 'Energizer':
    return 1.5;
  case 'Green Garden':
    return 1.5;
  case 'Tropical Island':
    return 3;
  case 'All or Nothing':
    return 5;
  default:
    return 2.5;
}
}

/**
 * Calculates the number of limes that need to be cut
 * to reach a certain supply.
 *
 * @param {number} wedgesNeeded
 * @param {string[]} limes
 * @returns {number} number of limes cut
 */
const LIME_SIZES_TO_WEDGES = {
  small: 6,
  medium: 8,
  large: 10
}
export function limesToCut(wedgesNeeded, limes) {
  let limes_cut=0
  while (wedgesNeeded > 0 & limes.length > 0) {
  limes_cut ++;
  wedgesNeeded -= LIME_SIZES_TO_WEDGES[limes.shift()];
}
  return limes_cut;
}
  

/**
 * Determines which juices still need to be prepared after the end of the shift.
 *
 * @param {number} timeLeft
 * @param {string[]} orders
 * @returns {string[]} remaining orders after the time is up
 */
export function remainingOrders(timeLeft, orders) {
  while (timeLeft > 0 && orders.length > 0){
    timeLeft -= timeToMixJuice(orders.shift());
  }
  return orders;
}
