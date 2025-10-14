import React from "react";
import { EmailForm, ViberButton, WhatsappButton } from "./components/Contact";

export default function page() {
  return (
    <div>
      <ViberButton />
      <WhatsappButton />
      <EmailForm />
    </div>
  );
}
