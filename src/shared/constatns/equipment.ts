export const EQUIPMENT_LABELS = {
  tv: 'TV',
  whiteboard: '화이트보드',
  video: '화상장비',
  speaker: '스피커',
} as const;

export type EquipmentKey = keyof typeof EQUIPMENT_LABELS;
