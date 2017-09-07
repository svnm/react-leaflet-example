export const visibleSelector = state => state.grounds.all.filter((ground, i) => {
  const lat = parseFloat(ground.lat)
  const lng = parseFloat(ground.long)
  const {bounds} = state
  /* lat must be < bounds._northEast.lat and > bounds._southWest.lat */
  /* lng must be < bounds._northEast.lng and > bounds._southWest.lng */
  return (lat < bounds._northEast.lat && lat > bounds._southWest.lat && lng < bounds._northEast.lng && lng > bounds._southWest.lng)
})
