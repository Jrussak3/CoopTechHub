import type { ReactNode } from 'react';
import './support-contact-section.css';

type SupportContactSectionProps = {
  title: ReactNode;
  description: string;
  backgroundImageSrc: string;
  email?: string;
  className?: string;
};

export default function SupportContactSection({
  title,
  description,
  backgroundImageSrc,
  email = 'info@hub.coop',
  className,
}: SupportContactSectionProps) {
  return (
    <section className={`support-contact-section ${className ?? ''}`.trim()}>
      <div className="support-contact-backdrop" aria-hidden="true">
        <img src={backgroundImageSrc} alt="" />
        <div className="support-contact-overlay" />
      </div>

      <div className="support-contact-card">
        <div className="support-contact-content">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>

        <a className="support-contact-email-link" href={`mailto:${email}`}>
          {email}
        </a>

        <p className="support-contact-footnote">
          Na wszystkie wiadomości odpowiadamy w przeciągu 48 godzin
        </p>
      </div>
    </section>
  );
}
