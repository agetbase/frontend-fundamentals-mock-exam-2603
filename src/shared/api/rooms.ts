import { http } from 'utils/http';

export interface Room {
  id: string;
  name: string;
  floor: number;
  capacity: number;
  equipment: string[];
}
export function getRooms() {
  return http.get<Room[]>('/api/rooms');
}
