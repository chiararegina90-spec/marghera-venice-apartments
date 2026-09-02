# Welcome Books — images + CH selector fix — 2026-09-02

- Fixed protected Welcome Book images for Rossi Apartment and Dimora Castelli by extending the authenticated guest cookie path to `/`, so the same HttpOnly/Secure guest session is sent to protected `/guest-content/...` image requests.
- Guest content remains protected server-side by `proxy.ts`; unauthenticated direct asset requests still redirect to the appropriate guest login.
- Replaced the visible Chinese flag marker in Guest language selectors with `CH`, matching the public site convention and avoiding systems that render the flag emoji as `CN`.
- Technical locale remains `zh` / `zh-CN`; routes are unchanged.
