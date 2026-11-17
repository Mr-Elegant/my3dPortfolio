// Web Audio API Synthesizer for Zero-Asset Sci-Fi Sound Effects
import { useSyncExternalStore } from "react";

class AudioFXEngine {
  constructor() {
    this.ctx = null;
    this.listeners = new Set();
    this.isMuted = typeof window !== "undefined"
      ? localStorage.getItem("preet_portfolio_sound_enabled") !== "true"
      : true;
  }

  init() {
    if (!this.ctx && typeof window !== "undefined") {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        this.ctx = new AudioContext();
      }
    }
    if (this.ctx && this.ctx.state === "suspended") {
      this.ctx.resume();
    }
  }

  getMuted = () => this.isMuted;

  // Lets every sound toggle on the page (navbar, telemetry bar) stay in sync.
  subscribe = (listener) => {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  };

  toggleMute() {
    this.isMuted = !this.isMuted;
    if (typeof window !== "undefined") {
      localStorage.setItem("preet_portfolio_sound_enabled", (!this.isMuted).toString());
    }
    this.listeners.forEach((l) => l());
    if (!this.isMuted) {
      this.init();
      this.playSuccess();
    }
    return this.isMuted;
  }

  // ---- Optional file-based click sample (used by Anime Mode) ----
  // While a sample is set and loaded, playClick() plays it instead of the
  // synthesized click. A missing/broken file silently falls back to synth.
  setClickSample(url) {
    if (typeof Audio === "undefined" || this.clickSample?.dataset?.src === url) return;
    const audio = new Audio(url);
    audio.preload = "auto";
    audio.dataset.src = url;
    this.clickSampleOk = false;
    audio.addEventListener("canplaythrough", () => (this.clickSampleOk = true), { once: true });
    audio.addEventListener("error", () => {
      this.clickSampleOk = false;
      console.warn(`AudioFX: click sample not found at ${url}; using synth click.`);
    });
    this.clickSample = audio;
  }

  clearClickSample() {
    this.clickSample = null;
    this.clickSampleOk = false;
  }

  playClickSample() {
    const now = performance.now();
    // Many components call playClick and the global layer may too; play once per click.
    if (now - (this.lastSampleAt || 0) < 120) return;
    this.lastSampleAt = now;
    const voice = this.clickSample.cloneNode(); // clone → overlapping rapid clicks
    voice.volume = 0.55;
    voice.preservesPitch = false;
    voice.playbackRate = 0.95 + Math.random() * 0.1; // tiny pitch variation
    voice.play().catch(() => {});
  }

  // Micro mechanical keystroke click
  playClick() {
    if (this.isMuted) return;
    if (this.clickSample && this.clickSampleOk) {
      this.playClickSample();
      return;
    }
    this.init();
    if (!this.ctx) return;

    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = "sine";
      osc.frequency.setValueAtTime(850, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(200, this.ctx.currentTime + 0.04);

      gain.gain.setValueAtTime(0.12, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.04);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + 0.04);
    } catch (err) {
      console.warn("AudioFX click failed", err);
    }
  }

  // Tactical double-chirp beep
  playBeep() {
    if (this.isMuted) return;
    this.init();
    if (!this.ctx) return;

    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = "triangle";
      osc.frequency.setValueAtTime(1200, this.ctx.currentTime);
      osc.frequency.setValueAtTime(1600, this.ctx.currentTime + 0.04);

      gain.gain.setValueAtTime(0.08, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.08);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + 0.08);
    } catch (err) {
      console.warn("AudioFX beep failed", err);
    }
  }

  // Success 3-tone arpeggio
  playSuccess() {
    if (this.isMuted) return;
    this.init();
    if (!this.ctx) return;

    try {
      const notes = [523.25, 659.25, 783.99]; // C5, E5, G5
      notes.forEach((freq, idx) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        const startTime = this.ctx.currentTime + idx * 0.06;
        osc.type = "sine";
        osc.frequency.setValueAtTime(freq, startTime);

        gain.gain.setValueAtTime(0.1, startTime);
        gain.gain.exponentialRampToValueAtTime(0.001, startTime + 0.12);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(startTime);
        osc.stop(startTime + 0.12);
      });
    } catch (err) {
      console.warn("AudioFX success failed", err);
    }
  }

  // Warp frequency sweep on navigation
  playWarp() {
    if (this.isMuted) return;
    this.init();
    if (!this.ctx) return;

    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = "sine";
      osc.frequency.setValueAtTime(300, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(1400, this.ctx.currentTime + 0.18);

      gain.gain.setValueAtTime(0.08, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.18);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + 0.18);
    } catch (err) {
      console.warn("AudioFX warp failed", err);
    }
  }
}

export const audioFX = new AudioFXEngine();

/** React hook: current muted state, re-renders when any toggle changes it. */
export const useSoundMuted = () =>
  useSyncExternalStore(audioFX.subscribe, audioFX.getMuted, () => true);
