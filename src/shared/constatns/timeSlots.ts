export const BOOKING_START_HOUR = 9;
export const BOOKING_END_HOUR = 20;

export const TIME_SLOTS: string[] = [];
for (let hour = BOOKING_START_HOUR; hour <= BOOKING_END_HOUR; hour++) {
  TIME_SLOTS.push(`${String(hour).padStart(2, '0')}:00`);
  if (hour < BOOKING_END_HOUR) {
    TIME_SLOTS.push(`${String(hour).padStart(2, '0')}:30`);
  }
}
