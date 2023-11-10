Larches are awesome, the best way to see them, at least within reasonable driving distance of calgary, is on foot (or better on bike). Thats no secret. Literally. When larches start to turn in the fall, hundreds of thousands of people flock to well know "Larch Hikes, making them slightly less fun. 

## Story
- Create a web-map showing all known hiking trails into Larchy areas in and around Banff National Park, not just ones on Vice City's "top 10 Larch hikes to do this Autumn".
- Get Hiking trails with OpenStreetMap's API.
- Get Larches!...
  - This is tricky, because Larches live amongst other conifers that apparently have simular signatures throughout the summer. Sure they change their color throughout the year, but the timing depends on latitude , elevation, species, and the year. Plus timing of color change also coincides with winter, where snow cover or weather could obscure their signatures. 
  - First attempt will be a multi-temporal, multiband land cover classification of Sentinel 2 Images using random forest model in ESA Snap!, Gao et al. (2015) seemed to be successful with this approach, although these were plantations of larches so I can assume more homogeneous stands.
  - How do I get training data? No success finding classified Larches, although I seem to remember I found an old canadian LC with Larches once. If I can't find it again I will use Vice City's "top 10 Larch hikes to do this Autumnn" with Google maps, and Sentinel 2 imagery to identify Larches   myself.
- Using Vector Tile servers, return all larches, and all trails that intersect or are close to larches.
- If classification is successful, us it to identify timing of color change and include that as data. So a user could see when to go on such a hike if they want to see some yellow-ass needles. 

## Citations 
Gao, Tian & Jiao-jun, Zhu & Zheng, Xiao & Shang, Guiduo & Huang, Liyan & Wu, Shangrong. (2015). Mapping Spatial Distribution of Larch Plantations from Multi-Seasonal Landsat-8 OLI Imagery and Multi-Scale Textures Using Random Forests. Remote Sensing. 7. 1702-1720. 10.3390/rs70201702. 

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).
