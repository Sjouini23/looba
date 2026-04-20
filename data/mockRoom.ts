import { Player } from "@/types/game";

export const roomCode = "LMTN-73";

export const mockPlayers: Player[] = [
  { id: "p1", name: "Alya", isHost: true, ready: true, score: 32, badge: "Group Mind" },
  { id: "p2", name: "Youssef", ready: true, score: 28, badge: "Fastest Brain" },
  { id: "p3", name: "Meriem", ready: false, score: 25, badge: "Taste Leader" },
  { id: "p4", name: "Skander", ready: true, score: 19 }
];
