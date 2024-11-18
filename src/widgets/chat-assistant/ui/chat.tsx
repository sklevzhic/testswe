import { MessageProps } from '@/widgets/chat-assistant/ui/message';
import { FC } from 'react';
import { useOutsideClick } from '@/shared/hooks/use-on-outside-ckick';
import { Button } from '@/shared/ui';
import Icon from '@/shared/ui/icon';
import { ChatBubble } from '@/widgets/chat-assistant/ui/сhat-bubble';
import { ChatInput } from '@/widgets/chat-assistant/ui/chat-input';

export interface ChatProps {
    chats: Array<{
        avatar: { src: string; alt: string };
        messages: Array<Omit<MessageProps, 'align'>>;
        align: 'left' | 'right';
    }>;
    onClose?: () => void;
}

export const Chat: FC<ChatProps> = ({ chats, onClose }) => {
    const chatRef = useOutsideClick<HTMLDivElement>(() => {
        onClose?.();
    });
    return (
        <div ref={chatRef} className="w-full h-[98vh] sm:w-[350px] sm:h-[500px] bg-white shadow rounded-xl overflow-hidden flex flex-col">
            <div className={'bg-gray-300 flex justify-between items-center'}>
                <div className={'flex items-center p-2'}>
                    <img width={35} height={35} src="/images/logo-assistant.png" alt="" />
                    <span className={'text-black'}>Assistant</span>
                </div>
                <div className={'p-2'}>
                    <Button variant={'ghost'} onClick={onClose} className={'border border-orange-500 !rounded-full w-8 h-8 !p-1'}>
                        <Icon name={'X'} className={'text-orange-400'} color={'orange'}></Icon>
                    </Button>
                </div>
            </div>
            <div className="grid flex-1 overflow-auto pb-11 p-2 scrollbar scrollbar-thumb-sky-700 scrollbar-track-sky-300">
                {chats.map((chat, idx) => (
                    <ChatBubble key={idx} {...chat} />
                ))}
            </div>
            <div className={'p-2'}>
                <ChatInput />
            </div>
        </div>
    );
};
