import type { Antenna } from "../types/antenna.type"

export async function getAntennas(): Promise<Antenna[]> {
  const response = await fetch("https://6823c58065ba05803397d6df.mockapi.io/api/v1/antennas")
  const data: Antenna[] =  await response.json() // También uso await para que me transforme los datos, response no tiene los datos finales que necesito, es una promesa.
  
  return data
}
