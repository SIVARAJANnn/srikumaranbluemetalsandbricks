# Sri Kumaran Blue Metals & Bricks

The official website for Sri Kumaran Blue Metals & Bricks, a family construction-materials supplier serving Kilakuvadi Village, Thuraiyur, Tamil Nadu since 1970.

## Live website

https://srikumaranbluemetalsandbricks.in/

## About the site

- M Sand, P Sand, aggregates, jally, chips, quarry materials, and ISI-certified Fly Ash Bricks
- Product catalogue, gallery, delivery areas, construction-material guides, and contact/WhatsApp enquiries
- Responsive React/Vite frontend with Hostinger-compatible static deployment
- SEO metadata, canonical URLs, LocalBusiness structured data, `robots.txt`, and `sitemap.xml`

## Local development

Requirements: Node.js and npm.

```bash
npm install
npm run dev
```

Create a production build with:

```bash
npm run build
```

The production output is generated in `dist/` and can be deployed as a static website. `node_modules`, `dist`, environment files, ZIP archives, and logs are intentionally excluded from Git.

## Project structure

- `src/` — React application, routes, components, content, and site data
- `public/images/` — locally stored website image assets
- `public/robots.txt` — crawler instructions and sitemap reference
- `public/sitemap.xml` — public page sitemap
- `index.html` — domain metadata and LocalBusiness structured data

## Media

Website images used by the frontend are stored locally in `public/images` so the repository is self-contained. Gallery videos remain externally hosted and are referenced by their existing URLs.

## Website screenshots

Screenshots of the local website preview are stored in `docs/screenshots/`:

- [Homepage](docs/screenshots/home.png)
- [Products](docs/screenshots/products.png)
- [Gallery](docs/screenshots/gallery.png)
- [Contact](docs/screenshots/contact.png)

## Deployment

The production website is hosted on Hostinger at `srikumaranbluemetalsandbricks.in`. Build the project with `npm run build`, then deploy the contents of `dist/` with `index.html` at the document-root level.
