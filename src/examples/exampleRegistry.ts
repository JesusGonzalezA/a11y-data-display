import { shipmentTrackingExample } from '../lessons/02-iconografia-y-ayuda-contextual/02.01-iconografia-y-nombre-accesible/examples/ShipmentTracking/ShipmentTracking.example'
import { mailToolbarExample } from '../lessons/02-iconografia-y-ayuda-contextual/02.02-tooltip/examples/MailToolbar/MailToolbar.example'
import { ruralHouseExample } from '../lessons/03-listas-cards-y-orden-de-lectura/03.01-listas/examples/RuralHouse/RuralHouse.example'
import { courseCatalogExample } from '../lessons/03-listas-cards-y-orden-de-lectura/03.02-cards-y-orden-de-lectura/examples/CourseCatalog/CourseCatalog.example'
import { orderHistoryExample } from '../lessons/04-tablas-accesibles/04.01-tabla-simple/examples/OrderHistory/OrderHistory.example'
import { planComparisonExample } from '../lessons/04-tablas-accesibles/04.02-tabla-con-doble-eje/examples/PlanComparison/PlanComparison.example'
import { raceResultsExample } from '../lessons/04-tablas-accesibles/04.03-tabla-ordenable/examples/RaceResults/RaceResults.example'
import { jobBoardExample } from '../lessons/04-tablas-accesibles/04.04-tabla-con-filtros/examples/JobBoard/JobBoard.example'
import { classTimetableExample } from '../lessons/05-patron-grid/05.01-elegir-tabla-o-grid/examples/ClassTimetable/ClassTimetable.example'
import { courtBookingExample } from '../lessons/05-patron-grid/05.02-navegacion-y-gestion-del-foco/examples/CourtBooking/CourtBooking.example'
import { subscriptionsExample } from '../lessons/05-patron-grid/05.03-acciones-y-revision-del-recorrido/examples/Subscriptions/Subscriptions.example'
import type { ExampleDefinition } from './types'

/** Única fuente de las páginas de ejemplo, en el orden del curso. */
export const exampleRegistry: ExampleDefinition[] = [
  shipmentTrackingExample,
  mailToolbarExample,
  ruralHouseExample,
  courseCatalogExample,
  orderHistoryExample,
  planComparisonExample,
  raceResultsExample,
  jobBoardExample,
  classTimetableExample,
  courtBookingExample,
  subscriptionsExample,
]
