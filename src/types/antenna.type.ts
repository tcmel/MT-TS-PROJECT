export interface Antenna {
  id: string
  name: string
  code: string
  operator: string
  type: string
  status: "maintenance" | "out_of_service" | "active"
  powerKw: number
  heightMts: number
  neighborhood: string
  latitude: number
  longitude: number
  installedAt: string
}
