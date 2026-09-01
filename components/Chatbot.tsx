"use client";

import type { FormEvent } from "react";
import { useEffect, useRef, useState } from "react";
import {
  chatbotOptions,
  type ChatbotOption,
} from "../data/chatbotData";

type ChatMessage = {
  id: number;
  sender: "assistant" | "user";
  text: string;
  href?: string;
  linkLabel?: string;
};

const initialMessage: ChatMessage = {
  id: 1,
  sender: "assistant",
  text: "Hello! I'm the Services SETA digital assistant. How can I help you today?",
};

function ChatIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 12a8 8 0 0 1-8 8H7l-4 2 1.4-4.1A8 8 0 1 1 21 12Z" />
    </svg>
  );
}

function SendIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m22 2-7 20-4-9-9-4Z" />
      <path d="M22 2 11 13" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    >
      <path d="m6 6 12 12M18 6 6 18" />
    </svg>
  );
}

function findResponse(message: string) {
  const normalizedMessage = message.toLowerCase();

  return chatbotOptions.find((option) =>
    option.keywords.some((keyword) =>
      normalizedMessage.includes(keyword.toLowerCase()),
    ),
  );
}

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([
    initialMessage,
  ]);

  const nextId = useRef(2);
  const inputRef = useRef<HTMLInputElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
      }
    }

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  useEffect(() => {
    if (!open) {
      return;
    }

    inputRef.current?.focus();

    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
    });
  }, [open, messages]);

  function addConversationMessages(
    userText: string,
    selectedOption?: ChatbotOption,
  ) {
    const matchedOption =
      selectedOption ?? findResponse(userText);

    const assistantMessage: ChatMessage = matchedOption
      ? {
          id: nextId.current + 1,
          sender: "assistant",
          text: matchedOption.response,
          href: matchedOption.href,
          linkLabel: matchedOption.linkLabel,
        }
      : {
          id: nextId.current + 1,
          sender: "assistant",
          text: "I can't answer that directly yet. Select a common topic below or contact the Services SETA support team.",
          href: "/support",
          linkLabel: "Contact support",
        };

    setMessages((currentMessages) => [
      ...currentMessages,
      {
        id: nextId.current,
        sender: "user",
        text: userText,
      },
      assistantMessage,
    ]);

    nextId.current += 2;
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const message = input.trim();

    if (!message) {
      return;
    }

    addConversationMessages(message);
    setInput("");
  }

  function handleQuickOption(option: ChatbotOption) {
    addConversationMessages(option.label, option);
  }

  function resetConversation() {
    setMessages([initialMessage]);
    nextId.current = 2;
    setInput("");
    inputRef.current?.focus();
  }

  function closeChatbot() {
    setOpen(false);
  }

  return (
    <div className="chatbot">
      {open && (
        <section
          id="services-seta-chatbot"
          className="chatbot-panel"
          role="dialog"
          aria-modal="false"
          aria-labelledby="chatbot-title"
        >
          <header className="chatbot-header">
            <div className="chatbot-identity">
              <span
                className="chatbot-avatar"
                aria-hidden="true"
              >
                SS
              </span>

              <div className="chatbot-title-group">
                <h2 id="chatbot-title">
                  Services SETA Assistant
                </h2>

                <span className="chatbot-status">
                  <b aria-hidden="true" />
                  Online · Guided support
                </span>
              </div>
            </div>

            <button
              ref={closeButtonRef}
              type="button"
              className="chatbot-close"
              onClick={closeChatbot}
              aria-label="Close chatbot"
            >
              <CloseIcon />
            </button>
          </header>

          <div
            className="chatbot-messages"
            aria-live="polite"
            aria-label="Chat messages"
          >
            <div className="chatbot-welcome-label">
              <span>Services SETA support</span>
            </div>

            {messages.map((message) => (
              <article
                className={`chatbot-message chatbot-message--${message.sender}`}
                key={message.id}
              >
                {message.sender === "assistant" && (
                  <span
                    className="chatbot-message-avatar"
                    aria-hidden="true"
                  >
                    SS
                  </span>
                )}

                <div className="chatbot-bubble">
                  <p>{message.text}</p>

                  {message.href && message.linkLabel && (
                    <a href={message.href}>
                      {message.linkLabel}
                      <span aria-hidden="true"> →</span>
                    </a>
                  )}
                </div>
              </article>
            ))}

            <div ref={messagesEndRef} />
          </div>

          <div
            className="chatbot-prompts"
            aria-label="Common questions"
          >
            {chatbotOptions.slice(0, 4).map((option) => (
              <button
                type="button"
                onClick={() => handleQuickOption(option)}
                key={option.label}
              >
                {option.label}
              </button>
            ))}
          </div>

          <form
            className="chatbot-form"
            onSubmit={handleSubmit}
          >
            <label
              className="sr-only"
              htmlFor="chatbot-message"
            >
              Type your question
            </label>

            <input
              ref={inputRef}
              id="chatbot-message"
              value={input}
              onChange={(event) =>
                setInput(event.target.value)
              }
              placeholder="Ask about funding or programmes..."
              autoComplete="off"
              maxLength={300}
            />

            <button
              type="submit"
              disabled={!input.trim()}
              aria-label="Send message"
            >
              <SendIcon />
            </button>
          </form>

          <footer className="chatbot-footer">
            <span>
              Frontend guidance only. Confirm official requirements.
            </span>

            <button
              type="button"
              onClick={resetConversation}
            >
              Start again
            </button>
          </footer>
        </section>
      )}

      {!open && (
        <button
          type="button"
          className="chatbot-launcher"
          onClick={() => setOpen(true)}
          aria-expanded="false"
          aria-controls="services-seta-chatbot"
          aria-label="Open Services SETA assistant"
        >
          <span
            className="chatbot-launcher-icon"
            aria-hidden="true"
          >
            <ChatIcon />
          </span>

          <span>Chat with us</span>
        </button>
      )}
    </div>
  );
}