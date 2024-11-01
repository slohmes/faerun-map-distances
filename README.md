# faerun-map-distances
Calculate travel time between any two cities on a map of Faerun.

==> Pausing bc the scale on these maps is weird. Regional maps and the global maps have different scales.
If we want to continue, we'd probably want to start with a regional map and fudge distances between regional maps for playability.


Global map: https://i.ibb.co/dgYvsZ7/Faerun-Map-Redone-Roll-20-Res-Hexes.jpg


## Step 1: get the length of each line segment

Using measure tool in Gimp to get the # of pixels on each line segment between cities on the map.

Store distances in "Faerun map distance calculator" for ease of collab and calculating px/mi conversion --> c/p into `./distances.csv`


Scale distance conversion:
273 pixels = 360 miles

Alt scale: 100 px = 20 mi
1 pixel = 20/100 miles


Sword coast regional map: 100 mi = 128 px ⇒  px = 100/128
Neverwinter -> waterdeep: 431 px = 336.7 mi





## Step 2: prototype js script to calcuate distances between any two cities


## Step 3: website
