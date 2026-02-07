import mapboxgl from "mapbox-gl"
import type { Antenna } from "../types/antenna.type"

let map: mapboxgl.Map

// Objeto con marcadores por id.
let markers: Record<string, mapboxgl.Marker> = {}

export function initMap() {
  mapboxgl.accessToken = "pk.eyJ1IjoiYW5kcmVzeGF2aWVyOTkiLCJhIjoiY20zbWUyMWdqMTFzZDJrcHhidjlhZjFwaCJ9.JxyJSYQBmQI77epaw4xUaQ"
  map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/streets-v11",
    center: [-79.88621, -2.19616],
    zoom: 10
  })

  // Validación de carga de mapa
  //map.on("load", () => {
  //  console.log("map listísimo.")
  //})
}

export function showAntenna(antenna: Antenna) {
  if (markers[antenna.id]) {
    console.log("Ya existe un marker, gracias.") // Na más pa saber que ya tengo el marker.
    return
  }

  let popup = new mapboxgl.Popup({ offset: 20 })
    popup.setHTML(`
      <strong>${antenna.name}</strong><br/>
      Operator: ${antenna.operator}<br/>
      Type: ${antenna.type}<br/>
      Status: ${antenna.status}<br/>
      Powe (kW): ${antenna.powerKw} kW<br/>
      Neighborhood: ${antenna.neighborhood}
    `)

  let marker = new mapboxgl.Marker()
    marker.setLngLat([antenna.longitude, antenna.latitude])
    marker.setPopup(popup) // Aqui agrego el listener para que cuando clicko, entonces se cree (librería).
    marker.addTo(map)

  // Guardo mi marcadorcito.
  markers[antenna.id] = marker
}

export function hideAntenna(id: string) {
  let marker = markers[id]
  if (!marker) {
    console.log("No existe un marker, añadale uno, gracias.") // Na más pa saber que no tengo el marker.
    return
  }
  marker.remove()
  delete markers[id]
}
