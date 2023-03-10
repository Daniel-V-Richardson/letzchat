import { useEffect, useRef } from 'react';
import Image from "next/image";
import { Message } from "../typings";
import { useSession } from 'next-auth/react';
import TimeAgo from "react-timeago";

type Props = {
    message: Message;
};

function MessageComponent({ message }: Props) {

    const { data: session } = useSession();
    const isUser = session?.user?.email === message.email;

    const messagesEndRef = useRef<null | HTMLDivElement>(null);


    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
    }

    useEffect(() => {
        scrollToBottom()
    }, [message]);



    return (
        <div className={`flex w-fit ${isUser && "ml-auto"}`}>
            <div className={`flex-shrink-0 ${isUser && "order-2"}`}>
                <Image
                    className="rounded-full mx-2"
                    height={10}
                    width={50}
                    src={message.profilePic}
                    alt="Profile Picture"
                />
            </div>
            <div>
                <p className={`text-[0.65rem] px-[2px] pb-[2px] ${isUser ? "text-blue-400 text-right" : "text-red-400 text-left"}`}>{message.username}
                </p>

                <div className="flex items-end">
                    <div className={`px-3 py-2 rounded-lg w-fit text-white  ${isUser ? 'bg-blue-400 order-2 ml-auto' : 'bg-red-400'}`}>
                        <p>
                            {message.message}
                        </p>
                    </div>
                    <p className={`text-[0.65rem] italic px-2 text-gray-600 ${isUser && 'text-right'}`}>
                        <TimeAgo date={new Date(message.created_at)} />
                    </p>
                </div>
            </div>
            <div style={{ marginBottom: 100 }} ref={messagesEndRef} />
        </div>
    )
}

export default MessageComponent