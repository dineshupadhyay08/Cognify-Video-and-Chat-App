# Cognify Theme Fix & Improvements TODO

## Core Theme Fixes (Priority 1)

- [x] Edit `frontend/src/index.css`: Remove hardcoded backgrounds/colors in StreamChat classes, replace with DaisyUI @apply (bg-base-100, gradient base-100 to base-200, etc.). Add global html/body styles.
- [x] Edit `frontend/src/pages/ChatPage.jsx`: Change `h-[93vh]` to `h-full`, add `bg-base-100` to wrapper div.
- [x] Edit `frontend/src/App.jsx`: Add `bg-base-100 antialiased` to root div. Optional: theme sync useEffect.
- [ ] Test: `cd frontend && npm run dev`, switch themes, scroll chats, verify uniform backgrounds.

## Improvements (Priority 2)

- [ ] Modern Chat UI: Custom message bubbles, better typography/spacing.
- [ ] Performance: Memoize components, virtual lists.
- [ ] Features: Typing indicator, reactions via StreamChat.
- [ ] Scalable Theming: CSS vars support.

**Next Step:** Implement index.css fix."

