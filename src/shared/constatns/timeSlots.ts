const BOOKING_START_HOUR = 9;
const BOOKING_END_HOUR = 20;

export const TIME_SLOTS: string[] = [];
for (let h = BOOKING_START_HOUR; h <= BOOKING_END_HOUR; h++) {
  TIME_SLOTS.push(`${String(h).padStart(2, '0')}:00`);
  if (h < BOOKING_END_HOUR) {
    TIME_SLOTS.push(`${String(h).padStart(2, '0')}:30`);
  }
}
