import { createSlice } from "@reduxjs/toolkit";
import Notify from "simple-notify";
import "simple-notify/dist/simple-notify.css";

import Eghtesad from "./images/Eghtesad Novin.png.jpeg";
import Ayande from "./images/ayande.png.jpeg";
import BlueBank from "./images/blue.png.jpeg";
import Gardeshgari from "./images/gardeshgari.png.jpeg";
import Keshavarzi from "./images/keshavarzi.png.jpeg";
import Markazi from "./images/markazi.png.jpeg";
import Maskan from "./images/maskan1.png.jpeg";
import Melat from "./images/melat.png.jpeg";
import Pasargad from "./images/pasargad.png.jpeg";
import Persian from "./images/persian.png.jpeg";
import Refah from "./images/refah.png.jpeg";
import Saderat from "./images/saderat.png.jpeg";
import Saman from "./images/saman.png.jpeg";
import Sepah from "./images/sepah.png.jpeg";
import Tejarat from "./images/tejarat.png.jpeg";

function pushNotify() {
  new Notify({
    status: "error",
    title: "Please Fill All Inputs",
    text: "Check Them",
  });
}

export const addCardSlice = createSlice({
  name: "addcard",
  initialState: {
    newCard: [],
    historyCard: [],
    sendCardToPay: null,
    secondCard: 20,
    bankCode: [
      {
        bankName: "Maskan",
        code: 6280,
        url: Maskan,
        bg: { backgroundColor: "#FF9800" },
      },
      {
        bankName: "Eghtesad",
        code: 6274,
        url: Eghtesad,
        bg: { backgroundColor: "#7B1FA2" },
      },
      {
        bankName: "Ayande",
        code: 6362,
        url: Ayande,
        bg: { backgroundColor: "#795548" },
      },
      {
        bankName: "BlueBank",
        code: 6219,
        url: BlueBank,
        bg: { backgroundColor: "#1E88E5" },
      },
      {
        bankName: "Gardeshgari",
        code: 5055,
        url: Gardeshgari,
        bg: { backgroundColor: "#D32F2F" },
      },
      {
        bankName: "Keshavarzi",
        code: 6392,
        url: Keshavarzi,
        bg: { backgroundColor: "#2E7D32" },
      },
      {
        bankName: "Markazi",
        code: 6367,
        url: Markazi,
        bg: { backgroundColor: "#283593" },
      },
      {
        bankName: "Melat",
        code: 9919,
        url: Melat,
        bg: { backgroundColor: "#B71C1C" },
      },
      {
        bankName: "Pasargad",
        code: 6393,
        url: Pasargad,
        bg: { backgroundColor: "#F9A825" },
      },
      {
        bankName: "Persian",
        code: 6221,
        url: Persian,
        bg: { backgroundColor: "#A1887F" },
      },
      {
        bankName: "Refah",
        code: 5894,
        url: Refah,
        bg: { backgroundColor: "#5C6BC0" },
      },
      {
        bankName: "Saderat",
        code: 6037,
        url: Saderat,
        bg: { backgroundColor: "#1A237E" },
      },
      {
        bankName: "Saman",
        code: 8619,
        url: Saman,
        bg: { backgroundColor: "#1E88E5" },
      },
      {
        bankName: "Sepah",
        code: 5892,
        url: Sepah,
        bg: { backgroundColor: "#E57373" },
      },
      {
        bankName: "Tejarat",
        code: 6273,
        url: Tejarat,
        bg: { backgroundColor: "#5C6BC0" },
      },
    ],
  },
  reducers: {
    addNewCard: (state, actions) => {
      try {
        if (
          actions.payload.amountCard.length > 3 &&
          actions.payload.nameCard.length > 2 &&
          actions.payload.numberCard.length == 16 &&
          actions.payload.cvvCard.length > 2 &&
          actions.payload.yearCard.length &&
          actions.payload.monthCard.length &&
          actions.payload.imgCard
        ) {
          state.newCard = [...state.newCard, actions.payload];
        } else {
          pushNotify();
        }
      } catch {
        pushNotify();
      }
    },
    sendCardToPayHandler: (state, actions) => {
      state.sendCardToPay = actions.payload;
    },
    payMonyHandler: (state, actions) => {
      const newMony = actions.payload.amountCard - actions.payload.amounteDes;
      if (
        actions.payload.imgrDes &&
        actions.payload.numberDes.length == 16 &&
        newMony > 0 &&
        actions.payload.amounteDes
      ) {
        state.newCard.map((card) => {
          if (card.id == actions.payload.sendedCardId) {
            state.historyCard = [...state.historyCard, actions.payload];
            card.amountCard = newMony;
          }
        });
      } else {
        pushNotify();
      }
    },
  },
});

export const { addNewCard, sendCardToPayHandler, payMonyHandler } =
  addCardSlice.actions;

export default addCardSlice.reducer;
