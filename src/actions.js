export const RECEIVE_GROUNDS = 'RECEIVE_GROUNDS'

export function receiveGrounds (grounds) {
  return {
    type: RECEIVE_GROUNDS,
    grounds
  }
}

export const RECEIVE_VISIBLE_GROUNDS = 'RECEIVE_VISIBLE_GROUNDS'

export function receiveVisibleGrounds (grounds) {
  return {
    type: RECEIVE_VISIBLE_GROUNDS,
    grounds
  }
}

export const RECEIVE_MAP_BOUNDS = 'RECEIVE_MAP_BOUNDS'

export function receiveMapBounds (bounds) {
  return {
    type: RECEIVE_MAP_BOUNDS,
    bounds
  }
}
