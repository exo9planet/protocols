import BN = require("bn.js");

export interface OrderInfo {
  // required fields in contract
  owner?: string;
  tokenS: string;
  tokenB: string;
  tokenF?: string;
  amountS: number;
  amountB: number;
  amountF?: number;

  wallet?: string;

  dexID?: number;
  orderID?: number;

  accountS?: number;
  accountB?: number;
  accountF?: number;

  walletSplitPercentage?: number;
  walletF?: number;
  minerF?: number;
  minerS?: number;

  tokenIdS?: number;
  tokenIdB?: number;
  tokenIdF?: number;

  validSince?: number;
  validUntil?: number;

  allOrNone?: boolean;

  waiveFeePercentage?: number;

  index?: number;
  balanceS?: number;
  balanceB?: number;
  balanceF?: number;

  [key: string]: any;
}

export interface RingInfo {
  orderA: OrderInfo;
  orderB: OrderInfo;

  miner?: number;
  fee?: number;
}

export interface RingsInfo {
  rings: RingInfo[];

  publicDataHash?: string;
  timestamp?: number;

  operator?: number;
}

export interface OrderSettlementData {
  dexID: number;                        // 2 bytes
  orderID: number;                      // 2 bytes

  // TokenS -> TokenB
  fromS: number;                        // 3 bytes
  toB: number;                          // 3 bytes
  amountS: number;                      // 12 bytes
  toMargin: number;                     // 3 bytes
  marginPercentage: number;             // 1 byte

  // TokenF -> FeeRecipients (wallet, operator, burn)
  fromF: number;                        // 3 bytes
  toWallet: number;                     // 3 bytes
  toOperator: number;                   // 3 bytes
  amountF: number;                      // 12 bytes
  walletSplitPercentage: number;        // 1 byte
}

export interface RingSettlementData {
  orderA: OrderSettlementData;
  orderB: OrderSettlementData;
}

export interface Deposit {
  secretKey: string;
  publicKeyX: string;
  publicKeyY: string;
  dexID: number;
  tokenID: number;
  balance: number;
}

export interface Withdrawal {
  account: number;
  amount: number;
}

export interface Block {
  blockIdx: number;
  filename: string;
}
