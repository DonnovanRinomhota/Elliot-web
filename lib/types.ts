export type ChatRole = "user" | "elliot";

export interface ChatMessage {
  id: string;
  role: ChatRole;
  text: string;
  createdAt: number;
}

export interface TimelineEvent {
  time: string;
  label: string;
  detail?: string;
}

export interface PerformanceMetric {
  value: string;
  label: string;
}
