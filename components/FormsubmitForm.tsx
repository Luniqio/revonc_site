"use client";

import { FormEvent, ReactNode, useState } from "react";

const FORMSUBMIT_ENDPOINT = "https://formsubmit.co/yorin@revonc.be";

type Status = "idle" | "sending" | "success" | "error";

type Props = {
  subject: string;
  formulier: string;
  autoresponse?: string;
  submitLabel: string;
  className?: string;
  submitClassName?: string;
  children: ReactNode;
};

export function FormsubmitForm({
  subject,
  formulier,
  autoresponse,
  submitLabel,
  className,
  submitClassName,
  children,
}: Props) {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus("sending");
    try {
      const res = await fetch(FORMSUBMIT_ENDPOINT, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <form
      action={FORMSUBMIT_ENDPOINT}
      method="POST"
      onSubmit={onSubmit}
      className={className}
    >
      <input type="hidden" name="_subject" value={subject} />
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_template" value="table" />
      {autoresponse ? (
        <input type="hidden" name="_autoresponse" value={autoresponse} />
      ) : null}
      <input type="hidden" name="formulier" value={formulier} />

      {children}

      <button
        type="submit"
        disabled={status === "sending"}
        className={submitClassName}
      >
        {status === "sending" ? "Verzenden…" : submitLabel}
      </button>

      {status === "success" ? (
        <p
          role="status"
          className="mt-3 text-center text-xs font-medium text-[#176768]"
        >
          Bedankt! We nemen zo snel mogelijk contact met je op.
        </p>
      ) : null}
      {status === "error" ? (
        <p role="alert" className="mt-3 text-center text-xs text-red-600">
          Er ging iets mis. Probeer het opnieuw of mail{" "}
          <a href="mailto:yorin@revonc.be" className="underline">
            yorin@revonc.be
          </a>
          .
        </p>
      ) : null}
    </form>
  );
}
