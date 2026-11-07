export type ChatRole = "user" | "elliot";

export interface ChatMessage {
  id: string;
  role: ChatRole;
  text: string;
  createdAt: number;
}

/** Who is chatting: a name plus an email or phone, asked for before the chat starts. */
export interface VisitorDetails {
  name: string;
  email: string | null;
  phone: string | null;
}

export interface TimelineEvent {
  time: string;
  label: string;
  detail?: string;
}
