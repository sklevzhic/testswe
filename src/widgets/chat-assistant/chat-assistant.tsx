'use client';

import React, { useState } from 'react';
import { Button } from '@/shared/ui';
import Icon from '@/shared/ui/icon';
import classNames from 'classnames';
import { useOutsideClick } from '@/shared/hooks/use-on-outside-ckick';
import { createPortal } from 'react-dom';

interface AvatarProps {
    src: string;
    alt: string;
}

const Avatar: React.FC<AvatarProps> = ({ src, alt }) => <img src={src} alt={alt} className="w-10 h-11 object-cover" />;

interface MessageProps {
    sender: string;
    text: string;
    time: string;
    align?: 'left' | 'right';
    isUser?: boolean;
    className?: string;
}

const Message: React.FC<MessageProps> = ({ text, time, align = 'left', isUser = false, className }) => (
    <div className={classNames(`grid ${align === 'right' ? 'text-right' : ''}`, className)}>
        <h5 className={`text-sm font-semibold leading-snug pb-1 ${isUser ? 'text-gray-900' : 'text-gray-900'}`}>{/*{sender}*/}</h5>
        <div className={`px-3.5 py-2 rounded ${isUser ? 'bg-orange-500 text-white' : 'bg-gray-100 text-gray-900'}`}>
            <h5 className="text-sm font-normal leading-snug">{text}</h5>
        </div>
        <div className="justify-end items-center inline-flex mb-2.5">
            <h6 className="text-xs font-normal leading-4 py-1 text-gray-500">{time}</h6>
        </div>
    </div>
);

const ChatInput: React.FC = () => (
    <div className="w-full pl-3 pr-1 py-1 rounded-3xl border border-gray-200 items-center gap-2 inline-flex justify-between">
        <div className="flex items-center gap-2">
            <input className="grow shrink basis-0 text-black text-sm font-medium leading-4 focus:outline-none" placeholder="Type here..." />
        </div>
        <div className="flex items-center gap-2">
            <Button variant={'primary'} className={'!p-4 !rounded-full'}>
                Send
            </Button>
        </div>
    </div>
);

interface ChatBubbleProps {
    avatar: { src: string; alt: string };
    messages: Array<Omit<MessageProps, 'align'>>;
    align: 'left' | 'right';
}

const ChatBubble: React.FC<ChatBubbleProps> = ({ avatar, messages, align }) => (
    <div className={`flex gap-2.5 ${align === 'right' ? 'justify-end' : ''}`}>
        {align === 'left' && <Avatar src={avatar.src} alt={avatar.alt} />}
        <div>
            {messages.map((msg, idx) => (
                <Message key={idx} {...msg} align={align} />
            ))}
        </div>
        {align === 'right' && <Avatar src={avatar.src} alt={avatar.alt} />}
    </div>
);

interface ChatProps {
    chats: Array<{
        avatar: { src: string; alt: string };
        messages: Array<Omit<MessageProps, 'align'>>;
        align: 'left' | 'right';
    }>;
    onClose?: () => void;
}

const Chat: React.FC<ChatProps> = ({ chats, onClose }) => {
    const chatRef = useOutsideClick<HTMLDivElement>(() => {
        onClose?.();
    });
    return (
        <div ref={chatRef} className="w-full h-[98vh] md:w-[400px] md:h-[500px] bg-white shadow rounded-xl overflow-hidden flex flex-col">
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

const chats: Array<{
    avatar: { src: string; alt: string };
    messages: Array<Omit<MessageProps, 'align'>>;
    align: 'left' | 'right';
}> = [
    {
        avatar: { src: 'https://pagedone.io/asset/uploads/1710412177.png', alt: 'Shanay image' },
        messages: [
            {
                sender: 'Shanay Cruz',
                text: 'Guts, I need a review of work. Are you readyGuts, I need a review of work. Are you readyGuts, I need a review of work. Are you readyGuts, I need a review of work. Are you readyGuts, I need a review of work. Are you ready?',
                time: '05:14 PM',
            },
            { sender: 'Shanay Cruz', text: 'Let me know', time: '05:14 PM' },
        ],
        align: 'left',
    },
    {
        avatar: { src: 'https://pagedone.io/asset/uploads/1704091591.png', alt: 'Hailey image' },
        messages: [
            { sender: 'You', text: 'Yes, let’s see, send your work here', time: '05:14 PM', isUser: true },
            { sender: 'You', text: 'Anyone on for lunch today', time: '05:14 PM', isUser: true },
        ],
        align: 'right',
    },
    {
        avatar: { src: 'https://pagedone.io/asset/uploads/1704091591.png', alt: 'Hailey image' },
        messages: [
            { sender: 'You', text: 'Yes, let’s see, send your work here', time: '05:14 PM', isUser: true },
            { sender: 'You', text: 'Anyone on for lunch today', time: '05:14 PM', isUser: true },
        ],
        align: 'right',
    },
];

export const ChatAssistant = () => {
    const [isOpen, setIsOpen] = useState(false);
    return createPortal(
        <div className={'fixed bottom-2 right-2 max-w-[calc(100%-1rem)] z-40'}>
            {isOpen ? (
                <Chat
                    chats={chats}
                    onClose={() => {
                        setIsOpen(false);
                    }}
                />
            ) : (
                <div className="relative">
                    <Button variant={'primary'} className={'w-14 h-14 !rounded-full'} onClick={() => setIsOpen(true)}>
                        <Icon name={'Send'} color={'white'}></Icon>
                    </Button>
                </div>
            )}
        </div>,
        document.body,
    );
};
