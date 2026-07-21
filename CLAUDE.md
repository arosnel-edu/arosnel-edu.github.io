# CLAUDE.md — FYRE Bartending Website

## About this project

This repo is the public website for **FYRE Bartending**, a premium mobile bartending
business. It is hosted on **GitHub Pages** at `arosnel-edu.github.io` and served at
**fyre-bar.com**. Changes pushed to the default branch go live — treat every commit as
production.

## The business

- **What it is:** Premium mobile bartending — we bring the full bar experience to the
  client's venue.
- **Service area:** Sonoma County, Marin County, and the greater San Francisco Bay Area.
- **Owner/operator:** Sole proprietor, DBA filed in Sonoma County. RBS certified.
- **Contact:** hello@fyre-bar.com
- **Social:** Instagram @fyrebartending, plus a Facebook business page.

### Packages and pricing

| Package | Price |
|---|---|
| Spark | $500 |
| Blaze | $895 |
| Inferno | $1,400 |

Pricing appears in multiple places on the site. If it changes, grep for all occurrences
rather than editing only the packages section.

## Brand voice

- Premium but not stuffy. Warm, confident, a little bit of fire imagery — never cheesy.
- Wine-country and Sonoma-local angles are a deliberate differentiator. Lean into the
  regional identity where it fits naturally.
- Write like a skilled operator talking to a host who wants their event handled, not
  like a corporate caterer.
- Avoid: exclamation-point-heavy copy, generic event-industry filler
  ("we make your special day unforgettable"), and stock-photo language.

## Technical conventions

- **Stack:** Static HTML/CSS/vanilla JavaScript. No build step, no framework.
  Keep it that way unless there's a strong reason.
- **Forms:** The contact form posts to Formspree (endpoint `xykvwvgo`). Do not change the
  endpoint or replace the form handler without asking.
- **Images:** Reference image files by path. Do not inline base64 — that was cleaned up
  deliberately and shouldn't come back.
- **Video:** The hero video is large; be careful with paths and loading behavior. Any
  change that affects hero video loading should be flagged before committing.
- **Cloudflare:** Cloudflare scripts have interfered with page JavaScript before. If
  something behaves oddly in production but works locally, suspect this first.

## Working agreements

- **Ask before:** changing the Formspree endpoint, altering DNS or domain config,
  restructuring the page layout, adding any dependency or build tooling.
- **Just do it:** copy edits, CSS fixes, accessibility improvements, adding sections that
  follow existing patterns, fixing broken links.
- **Commits:** Small and descriptive. One logical change per commit.
- **Before committing:** confirm the change renders correctly and doesn't break the
  contact form or hero video.

## Context worth knowing

The long-term goal is to make FYRE the primary income source, with as much of the
business automated as possible. Website work should support lead capture and booking
conversion — that's the site's job. When suggesting changes, weigh them against whether
they help a potential client understand the offering and get in touch.
