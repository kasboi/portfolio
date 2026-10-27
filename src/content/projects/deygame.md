---
title: "DeyGame"
description: "A real-time multiplayer platform for classic Nigerian games. Friends open a link and play Whot together with no account needed, with live game state kept in sync for every player."
liveLink: "https://deygame.com"
gitLink: "#"
technologies: ["Next.js", "TypeScript", "Socket.IO", "Redis", "Turborepo"]
featured: true
order: 1
---

DeyGame lets friends share a link and play Whot together in real time. The server owns the game rules and state, so every player sees the same board.

## Highlights

- Real-time multiplayer over Socket.IO with game state stored in Redis
- Full Whot rule set, including special card effects
- Monorepo with a shared types and card-logic package used by frontend and backend
