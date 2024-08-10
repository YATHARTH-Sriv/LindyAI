"use client"

import { Button, Textarea } from "@nextui-org/react"
import { Send } from "lucide-react"
import { type useChat } from "ai/react"

type HandleInputChange = ReturnType<typeof useChat>["handleInputChange"]
type HandleSubmit = ReturnType<typeof useChat>["handleSubmit"]
type SetInput = ReturnType<typeof useChat>["setInput"]

interface ChatInputProps {
  input: string
  handleInputChange: HandleInputChange
  handleSubmit: HandleSubmit
  setInput: SetInput
}

// export const ChatInput = ({ handleInputChange, handleSubmit, input, setInput }: ChatInputProps) => {
//   return (
//     <div className="z-10 bg-zinc-900 absolute bottom-0 left-0 w-full">
//       <div className="mx-2 flex flex-row gap-3 md:mx-4 md:last:mb-6 lg:mx-auto lg:max-w-2xl xl:max-w-3xl">
//         <div className="relative flex h-full flex-1 items-stretch md:flex-col">
//           <div className="relative flex flex-col w-full flex-grow p-4">
//             <form onSubmit={handleSubmit} className="relative">
//               <Textarea
//                 minRows={4}
//                 autoFocus
//                 onChange={handleInputChange}
//                 value={input}
//                 onKeyDown={(e) => {
//                   if (e.key === "Enter" && !e.shiftKey) {
//                     e.preventDefault()
//                     handleSubmit()
//                     setInput("")
//                   }
//                 }}
//                 placeholder="Enter your question..."
//                 className="resize-none bg-zinc-800 hover:bg-zinc-900 rounded-xl text-base"
//               />

//               <Button
//                 size="sm"
//                 type="submit"
//                 className="absolute z-10 border border-border bg-zinc-900 right-2 bottom-2"
//               >
//                 <Send className="size-4" />
//               </Button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }
export const ChatInput = ({ handleInputChange, handleSubmit, input, setInput }: ChatInputProps) => {
    return (
      <div className="absolute bottom-0 left-0 w-full bg-zinc-900 z-10">
        <div className="mx-2 md:mx-4 lg:mx-auto lg:max-w-2xl xl:max-w-3xl flex flex-row gap-3 md:last:mb-6">
          <div className="flex flex-1 items-stretch">
            <div className="flex-grow p-4">
              <form onSubmit={handleSubmit} className="relative">
                <Textarea
                  minRows={4}
                  autoFocus
                  onChange={handleInputChange}
                  value={input}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && !e.shiftKey) {
                      e.preventDefault()
                      handleSubmit()
                      setInput("")
                    }
                  }}
                  placeholder="Enter your question..."
                  className="resize-none bg-zinc-800 rounded-xl text-base placeholder:text-zinc-500 focus:bg-zinc-900 focus:ring-2 focus:ring-blue-500 transition"
                />
  
                <Button
                  size="sm"
                  type="submit"
                  className="absolute right-2 bottom-2 border bg-zinc-900 border-zinc-700 hover:bg-zinc-800 transition"
                >
                  <Send className="w-4 h-4" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
  