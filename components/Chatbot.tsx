"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import {
  chatbotOptions,
  type ChatbotOption,
} from "../data/chatbotData";

type ChatMessage = {
  id: number;
  sender: "bot" | "user";
  text: string;
  href?: string;
  linkLabel?: string;
};

const initialMessage: ChatMessage = {
  id: 1,
  sender: "bot",
  text: "Hello. I’m the Services SETA digital assistant. What would you like help with?",
};

function findResponse(message: string): ChatbotOption | undefined {
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
    if (open) {
      inputRef.current?.focus();
      messagesEndRef.current?.scrollIntoView({
        behavior: "smooth",
      });
    }
  }, [open, messages]);

  function addUserAndBotMessages(
    userText: string,
    selectedOption?: ChatbotOption,
  ) {
    const matchedOption =
      selectedOption ?? findResponse(userText);

    const botMessage: ChatMessage = matchedOption
      ? {
        id: nextId.current + 1,
        sender: "bot",
        text: matchedOption.response,
        href: matchedOption.href,
        linkLabel: matchedOption.linkLabel,
      }
      : {
        id: nextId.current + 1,
        sender: "bot",
        text:
          "I’m not yet able to answer that question directly. Choose one of the common topics below or visit customer support.",
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
      botMessage,
    ]);

    nextId.current += 2;
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const trimmedInput = input.trim();

    if (!trimmedInput) return;

    addUserAndBotMessages(trimmedInput);
    setInput("");
  }

  function handleQuickOption(option: ChatbotOption) {
    addUserAndBotMessages(option.label, option);
  }

  function resetConversation() {
    setMessages([initialMessage]);
    nextId.current = 2;
    setInput("");
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
              <span className="chatbot-avatar" aria-hidden="true">
                S
              </span>

              <div>
                <h2 id="chatbot-title">Services SETA Assistant</h2>
                <span className="chatbot-status">
                  <b aria-hidden="true" />
                  Guided support
                </span>
              </div>
            </div>

            <button
              type="button"
              className="chatbot-close"
              onClick={() => setOpen(false)}
              aria-label="Close chatbot"
            >
              ×
            </button>
          </header>

          <div
            className="chatbot-messages"
            aria-live="polite"
            aria-label="Chat messages"
          >
            {messages.map((message) => (
              <div
                className={`chat-message ${message.sender}`}
                key={message.id}
              >
                <p>{message.text}</p>

                {message.href && message.linkLabel && (
                  <a href={message.href}>
                    {message.linkLabel} →
                  </a>
                )}
              </div>
            ))}

            <div ref={messagesEndRef} />
          </div>

          <div className="chatbot-options">
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

          <form className="chatbot-form" onSubmit={handleSubmit}>
            <label className="sr-only" htmlFor="chatbot-message">
              Type your question
            </label>

            <input
              ref={inputRef}
              id="chatbot-message"
              value={input}
              onChange={(event) => setInput(event.target.value)}
              placeholder="Ask about funding or programmes…"
              autoComplete="off"
            />

            <button
              type="submit"
              disabled={!input.trim()}
              aria-label="Send message"
            >
              →
            </button>
          </form>

          <footer className="chatbot-footer">
            <span>Frontend guidance only</span>

            <button type="button" onClick={resetConversation}>
              Start again
            </button>
          </footer>
        </section>
      )}

      <button
        type="button"
        className="chatbot-launcher"
        onClick={() => setOpen((currentOpen) => !currentOpen)}
        aria-expanded={open}
        aria-controls="services-seta-chatbot"
        aria-label={
          open
            ? "Close Services SETA assistant"
            : "Open Services SETA assistant"
        }
      >
        <span className="chatbot-launcher-icon" aria-hidden="true">
          {open ? "×" : "?"}
        </span>

        {!open && <span>Need help?</span>}
      </button>
    </div>
  );
}