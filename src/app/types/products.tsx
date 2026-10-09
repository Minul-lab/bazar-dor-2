export interface IProducts {
  id: number;

  nameBn: string;
  category: string;
  categoryNameBn: string;
  categoryIcon: string;
  unit: string;
  image: string;
  today: number;
  yesterday: string;
  lastWeek: string;
  lastMonth: string;
  change: {
    dir: string;
    pct: number;
  };
  markets: object[];
}
