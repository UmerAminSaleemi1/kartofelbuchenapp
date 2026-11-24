"use client";

import { Menu, ShoppingBag, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const navigationItems = [
	{ label: "Startseite", href: "/" },
	{ label: "Produkte", href: "#produkte" },
	{ label: "Unternehmen", href: "#unternehmen" },
	{ label: "Kontakt", href: "#kontakt" },
	{ label: "Shop", href: "#shop", prominent: true },
];

export function SiteHeader() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const menuButtonRef = useRef<HTMLButtonElement>(null);

	useEffect(() => {
		if (!isMenuOpen) return;

		const handleEscape = (event: KeyboardEvent) => {
			if (event.key === "Escape") {
				setIsMenuOpen(false);
				menuButtonRef.current?.focus();
			}
		};

		document.addEventListener("keydown", handleEscape);
		return () => document.removeEventListener("keydown", handleEscape);
	}, [isMenuOpen]);

	const closeMenu = () => setIsMenuOpen(false);

	return (
		<header className="relative z-50 border-b border-[var(--color-border)] bg-[var(--color-off-white)]/95 backdrop-blur-sm">
			<div className="mx-auto flex min-h-20 max-w-[var(--container-content)] items-center justify-between gap-4 px-[var(--space-page-x)] py-3">
				<Link
					href="/"
					className="flex min-w-0 flex-col leading-none text-[var(--color-forest-green)] focus-visible:rounded-sm"
					aria-label="KARTOFFELPOWER — Startseite"
					onClick={closeMenu}
				>
					<span className="text-base font-bold tracking-[0.14em] sm:text-lg">
						KARTOFFELPOWER
					</span>
					<span className="mt-1.5 self-start rounded-full bg-[var(--color-warm-cream)] px-2 py-1 text-[0.625rem] font-bold tracking-[0.16em] text-[var(--color-text)]">
						PRIVATE CONCEPT
					</span>
				</Link>

				<nav
					className="hidden items-center gap-1 lg:flex"
					aria-label="Hauptnavigation"
				>
					{navigationItems.map((item) => (
						<Link
							key={item.label}
							href={item.href}
							className={
								item.prominent
									? "ml-2 rounded-full bg-[var(--color-forest-green)] px-5 py-3 text-sm font-bold text-white shadow-sm transition-colors hover:bg-[#173722] hover:text-white focus-visible:text-white active:bg-[#173722] active:text-white"
									: "rounded-full px-3 py-2 text-sm font-semibold text-[var(--color-text)] transition-colors hover:bg-[var(--color-warm-cream)] hover:text-[var(--color-forest-green)]"
							}
						>
							{item.label}
						</Link>
					))}
				</nav>

				<div className="flex shrink-0 items-center gap-1">
					<button
						type="button"
						className="flex size-11 items-center justify-center rounded-full text-[var(--color-forest-green)] transition-colors hover:bg-[var(--color-warm-cream)]"
						aria-label="Warenkorb — derzeit kein funktionaler Warenkorb"
						title="Konzept: Warenkorb"
						disabled
					>
						<ShoppingBag aria-hidden="true" size={21} strokeWidth={1.8} />
					</button>

					<button
						ref={menuButtonRef}
						type="button"
						className="flex size-11 items-center justify-center rounded-full text-[var(--color-forest-green)] transition-colors hover:bg-[var(--color-warm-cream)] lg:hidden"
						aria-label={
							isMenuOpen
								? "Navigationsmenü schließen"
								: "Navigationsmenü öffnen"
						}
						aria-expanded={isMenuOpen}
						aria-controls="mobile-navigation"
						onClick={() => setIsMenuOpen((current) => !current)}
					>
						{isMenuOpen ? (
							<X aria-hidden="true" size={23} strokeWidth={1.8} />
						) : (
							<Menu aria-hidden="true" size={23} strokeWidth={1.8} />
						)}
					</button>
				</div>
			</div>

			{isMenuOpen && (
				<nav
					id="mobile-navigation"
					className="absolute left-0 right-0 top-full border-b border-[var(--color-border)] bg-[var(--color-off-white)] px-[var(--space-page-x)] py-4 shadow-lg lg:hidden"
					aria-label="Mobile Hauptnavigation"
				>
					<div className="mx-auto flex max-w-[var(--container-content)] flex-col gap-1">
						{navigationItems.map((item) => (
							<Link
								key={item.label}
								href={item.href}
								className={
									item.prominent
										? "mt-2 rounded-xl bg-[var(--color-forest-green)] px-4 py-3.5 text-center text-sm font-bold text-white hover:text-white focus-visible:text-white active:text-white"
										: "rounded-xl px-4 py-3.5 text-base font-semibold text-[var(--color-text)] transition-colors hover:bg-[var(--color-warm-cream)]"
								}
								onClick={closeMenu}
							>
								{item.label}
							</Link>
						))}
					</div>
				</nav>
			)}
		</header>
	);
}
