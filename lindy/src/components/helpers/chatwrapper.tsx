"use client"

import { Message, useChat } from "ai/react"
import { Messages } from "./Messages"
import { ChatInput } from "./Chatinput"

export const ChatWrapper = ({
  sessionId,
  initialMessages,
}: {
  sessionId: string
  initialMessages: Message[]
}) => {
  const { messages, handleInputChange, handleSubmit, input, setInput } = useChat({
    api: "/api/chat-stream",
    body: { sessionId },
    initialMessages,
  })

  return (
    <div className="relative min-h-full bg-zinc-500 flex divide-y divide-zinc-700 flex-col justify-between gap-2">
      <div className="flex-1 text-black bg-white justify-between flex flex-col">
        <Messages messages={messages} />
      </div>

      <ChatInput
        input={input}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
        setInput={setInput}
      />
    </div>
  )
}