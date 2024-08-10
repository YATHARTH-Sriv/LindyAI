import { type Message as TMessage } from "ai/react"
import { Message } from "./Message"
import { MessageSquare } from "lucide-react"

interface MessagesProps {
  messages: TMessage[]
}

export const Messages = ({ messages }: MessagesProps) => {
  return (
    <div className="flex-1 max-h-[calc(100vh-10.5rem)] flex flex-col overflow-y-auto">
      {messages.length ? (
        messages.map((message, i) => (
          <Message key={i} content={message.content} isUserMessage={message.role === "user"} />
        ))
      ) : (
        <div className="flex flex-1 flex-col items-center justify-center gap-2">
          <MessageSquare className="w-8 h-8 text-blue-500" />
          <h3 className="text-xl font-semibold text-white">You're all set!</h3>
          <p className="text-sm text-zinc-500">Ask your first question to get started.</p>
        </div>
      )}
    </div>
  )
}