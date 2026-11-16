"use client";

import { useState } from "react";

export default function AgeNotice() {
  const [dismissed, setDismissed] = useState(false);
  if (dismissed) return null;

  return (
    <div className="noticeBackdrop" role="dialog" aria-modal="true" aria-labelledby="notice-title">
      <div className="noticeCard">
        <div className="noticeMark">18+</div>
        <p className="eyebrow">DEVELOPMENT PREVIEW</p>
        <h2 id="notice-title">Age-restricted product concept</h2>
        <p>This is a non-functional design prototype with fictional placeholders only. This notice does not verify age or grant legal access to restricted material.</p>
        <button className="primaryButton" onClick={() => setDismissed(true)}>Continue to demo</button>
        <p className="finePrint">Do not use this notice as a production age-verification system.</p>
      </div>
    </div>
  );
}
