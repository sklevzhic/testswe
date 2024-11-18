import { FC } from 'react';
import classNames from 'classnames';

export interface MessageProps {
    sender: string;
    text: string;
    time: string;
    align?: 'left' | 'right';
    isUser?: boolean;
    className?: string;
}

export const Message: FC<MessageProps> = ({ text, time, align = 'left', isUser = false, className }) => (
    <div className={classNames(`grid ${align === 'right' ? 'text-right' : ''}`, className)}>
        <h5 className={`text-sm font-semibold leading-snug pb-1 ${isUser ? 'text-gray-900' : 'text-gray-900'}`}>{/*{sender}*/}</h5>
        <div className={`px-3.5 py-2 rounded ${isUser ? 'bg-primary text-primary-foreground' : 'bg-gray-100 text-gray-900'}`}>
            <h5 className="text-sm font-normal leading-snug">{text}</h5>
        </div>
        <div className="justify-end items-center inline-flex mb-2.5">
            <h6 className="text-xs font-normal leading-4 py-1 text-gray-500">{time}</h6>
        </div>
    </div>
);
