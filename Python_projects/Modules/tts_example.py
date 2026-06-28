import pyttsx3
import sys

def speak(text: str) -> None:
    engine = pyttsx3.init()
    engine.setProperty('rate', 150)
    engine.setProperty('volume', 1.0)
    voices = engine.getProperty('voices')
    if voices:
        engine.setProperty('voice', voices[0].id)
    engine.say(text)
    engine.runAndWait()


if __name__ == '__main__':
    text = ' '.join(sys.argv[1:]) if len(sys.argv) > 1 else "Hi, I'm your voice assistant. How can I help you?"
    speak(text)
    