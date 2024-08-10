
import { ChatWrapper } from "../../../components/helpers/chatwrapper"
import { ragChat } from "../../../lib/ragchat"
import { redis } from "../../../lib/redis"
import { cookies } from "next/headers"
import { auth } from "@clerk/nextjs/server";
import React from "react";

interface PageProps {
  params: {
    url: string | string[] | undefined
  }
}

function reconstructUrl({ url }: { url: string[] }) {
  const decodedComponents = url.map((component) => decodeURIComponent(component))

  return decodedComponents.join("/")
}

const Page = async ({ params }: PageProps) => {
  const sessionCookie = cookies().get("sessionId")?.value
  const reconstructedUrl = reconstructUrl({ url: params.url as string[] })

  const sessionId = (reconstructedUrl + "--" + sessionCookie).replace(/\//g, "")

  const isAlreadyIndexed = await redis.sismember("indexed-urls", reconstructedUrl)

  const initialMessages = await ragChat.history.getMessages({ amount: 10, sessionId })

  if (!isAlreadyIndexed) {
    await ragChat.context.add({
      type: "html",
      source: reconstructedUrl,
      config: { chunkOverlap: 50, chunkSize: 200 },
    })

    await redis.sadd("indexed-urls", reconstructedUrl)
  }

  return <ChatWrapper sessionId={sessionId} initialMessages={initialMessages} />
}

export default Page