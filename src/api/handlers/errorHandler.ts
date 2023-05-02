const statusMessages: {
  [key: number]: () => string
} = {
  400: (): string => {
    return 'Error 400: Solicitud incorrecta'
  },
  401: (): string => {
    return 'Error 401: No autorizado'
  },
  403: (): string => {
    return 'Error 403: Prohibido'
  },
  404: (): string => {
    return 'Error 404: No encontrado'
  },
  422: (): string => {
    return 'Error 422: Entidad no procesable'
  },
  500: (): string => {
    return 'Error 500: Error interno del servidor'
  },
  503: (): string => {
    return 'Error 503: Servicio no disponible'
  }
}


export default function errorHandler (status: number): string {
  return (status && statusMessages[status]) 
    ? statusMessages[status]() 
    : 'Error desconocido'
}