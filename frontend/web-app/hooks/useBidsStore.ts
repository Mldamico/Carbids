import { Bid } from "@/types";
import { create } from "zustand";

type State = {
  bids: Bid[];
};

type Actions = {
  setBids: (bids: Bid[]) => void;
  addBid: (bid: Bid) => void;
};

export const useBidStore = create<State & Actions>((set) => ({
  bids: [],
  setBids: (bids: Bid[]) => {
    set(() => ({
      bids,
    }));
  },
  addBid: (bid: Bid) => {
    set((state) => ({
      bids: !state.bids.find((stateBid) => stateBid.id === bid.id)
        ? [bid, ...state.bids]
        : [...state.bids],
    }));
  },
}));
