export interface ITicket {
  id?: number;
  provider?: string;
  amount?: number;
  currency?: string;
  date?: Date;
  comment?: string;
}
