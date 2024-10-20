/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-duplicate-enum-values */
import moment from 'moment'
import 'moment/locale/es'

export enum DateFormatsEnum {
  CreatedAt = 'MMM DD YYYY | HH:mm',
  DateWithDayFirst = 'DD MMM YYYY | HH:mm',
  DateWithDayFirstNoHs = 'DD MMMM YYYY',
  DateWithOutTime = 'MMM DD YYYY',
  DateWithTime = 'MMM DD YYYY, H:mm',
  DateWithTimeAndDayFirst = 'D MMMM YYYY, HH:mm',
  DateInText = 'LLL',
  DateInTextWithoutTime = 'LL',
  OnlyYear = 'YYYY',
  Delivery = 'MMM DD YYYY',
  DeliveryLong = '[Entrega estimada el] dddd DD [de] MMMM [antes de las]',
  SkydropxDelivery = 'DD [de] MMMM YYYY',
  PackagingSection = 'DD [de] MMMM [a las] HH:mm',
  DayOfMonth = 'DD',
  FreezePatient = 'YYYY-MM-DDThh:mm:ss',
  OrdersByDay = 'YYYY-MM-DD',
}

export function formatDate(date: any, format: DateFormatsEnum) {
  return moment(date).locale('es').format(format)
}
