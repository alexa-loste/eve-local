// Eve patch history — single source of truth.
// Consumed by the in-app "✨ What's new" overlay (index.html) AND the public
// changelog page (patches.html). Add a NEW entry at the TOP when a batch ships.
//
// ⚠️ EVERY RELEASE CARRIES ITS ENTRY IN THE TRAIN (alexa, #3533). Not afterwards:
// this file went 53 releases and seven weeks stale between Jun 24 and Aug 14
// because "update the changelog" was a separate step, and a separate step is one
// nobody does. sill checks for it at sign time from 2026-08-14.
//
// WHAT GOES IN: what a user can SEE change. Not what shipped — most of what ships
// is invisible from the outside (test harnesses, gates, billing plumbing, partner
// endpoints, prompt internals) and belongs in none of a user's sentences.
//
// HOW TO WRITE IT (alexa's standing copy rule, #3512 E): minimum words; cut any
// clause that does nothing for the reader; and never narrate the design thinking
// — no reassurance, no justification, no explaining why a choice was good. "A
// well-designed experience shouldn't have the user think about how we designed
// it." Say what changed for them and stop.
window.EVE_PATCHES = [
  { date: 'Aug 18, 2026', title: 'Easier to tap on a phone', items: [
    'Buttons across Eve were too small to hit reliably on a phone — the view switcher, the close and expand controls, the board’s stage arrows. They’re bigger now.',
    'The rest of them too: the settings and activity buttons, Memory Lane’s sort and group menus, the footer links.',
  ] },
  { date: 'Aug 18, 2026', title: 'One address, and consolidation pulls its weight', items: [
    'Eve lives at evecortex.com — every other address now brings you here. Signing up from a www link used to fail; it can’t anymore.',
    'Two checks inside consolidation had quietly stopped doing anything. They work again, so duplicate beliefs actually merge and near-duplicates get a real judgment.',
  ] },
  { date: 'Aug 17, 2026', title: 'Memory saving is back', items: [
    'Saving broke on Friday afternoon — the company serving our model retired it without notice. Every memory saved since was held safely, and they’re arriving now.',
  ] },
  { date: 'Aug 15, 2026', title: 'Phone-sized, and actually faster', items: [
    'On phones, the view buttons show as icons — Atlas and Board no longer get cut off.',
    'Picking a preference no longer jumps the list back to the top.',
    'A document is called what you called it, not a filename Eve made up.',
    'The mindmap legend sits straight when collapsed, and stays out of split view.',
    'If an edit doesn’t take, your assistant says so instead of reporting it done.',
    'Consolidation is faster — really this time. The speed-up announced Aug 14 never took effect.',
  ] },
  { date: 'Aug 14, 2026', title: 'Forgetting forgets, imports connect', items: [
    'Asking Eve to forget someone now removes their name everywhere — it could linger on the mindmap.',
    'People brought in by import show how they relate to you — on the map, in recall, and on the import review screen.',
    'Card summaries scale with what they cover — big folds get a real paragraph, and a summary no longer repeats the title.',
    'Your assistant can list and read your Eve documents, in any cortex.',
  ] },
  { date: 'Aug 14, 2026', title: 'Web chat', items: [
    'Talking to Eve on this website isn’t part of new accounts — Eve is a memory layer you reach through the assistant you already use.',
    'If you already chat with Eve here, nothing changes.',
  ] },
  { date: 'Aug 14, 2026', title: 'Edits that stick, groups that tell the truth', items: [
    'Editing a memory from the site now saves — it used to say “updated” without saving.',
    'A cortex appears under “Shared” only when it really is shared.',
    'On phones, setup no longer zooms in at the name step and stays stuck.',
  ] },
  { date: 'Aug 14, 2026', title: 'Consolidation, fixed', items: [
    'Consolidation could quietly finish without grouping anything. Fixed.',
  ] },
  { date: 'Aug 14, 2026', title: 'Tell Alexa', items: [
    'One place for feedback — the button bottom-left, or the link in the footer. What’s working, what isn’t, bugs, feature requests.',
    'You can send it anonymously: your name, email and browser aren’t attached.',
  ] },
  { date: 'Aug 14, 2026', title: 'Signing in works first time', items: [
    'Signing in with Google no longer sends you back to the sign-in page on the first attempt.',
  ] },
  { date: 'Aug 14, 2026', title: 'Setup asks where your work lives', items: [
    'Setup now asks where your documents live — Google Drive, Notion, GitHub, or somewhere else.',
    'Your answer adds one line to your pointer, so your assistant attaches the real document when it saves something instead of describing it.',
  ] },
  { date: 'Aug 13, 2026', title: 'Setup, rebuilt', items: [
    'One question per screen, and each one is a heading you can read at a glance.',
    'Setup ends on a menu of four things to do next rather than dropping you on an empty page. You can reopen it any time from the “?” button.',
    'Bring in a conversation you have already had: copy one message, paste it to your assistant, and watch the memory arrive.',
    'The last step waits for your first real memory and shows it landing on your mindmap.',
    'The guided tour only runs when you ask for it.',
  ] },
  { date: 'Aug 13, 2026', title: 'Usage meter, corrected', items: [
    'The usage meter read about ten times too high on founder accounts. It now shows what you have actually used.',
  ] },
  { date: 'Aug 12, 2026', title: 'A shorter pointer', items: [
    'The instructions you paste into your assistant are considerably shorter, and say the same thing.',
  ] },
  { date: 'Aug 11, 2026', title: 'The cortex list fits on screen', items: [
    'With a lot of cortexes, the picker used to run off the bottom of the window. It now caps its height and scrolls.',
  ] },
  { date: 'Aug 10, 2026', title: 'Consolidation hands control straight back', items: [
    'Asking Eve to consolidate no longer holds up your assistant while it works — it starts, and you get on with the conversation.',
    'In Memory Lane, the pin button now shows whether a memory is already pinned.',
  ] },
  { date: 'Aug 3, 2026', title: 'Activity, at a glance', items: [
    'An activity panel shows what Eve has been doing — what it encoded, and when.',
  ] },
  { date: 'Jul 30, 2026', title: 'Sign in with email, and undo', items: [
    'You can sign in with an email address instead of a Google account.',
    'Edits to a memory can be undone, and every memory keeps its version history.',
    'Cortexes you have finished with can be archived instead of deleted.',
    'Your assistant can read a memory in full, not just find it.',
    'Eve takes a snapshot of your memory once a day.',
  ] },
  { date: 'Jul 29, 2026', title: 'Atlas gets more honest', items: [
    'Atlas now shows memories that have not been filed into a chapter yet, rather than quietly leaving them out.',
    'Atlas on a shared cortex shows what everyone in it can see.',
    'Memories waiting to be encoded appear as cards, so you can see the queue rather than wonder.',
  ] },
  { date: 'Jul 28, 2026', title: 'Links behave like links', items: [
    'Attach a link at the moment you save a memory, in one step.',
    'URLs inside a memory are clickable.',
    'When importing, the scope step lists whole conversations instead of fragments of them.',
  ] },
  { date: 'Jul 23, 2026', title: 'Import your own history', items: [
    'Bring in a ChatGPT, Claude or Gemini export yourself: upload the file, search your own history, and tick what comes in.',
    'Eve reads only what you ticked, and you review every memory before anything is saved.',
  ] },
  { date: 'Jun 24, 2026', title: 'Docs, polished & navigable', items: [
    'The documentation got cleaner headings and is now reachable from the top nav and the footer — it’s no longer buried.',
    'When a docs section mentions another surface (Atlas → Memory Lane, and so on), it’s a clickable jump.',
    'A public “What’s new” page (this one) now collects every update, linked from the home page.',
  ] },
  { date: 'Jun 24, 2026', title: 'Pin a calendar event to a memory', items: [
    'Attach a calendar event to any memory. It keeps a live reference, so the memory shows the event’s current date and time — and follows it if the meeting moves.',
    'The event opens straight to your calendar.',
  ] },
  { date: 'Jun 24, 2026', title: 'Cleaner document links', items: [
    'Linking a document now leads with its URL — the cleanest, openable reference. The title you give it is what shows on the memory, clickable to the link.',
  ] },
  { date: 'Jun 24, 2026', title: 'A smarter Board', items: [
    '“Find my projects” scans your existing memories and proposes projects to add — handy if you used Eve before the Board existed. You keep the ones that fit.',
    'Each project stage now carries a gentle nudge toward the right way to work on it.',
  ] },
  { date: 'Jun 24, 2026', title: 'A warmer welcome', items: [
    'New here? A short primer walks you through the surfaces and how to work with Eve — and a one-time note appears the first time your memory fills in.',
  ] },
  { date: 'Jun 23, 2026', title: 'Atlas, Board & a public docs page', items: [
    'Atlas — the synthesized “where things stand” view — went full-screen, every statement traceable to its sources, with history one expand away.',
    'The Board (your projects, Backlog → Done) went live with real persistence.',
    'A public documentation page launched.',
  ] },
];
