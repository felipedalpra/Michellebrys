export function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="12" cy="12" r="4.2" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" />
    </svg>
  );
}

export function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M14.5 8.5h2V5.6c-.35-.05-1.54-.15-2.94-.15-2.9 0-4.9 1.77-4.9 5.02V13H6.5v3.2h2.66V22h3.3v-5.8h2.56l.41-3.2h-2.97v-2.2c0-.92.25-1.55 1.54-1.55Z"
        fill="currentColor"
      />
    </svg>
  );
}
