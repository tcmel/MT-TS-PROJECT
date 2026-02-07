import DataTable from "datatables.net"
import { getAntennas } from "./api/antennas.api"
import { initMap, showAntenna, hideAntenna } from "./map/map"
import "mapbox-gl/dist/mapbox-gl.css" // Esto pone los markers en su sitio, sino locos.


async function start() {
  const antennas = await getAntennas() // Mi arreglo de antenas.
  const tbody = document.querySelector("#antennasTable tbody") as HTMLTableSectionElement // Busco el TBoby del HTML.

  antennas.forEach(a => {
    const tr = document.createElement("tr")
    tr.innerHTML = `
      <td>${a.name}</td>
      <td>${a.operator}</td>
      <td>${a.type}</td>
      <td>${a.status}</td>
      <td>${a.neighborhood}</td>
      <td>${a.longitude}</td>
      <td>${a.latitude}</td>
      <td>
        <button class="show-btn">Show Location</button>
        <button class="hide-btn">Hide Location</button>
      </td>
    `

    tr.querySelector(".show-btn")?.addEventListener("click", () => {
      showAntenna(a)
    })

    tr.querySelector(".hide-btn")?.addEventListener("click", () => {
      hideAntenna(a.id)
    })

    tbody.appendChild(tr)
  })

  new DataTable("#antennasTable")
  initMap()
}

start()
