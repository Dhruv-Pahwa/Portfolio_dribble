import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Mail, Linkedin, Github, Twitter, Calendar, Check, Send, Sparkles, Clock, AlertCircle } from "lucide-react";

export default function ContactView() {
  const [formName, setFormName] = useState("");
  const [formEmail, setFormEmail] = useState("");
  const [formSubject, setFormSubject] = useState("");
  const [formMessage, setFormMessage] = useState("");

  const [formLoading, setFormLoading] = useState(false);
  const [formSuccess, setFormSuccess] = useState(false);
  const [formError, setFormError] = useState("");

  // Virtual cal.com schedule switcher state
  const [selectedDay, setSelectedDay] = useState<number | null>(22); // Default to June 22
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string | null>(null);
  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  const [bookerName, setBookerName] = useState("");
  const [bookerEmail, setBookerEmail] = useState("");

  const availableDaysInJune = [19, 22, 23, 24, 25, 26, 29, 30];
  const timeSlots = ["09:00 AM EST", "10:30 AM EST", "01:30 PM EST", "03:00 PM EST", "04:30 PM EST"];

  const handleSendMessage = async (e: FormEvent) => {
    e.preventDefault();
    if (!formName || !formEmail || !formMessage) {
      setFormError("Please fill out your Name, Email and Message block.");
      return;
    }

    setFormLoading(true);
    setFormError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formName,
          email: formEmail,
          subject: formSubject,
          message: formMessage,
        }),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || "Synaptic gateway timeout");
      }

      setFormSuccess(true);
      // Reset
      setFormName("");
      setFormEmail("");
      setFormSubject("");
      setFormMessage("");
    } catch (err: any) {
      setFormError(err.message || "An unexpected error occurred transmitting the message.");
    } finally {
      setFormLoading(false);
    }
  };

  const handleBookingSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!bookerName || !bookerEmail || !selectedDay || !selectedTimeSlot) return;
    setBookingConfirmed(true);
  };

  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-32">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="space-y-16"
      >
        {/* Header Title */}
        <div className="space-y-3">
          <span className="font-mono text-[11px] font-bold uppercase tracking-widest text-accent">
            Secure Handshake
          </span>
          <h2 className="font-display text-4xl font-extrabold tracking-tight text-neutral-900 dark:text-neutral-50">
            Let&apos;s Build Something Meaningful Together.
          </h2>
          <p className="font-sans text-xs text-[#666666] dark:text-[#999999] max-w-xl leading-relaxed">
            Have a system-level challenge, fine-tuning task, or detailed micro-product architecture? Secure a direct slot on my console calendar or deploy an instantaneous message below.
          </p>
        </div>

        {/* Column layout: Left Form, Right Scheduler */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Message Form (Col-span 7) */}
          <div className="lg:col-span-7 glass-card rounded-[28px] p-8 space-y-6">
            <h3 className="font-display text-lg font-bold text-neutral-900 dark:text-neutral-50 border-b border-neutral-100 dark:border-neutral-850 pb-3">
              Encrypted Telegram Dispatch
            </h3>

            <AnimatePresence mode="wait">
              {formSuccess ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 text-center space-y-4"
                >
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-success/10 text-emerald-success">
                    <Check className="h-7 w-7" />
                  </div>
                  <h4 className="font-display text-lg font-bold text-neutral-900 dark:text-neutral-50">
                    Transmission Dispatched Successfully
                  </h4>
                  <p className="font-sans text-xs text-[#666666] dark:text-[#999999] max-w-sm mx-auto leading-relaxed">
                    Your packets have cleared proxy channels and integrated into my active inbox queue. I usually reply within 9 minutes.
                  </p>
                  <button
                    onClick={() => setFormSuccess(false)}
                    className="font-mono text-[11px] text-accent font-semibold hover:underline mt-2"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <motion.form onSubmit={handleSendMessage} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5 text-left">
                      <label className="font-mono text-[10px] uppercase tracking-wider text-neutral-500">
                        Identity Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formName}
                        onChange={(e) => setFormName(e.target.value)}
                        placeholder="Elon"
                        className="w-full rounded-xl border border-neutral-200 bg-white px-3 py-2 text-xs font-semibold text-neutral-800 placeholder-neutral-400 focus:border-accent focus:outline-none dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-100"
                      />
                    </div>

                    <div className="space-y-1.5 text-left">
                      <label className="font-mono text-[10px] uppercase tracking-wider text-neutral-500">
                        Email Coordinates *
                      </label>
                      <input
                        type="email"
                        required
                        value={formEmail}
                        onChange={(e) => setFormEmail(e.target.value)}
                        placeholder="elon@spacex.com"
                        className="w-full rounded-xl border border-neutral-200 bg-white px-3 py-2 text-xs font-semibold text-neutral-800 placeholder-neutral-400 focus:border-accent focus:outline-none dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-100"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5 text-left">
                    <label className="font-mono text-[10px] uppercase tracking-wider text-neutral-500">
                      Subject Line
                    </label>
                    <input
                      type="text"
                      value={formSubject}
                      onChange={(e) => setFormSubject(e.target.value)}
                      placeholder="Next-Gen Architecture collaboration"
                      className="w-full rounded-xl border border-neutral-200 bg-white px-3 py-2 text-xs font-semibold text-neutral-800 placeholder-neutral-400 focus:border-accent focus:outline-none dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-100"
                    />
                  </div>

                  <div className="space-y-1.5 text-left">
                    <label className="font-mono text-[10px] uppercase tracking-wider text-neutral-500">
                      Prose Message *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formMessage}
                      onChange={(e) => setFormMessage(e.target.value)}
                      placeholder="My system synchronize protocol is stalling at heavy cluster scales..."
                      className="w-full rounded-xl border border-neutral-200 bg-white px-3 py-2 text-xs font-semibold text-neutral-800 placeholder-neutral-400 focus:border-accent focus:outline-none dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-100 resize-none"
                    />
                  </div>

                  {formError && (
                    <div className="rounded-xl bg-red-500/10 border border-red-500/20 p-3.5 flex gap-2.5 text-xs text-red-500 shrink-0">
                      <AlertCircle className="h-4.5 w-4.5 shrink-0" />
                      <span>{formError}</span>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={formLoading}
                    className="flex justify-center items-center gap-1.5 w-full bg-black hover:bg-neutral-800 text-white dark:bg-white dark:text-black dark:hover:bg-neutral-100 text-xs py-3 rounded-full font-bold transition-all hover:shadow-md disabled:opacity-50"
                  >
                    <Send className="h-4 w-4" />
                    <span>{formLoading ? "Dispersing packet coordinates..." : "Send Telegram"}</span>
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>

          {/* Cal.com Scheduler Widget (Col-span 5) */}
          <div className="lg:col-span-5 glass p-6 rounded-[28px] border border-neutral-200/60 dark:border-neutral-800/80 space-y-6">
            <div className="flex items-center justify-between border-b border-neutral-100 dark:border-neutral-850 pb-3">
              <span className="font-mono text-[9.5px] uppercase tracking-widest text-[#999999] dark:text-[#666666] flex items-center gap-1">
                <Calendar className="h-3.5 w-3.5 text-accent" />
                Console Scheduler
              </span>
              <span className="font-mono text-[9.5px] text-accent font-bold">1:1 Virtual Room</span>
            </div>

            <AnimatePresence mode="wait">
              {bookingConfirmed ? (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="py-8 text-center space-y-3"
                >
                  <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-accent/10 text-accent">
                    <Sparkles className="h-5 w-5" />
                  </div>
                  <h4 className="font-display text-sm font-bold text-neutral-900 dark:text-neutral-100">
                    Meeting Synced!
                  </h4>
                  <div className="bg-neutral-50 dark:bg-neutral-900/60 p-3.5 rounded-xl border border-neutral-100 dark:border-neutral-850 font-mono text-[10px] space-y-1.5 text-left">
                    <p>&bull; <strong>Coordinate:</strong> June {selectedDay}, 2026</p>
                    <p>&bull; <strong>Interval:</strong> {selectedTimeSlot}</p>
                    <p>&bull; <strong>Location:</strong> meet.google.com/dhruv-double</p>
                    <p>&bull; <strong>Recipient:</strong> {bookerEmail}</p>
                  </div>
                  <button
                    onClick={() => {
                      setBookingConfirmed(false);
                      setSelectedTimeSlot(null);
                      setBookerName("");
                      setBookerEmail("");
                    }}
                    className="mt-2 text-xs text-accent font-bold hover:underline"
                  >
                    Change appointment slot
                  </button>
                </motion.div>
              ) : (
                <div className="space-y-4">
                  {/* Step A: Choose Day */}
                  <div className="space-y-2 text-left">
                    <span className="font-mono text-[8.5px] uppercase text-[#999999] tracking-wider block">1. Select June Date Coordinates</span>
                    <div className="grid grid-cols-4 gap-1.5">
                      {availableDaysInJune.map((day) => (
                        <button
                          key={day}
                          onClick={() => {
                            setSelectedDay(day);
                            setSelectedTimeSlot(null);
                          }}
                          className={`py-2 rounded-lg font-mono text-xs font-semibold border transition-all ${
                            selectedDay === day
                              ? "bg-accent border-accent text-white"
                              : "bg-white hover:bg-neutral-50 dark:bg-neutral-900 dark:hover:bg-neutral-800 text-neutral-700 dark:text-neutral-300 border-neutral-150 dark:border-neutral-850"
                          }`}
                        >
                          June {day}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Step B: Choose Interval */}
                  {selectedDay && (
                    <div className="space-y-2 text-left">
                      <span className="font-mono text-[8.5px] uppercase text-[#999999] tracking-wider block">2. Select Available Slot</span>
                      <div className="space-y-1.5 max-h-[120px] overflow-y-auto pr-1">
                        {timeSlots.map((slot) => (
                          <button
                            key={slot}
                            onClick={() => setSelectedTimeSlot(slot)}
                            className={`flex items-center justify-between w-full px-3 py-2 rounded-xl text-xs font-semibold border transition-all ${
                              selectedTimeSlot === slot
                                ? "bg-black text-white border-black dark:bg-white dark:text-black dark:border-white"
                                : "hover:bg-black/5 dark:hover:bg-white/5 border-neutral-150 dark:border-neutral-850 text-neutral-800 dark:text-neutral-300"
                            }`}
                          >
                            <span className="flex items-center gap-1.5">
                              <Clock className="h-3.5 w-3.5 text-accent" />
                              {slot}
                            </span>
                            <span>30-min Duration</span>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Step C: Locker Coordinates */}
                  {selectedTimeSlot && (
                    <motion.form
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      onSubmit={handleBookingSubmit}
                      className="space-y-3 pt-3 border-t border-neutral-100 dark:border-neutral-800 overflow-hidden"
                    >
                      <span className="font-mono text-[8.5px] uppercase text-[#999999] tracking-wider block">3. Personal Lock coordinates</span>

                      <div className="grid grid-cols-2 gap-2 text-left">
                        <input
                          type="text"
                          required
                          placeholder="Your Name"
                          value={bookerName}
                          onChange={(e) => setBookerName(e.target.value)}
                          className="rounded-xl border border-neutral-200 bg-white px-2.5 py-2 text-[10px] font-semibold text-neutral-800 placeholder-neutral-400 focus:outline-none dark:border-neutral-850 dark:bg-neutral-900 dark:text-neutral-100"
                        />
                        <input
                          type="email"
                          required
                          placeholder="Your Email"
                          value={bookerEmail}
                          onChange={(e) => setBookerEmail(e.target.value)}
                          className="rounded-xl border border-neutral-200 bg-white px-2.5 py-2 text-[10px] font-semibold text-neutral-800 placeholder-neutral-400 focus:outline-none dark:border-neutral-850 dark:bg-neutral-900 dark:text-neutral-100"
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full bg-accent text-white font-mono text-[10.5px] uppercase font-bold py-2.5 rounded-full transition-opacity hover:opacity-95"
                      >
                        Confirm Slot Reservation
                      </button>
                    </motion.form>
                  )}
                </div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* External Social connections block */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-neutral-100 dark:border-neutral-800 pt-8 mt-12 bg-neutral-50/50 p-6 rounded-[24px] dark:bg-neutral-950/20">
          <div className="text-left">
            <h4 className="font-sans text-xs font-bold text-neutral-900 dark:text-neutral-50">
              Direct Synaptic Interfaces
            </h4>
            <p className="font-sans text-[11px] text-neutral-500 mt-0.5">
              Access my cryptographic addresses across alternative communication pipelines.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="mailto:dhruvpahwa02@gmail.com"
              className="flex items-center gap-1 rounded-full border border-neutral-200 bg-white hover:bg-neutral-50 hover:border-neutral-300 dark:border-neutral-800 dark:bg-neutral-900 p-2.5 px-4 font-mono text-[10.5px] text-[#666666] dark:text-[#999999] transition-all dark:hover:bg-neutral-800"
            >
              <Mail className="h-4 w-4 text-accent" />
              dhruvpahwa02@gmail.com
            </a>
            <a
              href="#"
              onClick={(e) => e.preventDefault()}
              className="flex items-center gap-1 rounded-full border border-neutral-200 bg-white hover:bg-neutral-50 hover:border-neutral-300 dark:border-neutral-800 dark:bg-neutral-900 p-2.5 px-4 font-mono text-[10.5px] text-[#666666] dark:text-[#999999] transition-all dark:hover:bg-neutral-800"
            >
              <Linkedin className="h-4 w-4 text-accent" />
              LinkedIn
            </a>
            <a
              href="#"
              onClick={(e) => e.preventDefault()}
              className="flex items-center gap-1 rounded-full border border-neutral-200 bg-white hover:bg-neutral-50 hover:border-neutral-300 dark:border-neutral-800 dark:bg-neutral-900 p-2.5 px-4 font-mono text-[10.5px] text-[#666666] dark:text-[#999999] transition-all dark:hover:bg-neutral-800"
            >
              <Github className="h-4 w-4 text-accent" />
              GitHub
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
