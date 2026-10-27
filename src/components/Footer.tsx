export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-12">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="text-center md:text-left">
            <p className="font-heading text-lg font-semibold text-text-primary">
              HookForge
            </p>
            <p className="mt-1 text-sm text-text-secondary">
              Generate high-converting hooks and content packs.
            </p>
          </div>

          <div className="flex gap-6 text-sm text-text-secondary">
            <a href="#pricing" className="hover:text-text-primary">
              Pricing
            </a>
            <a href="#" className="hover:text-text-primary">
              Privacy
            </a>
            <a href="#" className="hover:text-text-primary">
              Terms
            </a>
          </div>
        </div>

        <div className="mt-8 border-t border-white/5 pt-6 text-center text-sm text-text-secondary">
          © 2026 HookForge. All rights reserved.
        </div>
      </div>
    </footer>
  );
}