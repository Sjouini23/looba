import { Player } from "@/types/game";

export const roomCode = "LMTN-73";

export const mockPlayers: Player[] = [
  { id: "p1", name: "Alya", isHost: true, ready: true, mood: "🔥" },
  { id: "p2", name: "Youssef", ready: true, mood: "😂" },
  { id: "p3", name: "Meriem", ready: false, mood: "😌" },
  { id: "p4", name: "Skander", ready: true, mood: "🫖" }
];
