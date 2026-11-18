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

  // ---- Anime impact sounds (synthesized, no audio files) ----

  // 1s of white noise, generated once and reused by the effects below.
  _noise() {
    if (!this.noiseBuffer) {
      const len = this.ctx.sampleRate;
      const buf = this.ctx.createBuffer(1, len, this.ctx.sampleRate);
      const data = buf.getChannelData(0);
      for (let i = 0; i < len; i++) data[i] = Math.random() * 2 - 1;
      this.noiseBuffer = buf;
    }
    const src = this.ctx.createBufferSource();
    src.buffer = this.noiseBuffer;
    return src;
  }

  // Shared guard: respects mute, wakes the audio context, catches failures.
  _play(name, build) {
    if (this.isMuted) return;
    this.init();
    if (!this.ctx) return;
    try {
      build(this.ctx, this.ctx.currentTime);
    } catch (err) {
      console.warn(`AudioFX ${name} failed`, err);
    }
  }

  // POW: punchy cartoon impact. Pitch-dropping thump + a short noise crack.
  playPow() {
    this._play("pow", (ctx, t) => {
      const out = ctx.createGain();
      out.gain.value = 0.55;
      out.connect(ctx.destination);

      const thump = ctx.createOscillator();
      const thumpGain = ctx.createGain();
      thump.type = "sine";
      thump.frequency.setValueAtTime(160, t);
      thump.frequency.exponentialRampToValueAtTime(42, t + 0.22);
      thumpGain.gain.setValueAtTime(0.0001, t);
      thumpGain.gain.exponentialRampToValueAtTime(0.9, t + 0.006);
      thumpGain.gain.exponentialRampToValueAtTime(0.001, t + 0.3);
      thump.connect(thumpGain).connect(out);
      thump.start(t);
      thump.stop(t + 0.32);

      const crack = this._noise();
      const crackFilter = ctx.createBiquadFilter();
      const crackGain = ctx.createGain();
      crackFilter.type = "lowpass";
      crackFilter.frequency.setValueAtTime(2200, t);
      crackFilter.frequency.exponentialRampToValueAtTime(400, t + 0.08);
      crackGain.gain.setValueAtTime(0.5, t);
      crackGain.gain.exponentialRampToValueAtTime(0.001, t + 0.09);
      crack.connect(crackFilter).connect(crackGain).connect(out);
      crack.start(t);
      crack.stop(t + 0.1);
    });
  }

  // SHING: blade whoosh followed by a bright metallic ring.
  playShing() {
    this._play("shing", (ctx, t) => {
      const out = ctx.createGain();
      out.gain.value = 0.5;
      out.connect(ctx.destination);

      const whoosh = this._noise();
      const sweep = ctx.createBiquadFilter();
      const whooshGain = ctx.createGain();
      sweep.type = "highpass";
      sweep.frequency.setValueAtTime(700, t);
      sweep.frequency.exponentialRampToValueAtTime(6500, t + 0.12);
      whooshGain.gain.setValueAtTime(0.0001, t);
      whooshGain.gain.exponentialRampToValueAtTime(0.35, t + 0.05);
      whooshGain.gain.exponentialRampToValueAtTime(0.001, t + 0.17);
      whoosh.connect(sweep).connect(whooshGain).connect(out);
      whoosh.start(t);
      whoosh.stop(t + 0.18);

      // Slightly inharmonic partials = "metal", with a tiny upward bend.
      const ringStart = t + 0.06;
      [2093, 3170, 4720, 6310].forEach((freq, i) => {
        const osc = ctx.createOscillator();
        const g = ctx.createGain();
        osc.type = "sine";
        osc.frequency.setValueAtTime(freq * 0.97, ringStart);
        osc.frequency.exponentialRampToValueAtTime(freq, ringStart + 0.05);
        g.gain.setValueAtTime(0.0001, ringStart);
        g.gain.exponentialRampToValueAtTime(0.14 / (i + 1), ringStart + 0.008);
        g.gain.exponentialRampToValueAtTime(0.0005, ringStart + 0.75 - i * 0.1);
        osc.connect(g).connect(out);
        osc.start(ringStart);
        osc.stop(ringStart + 0.8);
      });
    });
  }

  // POOF: soft breathy burst whose filter closes down, plus a low "pff".
  playPoof() {
    this._play("poof", (ctx, t) => {
      const out = ctx.createGain();
      out.gain.value = 0.6;
      out.connect(ctx.destination);

      const air = this._noise();
      const lp = ctx.createBiquadFilter();
      const airGain = ctx.createGain();
      lp.type = "lowpass";
      lp.Q.value = 1.2;
      lp.frequency.setValueAtTime(2600, t);
      lp.frequency.exponentialRampToValueAtTime(220, t + 0.38);
      airGain.gain.setValueAtTime(0.0001, t);
      airGain.gain.exponentialRampToValueAtTime(0.45, t + 0.025);
      airGain.gain.exponentialRampToValueAtTime(0.001, t + 0.46);
      air.connect(lp).connect(airGain).connect(out);
      air.start(t);
      air.stop(t + 0.5);

      const pff = ctx.createOscillator();
      const pffGain = ctx.createGain();
      pff.type = "sine";
      pff.frequency.setValueAtTime(120, t);
      pff.frequency.exponentialRampToValueAtTime(70, t + 0.18);
      pffGain.gain.setValueAtTime(0.0001, t);
      pffGain.gain.exponentialRampToValueAtTime(0.18, t + 0.015);
      pffGain.gain.exponentialRampToValueAtTime(0.001, t + 0.22);
      pff.connect(pffGain).connect(out);
      pff.start(t);
      pff.stop(t + 0.24);
    });
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
