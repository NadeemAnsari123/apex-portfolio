"use client";

import { useState, useEffect, useRef } from "react";

type SpeechResult = {
  results: ArrayLike<ArrayLike<{ transcript: string }>>;
};

type SpeechRecognizer = {
  lang: string;
  continuous: boolean;
  interimResults: boolean;
  onresult: ((event: SpeechResult) => void) | null;
  onerror: (() => void) | null;
  onend: (() => void) | null;
  start: () => void;
  stop: () => void;
};

type SpeechWindow = Window & {
  SpeechRecognition?: new () => SpeechRecognizer;
  webkitSpeechRecognition?: new () => SpeechRecognizer;
};

export function useJarvisVoice(
  onTranscript: (text: string) => void
) {
  const [listening, setListening] = useState(false);
  const [supported, setSupported] = useState(false);
  const [voiceEnabled, setVoiceEnabled] = useState(false);

  const recognitionRef = useRef<SpeechRecognizer | null>(null);
  const callbackRef = useRef(onTranscript);

  useEffect(() => {
    callbackRef.current = onTranscript;
  }, [onTranscript]);

  useEffect(() => {
    const speechWindow = window as SpeechWindow;

    const Recognition =
      speechWindow.SpeechRecognition ||
      speechWindow.webkitSpeechRecognition;

    setSupported(Boolean(Recognition));

    return () => {
      recognitionRef.current?.stop();
      window.speechSynthesis?.cancel();
    };
  }, []);

  function startListening() {
    const speechWindow = window as SpeechWindow;

    const Recognition =
      speechWindow.SpeechRecognition ||
      speechWindow.webkitSpeechRecognition;

    if (!Recognition) return;

    window.speechSynthesis?.cancel();

    const recognition = new Recognition();

    recognition.lang = "en-US";
    recognition.continuous = false;
    recognition.interimResults = false;

    recognition.onresult = (event) => {
      const transcript = event.results[0]?.[0]?.transcript;

      if (transcript) {
        callbackRef.current(transcript);
      }
    };

    recognition.onerror = () => {
      setListening(false);
    };

    recognition.onend = () => {
      setListening(false);
      recognitionRef.current = null;
    };

    recognitionRef.current = recognition;

    try {
      recognition.start();
      setListening(true);
    } catch {
      setListening(false);
    }
  }

  function stopListening() {
    recognitionRef.current?.stop();
    setListening(false);
  }

  function speak(text: string) {
    if (!voiceEnabled || !("speechSynthesis" in window)) return;

    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "en-US";
    utterance.rate = 0.95;
    utterance.pitch = 1;

    window.speechSynthesis.speak(utterance);
  }

  function stopSpeaking() {
    window.speechSynthesis?.cancel();
  }

  return {
    listening,
    supported,
    voiceEnabled,
    setVoiceEnabled,
    startListening,
    stopListening,
    speak,
    stopSpeaking,
  };
}
