import { http } from 'utils/http';

export interface Reservation {
  id: string;
  roomId: string;
  date: string;
  start: string;
  end: string;
  attendees: number;
  equipment: string[];
}
export function getReservations(date: string) {
  return http.get<Reservation[]>(`/api/reservations?date=${date}`);
}

export interface CreateReservationBody {
  roomId: string;
  date: string;
  start: string;
  end: string;
  attendees: number;
  equipment: string[];
}
export function createReservation(data: CreateReservationBody) {
  return http.post<CreateReservationBody, CreateReservationResult>('/api/reservations', data);
}

export interface CreateReservationResult {
  ok: boolean;
  reservation?: unknown;
  code?: string;
  message?: string;
}
export function getMyReservations() {
  return http.get<Reservation[]>('/api/my-reservations');
}

export interface CancelReservationResult {
  ok: boolean;
}
export function cancelReservation(id: string) {
  return http.delete<CancelReservationResult>(`/api/reservations/${id}`);
}
