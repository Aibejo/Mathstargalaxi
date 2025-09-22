import { type BadgeInfo } from './types';

export const BADGES: { [key: string]: BadgeInfo } = {
  LEVEL_1_COMPLETE: {
    name: "Penjelajah Awal",
    description: "Berhasil menyelesaikan Level 1.",
    iconType: "rocket",
  },
  LEVEL_2_COMPLETE: {
    name: "Ahli Bentuk",
    description: "Berhasil menyelesaikan Level 2.",
    iconType: "rocket",
  },
  LEVEL_3_COMPLETE: {
    name: "Master Aplikasi",
    description: "Berhasil menyelesaikan Level 3.",
    iconType: "rocket",
  },
  PERFECT_SCORE_L1: {
    name: "Bintang Sempurna L1",
    description: "Mendapatkan skor 100% di Level 1.",
    iconType: "star",
  },
  PERFECT_SCORE_L2: {
    name: "Bintang Sempurna L2",
    description: "Mendapatkan skor 100% di Level 2.",
    iconType: "star",
  },
  PERFECT_SCORE_L3: {
    name: "Bintang Sempurna L3",
    description: "Mendapatkan skor 100% di Level 3.",
    iconType: "star",
  },
  GALAXY_MASTER: {
    name: "Penakluk Galaksi",
    description: "Menyelesaikan semua level yang ada.",
    iconType: "trophy",
  },
  STREAK_MASTER: {
    name: "Master Beruntun",
    description: "Menjawab 10 pertanyaan dengan benar berturut-turut.",
    iconType: "crown",
  },
};