export const plToEnSlugMap: Record<string, string> = {
  "wyjscie-wspolnika-mniejszosciowego-sp-zoo": "exit-of-minority-shareholder-sp-zoo",
  "odpowiedzialnosc-czlonkow-zarzadu-sp-zoo-decyzje-biznesowe": "liability-of-board-members-sp-zoo-business-decisions",
  "sygnalisci-prog-50-lipiec-2026": "whistleblower-act-50-person-threshold-july-2026",
  "umowy-b2b-kontrola-pip-8-lipca-2026": "b2b-contracts-labour-inspectorate-pip-july-2026",
  "fundacja-rodzinna-po-wecie-prezydenta-2026": "family-foundation-presidential-veto-2026",
  "zarzad-sukcesyjny-jdg": "succession-management-sole-proprietorship",
  "odszkodowanie-opozniony-lot-wakacje-2026": "compensation-delayed-flight-2026",
  "nowelizacja-ksh-akcje-imienne-okaziciel-2026": "ksh-amendment-registered-bearer-shares-2026",
  "e-doreczenia-jdg-1-pazdziernika-2026": "e-delivery-sole-trader-october-2026",
};

export const enToPlSlugMap: Record<string, string> = Object.fromEntries(
  Object.entries(plToEnSlugMap).map(([pl, en]) => [en, pl])
);
