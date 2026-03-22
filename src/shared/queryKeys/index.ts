export const queryKeys = {
  rooms: {
    all: ['rooms'] as const,
  },
  reservations: {
    all: ['reservations'] as const,
    byDate: (date: string) => ['reservations', date] as const,
  },
  myReservations: {
    all: ['myReservations'] as const,
  },
};
