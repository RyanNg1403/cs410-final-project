# CS410 Final Project Page

Static GitHub Pages site for the CS410.Q21 final project on the paper
**Evolving Populations of Diverse RL Agents with MAP-Elites**.

Course context was checked with the UIT CLI:

```bash
uit courses --current
uit contents 19227
```

The course is `CS410.Q21 - Mạng neural và thuật giải di truyền`.

## Local preview

```bash
python3 -m http.server 8000
```

Then open <http://localhost:8000>.

## Adding more videos

1. Put new `.mp4` files in `assets/videos/`.
2. Create a poster frame in `assets/posters/`.
3. Add a new `.video-card` block in `index.html`.

The cloned `QDax/` directory is intentionally ignored. The page links to the upstream QDax repository instead of publishing the full experiment repo.
