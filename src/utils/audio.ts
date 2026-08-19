/**
 * Audio synthesis helper using Web Audio API
 * Generates sweet, melodic chimes, harp arpeggios, and birthday celebration tunes
 * without needing external audio files.
 */

let audioCtx: AudioContext | null = null;

function getAudioContext(): AudioContext | null {
  if (typeof window === 'undefined') return null;
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
    if (AudioContextClass) {
      audioCtx = new AudioContextClass();
    }
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
}

/**
 * Plays a magical sparkle chime tone
 */
export function playSparkleTone() {
  const ctx = getAudioContext();
  if (!ctx) return;

  const notes = [523.25, 659.25, 783.99, 1046.50, 1318.51]; // C5, E5, G5, C6, E6
  const now = ctx.currentTime;

  notes.forEach((freq, idx) => {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, now + idx * 0.07);

    gain.gain.setValueAtTime(0, now + idx * 0.07);
    gain.gain.linearRampToValueAtTime(0.12, now + idx * 0.07 + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.07 + 0.6);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(now + idx * 0.07);
    osc.stop(now + idx * 0.07 + 0.7);
  });
}

/**
 * Plays a soft, celebratory harp chord arpeggio
 */
export function playCelebrationArpeggio() {
  const ctx = getAudioContext();
  if (!ctx) return;

  const chord = [392.00, 493.88, 587.33, 783.99, 987.77, 1174.66]; // G4, B4, D5, G5, B5, D6
  const now = ctx.currentTime;

  chord.forEach((freq, index) => {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(freq, now + index * 0.06);

    gain.gain.setValueAtTime(0, now + index * 0.06);
    gain.gain.linearRampToValueAtTime(0.15, now + index * 0.06 + 0.03);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + index * 0.06 + 1.2);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(now + index * 0.06);
    osc.stop(now + index * 0.06 + 1.3);
  });
}

/**
 * Plays candle extinguishing whoosh & soft magic chime
 */
export function playBlowCandleSound() {
  const ctx = getAudioContext();
  if (!ctx) return;

  const now = ctx.currentTime;

  // Soft gentle breeze noise simulation
  const bufferSize = ctx.sampleRate * 0.4;
  const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
  const data = buffer.getChannelData(0);
  for (let i = 0; i < bufferSize; i++) {
    data[i] = Math.random() * 2 - 1;
  }

  const noise = ctx.createBufferSource();
  noise.buffer = buffer;

  const filter = ctx.createBiquadFilter();
  filter.type = 'bandpass';
  filter.frequency.setValueAtTime(800, now);
  filter.frequency.exponentialRampToValueAtTime(200, now + 0.35);

  const noiseGain = ctx.createGain();
  noiseGain.gain.setValueAtTime(0.12, now);
  noiseGain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);

  noise.connect(filter);
  filter.connect(noiseGain);
  noiseGain.connect(ctx.destination);

  noise.start(now);

  // Followed by sweet chime
  setTimeout(() => {
    playCelebrationArpeggio();
  }, 250);
}

/**
 * Plays the "Happy Birthday" melodic phrase
 */
let bgInterval: any = null;
let isPlayingMelody = false;

export function playHappyBirthdayTune(onEnd?: () => void) {
  const ctx = getAudioContext();
  if (!ctx) return;

  // Notes in Hz: [freq, duration in seconds]
  // Happy Birthday to you, Happy Birthday to you...
  const tune: [number, number][] = [
    [261.63, 0.3], // C4
    [261.63, 0.3], // C4
    [293.66, 0.6], // D4
    [261.63, 0.6], // C4
    [349.23, 0.6], // F4
    [329.63, 1.0], // E4

    [261.63, 0.3], // C4
    [261.63, 0.3], // C4
    [293.66, 0.6], // D4
    [261.63, 0.6], // C4
    [392.00, 0.6], // G4
    [349.23, 1.0], // F4

    [261.63, 0.3], // C4
    [261.63, 0.3], // C4
    [523.25, 0.6], // C5
    [440.00, 0.6], // A4
    [349.23, 0.6], // F4
    [329.63, 0.6], // E4
    [293.66, 0.8], // D4

    [466.16, 0.3], // Bb4
    [466.16, 0.3], // Bb4
    [440.00, 0.6], // A4
    [349.23, 0.6], // F4
    [392.00, 0.6], // G4
    [349.23, 1.4], // F4
  ];

  let timeOffset = 0;
  const startTime = ctx.currentTime + 0.05;

  tune.forEach(([freq, dur]) => {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, startTime + timeOffset);

    // Warm bell envelope
    gain.gain.setValueAtTime(0, startTime + timeOffset);
    gain.gain.linearRampToValueAtTime(0.14, startTime + timeOffset + 0.03);
    gain.gain.exponentialRampToValueAtTime(0.001, startTime + timeOffset + dur);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(startTime + timeOffset);
    osc.stop(startTime + timeOffset + dur);

    timeOffset += dur * 0.95;
  });

  if (onEnd) {
    setTimeout(onEnd, timeOffset * 1000);
  }
}
