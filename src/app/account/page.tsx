"use client";

import { useState } from "react";

type Mode = "signin" | "register";

export default function AccountPage() {
  const [mode, setMode] = useState<Mode>("signin");

  return (
    <main className="accountPage">
      <header className="topbar">
        <a className="brand" href="/"><span className="brandIcon">X</span><span>XXX<span className="red">VIRAL</span><small>VIDEOS 2027 · UI DEMO</small></span></a>
        <nav><a href="/#browse">Browse</a><a href="/#safety">Safety Centre</a></nav>
        <span className="demoPill">PROTOTYPE</span>
      </header>

      <section className="accountShell">
        <div className="accountIntro">
          <p className="eyebrow">ACCOUNT EXPERIENCE PREVIEW</p>
          <h1>One account.<br /><span className="red">Clear controls.</span></h1>
          <p>This page previews the account interface only. Authentication, identity checks, and account creation are not connected.</p>
          <ul>
            <li>Privacy-first account design</li>
            <li>Age-assurance provider integration required before restricted access</li>
            <li>Account security and recovery workflows still need implementation</li>
          </ul>
        </div>

        <section className="accountCard" aria-labelledby="account-title">
          <div className="accountTabs" role="tablist" aria-label="Account mode">
            <button type="button" role="tab" aria-selected={mode === "signin"} className={mode === "signin" ? "accountTab selected" : "accountTab"} onClick={() => setMode("signin")}>Sign in</button>
            <button type="button" role="tab" aria-selected={mode === "register"} className={mode === "register" ? "accountTab selected" : "accountTab"} onClick={() => setMode("register")}>Create account</button>
          </div>
          <p className="eyebrow">DEMO ONLY · NOT CONNECTED</p>
          <h2 id="account-title">{mode === "signin" ? "Welcome back" : "Create your account"}</h2>
          <p className="accountSub">{mode === "signin" ? "The sign-in form is a visual preview." : "The registration form is a visual preview."}</p>

          {mode === "register" && (
            <label className="accountLabel">Display name<input disabled placeholder="Your display name" /></label>
          )}
          <label className="accountLabel">Email address<input disabled type="email" placeholder="name@example.com" /></label>
          <label className="accountLabel">Password<input disabled type="password" placeholder="Not enabled in this demo" /></label>
          {mode === "register" && (
            <label className="accountCheck"><input type="checkbox" disabled /> I have read the privacy notice and terms (preview only)</label>
          )}
          <button type="button" className="primaryButton accountSubmit" disabled>{mode === "signin" ? "Sign in unavailable" : "Registration unavailable"}</button>
          <p className="accountFine">Do not enter real personal information. This prototype does not submit, store, or transmit form data.</p>
        </section>
      </section>

      <section className="accountFoot">
        <strong>Before enabling real accounts</strong>
        <p>Complete legal review, publish privacy and terms documents, configure secure authentication and account recovery, assess data retention, and integrate an approved age-assurance service where legally required.</p>
        <a href="/#safety">Review the Safety & Compliance Centre →</a>
      </section>
    </main>
  );
}
